from django.core.exceptions import *
from rest_framework.parsers import JSONParser, MultiPartParser
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Lecture, User, Wallet
from .serializers import LectureSerializer, UserSerializer
from rest_framework.decorators import action
from django.http.response import HttpResponse
from django.db.models import Q
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt,name='dispatch')
class UserViewSet(ModelViewSet):
    parser_classes = [JSONParser, MultiPartParser]
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    
    def list(self, request):
        queryset = User.objects.all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    # user데이터를 지갑주소값으로 접근 GET /user/{wallet_address}
    def retrieve(self, request, pk=None):
        try: 
            user = User.objects.get(wallet_address=pk)
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({"message": "존재하지 않는 address({})입니다".format(pk)}, status=status.HTTP_404_NOT_FOUND)

    # user에 중복된 address가 있는지 여부 판단 GET /user/check_user/?address=0000
    @action(detail=False, methods=['get'])  
    def check_user(self,request): # 검색을 통한 강의목록 확인 
        qs = self.queryset
        search_address = self.request.GET.get('address','') 
        if search_address:
            search_list = qs.filter(wallet_address = search_address)
            if len(search_list) == 0:
                return Response("no user") # 검색 결과 없으므로 생성하도록 한다, 프론트에서 여기를 어떻게 받아들일지 확인하여 보완
            serailized_posts= self.get_serializer(search_list, many=True)
        else :
            return Response(status =200)
        return Response(serailized_posts.data)   

    # user데이터 생성, 중복이름을 방지한다, POST /user/
    def create(self,request):
        serializer =  self.get_serializer(data=request.data)
        same_name = self.queryset.filter(Q(userName__icontains = request.data['userName'])) # 중복된 이름 확인
        if len(same_name) != 0: 
            return Response("same user name")
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    # 삭제, DELETE /user/{wallet_address}/delete_user/
    @action(detail=True, methods=['delete'])
    def delete_user(self,request, pk=None):
        user = self.queryset.objects.filter(wallet_address = pk)
        if len(user)!=0:
            user.delete()
            return Response("complete delete")
        else:
            return Response("not found user")


    # 수정, PUT /user/{wallet_address}/update_user/
    @action(detail=True, methods=['put'])
    def update_user(self, request, pk=None):
        user  = User.objects.filter(wallet_address = pk)
        if len(user) != 0 :
            for i in request.data.keys():
                if i == 'userName':
                    user.update(userName = request.data['userName'])    
                elif i =='email':
                    user.update(email = request.data['email'])
            serializer = self.get_serializer(user, many=True)
            return Response(serializer.data)
        else:
            return Response("일치되는 유저가 없습니다")
    
    # token번호 부여, PUT /user/{wallet_address}/add_token/?token=00
    @action(detail=True, methods=['get'])
    def add_token(self,request, pk=None):
        entry = User.objects.filter(wallet_address = pk)
        input_token = self.request.GET.get('token','') 
        for temp in entry:
            find_token = Wallet.objects.get(token = input_token)
            temp.tokens.add(find_token)
            temp.save()
        serializer = self.get_serializer(entry, many=True)
        return Response(serializer.data)

    # token 확인, GET /user/{wallet_address}/check_token/?token=00   // form-data에 'tokens'필드를 추가하여 보내주어야 한다
    @action(detail=True, methods=['get']) 
    def check_token(self, request, pk=None):
        user  = User.objects.filter(wallet_address = pk)
        input_token = self.request.GET.get('token','') 
        token_list =[]
        for temp in user:
            a = temp.tokens.values_list()
            for i in a:
                list(i)
                token_list.append(i[1])
        print(token_list, input_token)
        if int(input_token) in token_list:
            return Response("have token")
        else :
            return Response("have not token")            

@method_decorator(csrf_exempt,name='dispatch')
class LectureViewSet(ModelViewSet):
    parser_classes = [MultiPartParser]
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer # get_serializer

    def list(self, request):
        queryset = Lecture.objects.all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # 원하는 번호의 강의 추출 GET /lecture/{pk}
    def retrieve(self, request, pk=None): 
        try:
            lecture = get_object_or_404(self.queryset, pk=pk)
            serializer = self.get_serializer(lecture)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({"message": "존재하지 않는 UUID({})입니다".format(pk)}, status=status.HTTP_404_NOT_FOUND)
    
    # GET /lecture/{id}/countup/
    @action(detail=True, methods=['get'])
    def countup(self,request, pk=None):
        lecture  = self.queryset.filter(id = pk)
        for temp in lecture:
            temp.count +=1
            temp.save()
        serializer = self.get_serializer(lecture, many=True)
        return Response(serializer.data)
    
    # 강의리스트중에서 입력으로 넣은 이름,강사,카테고리에 맞는 리스트를 보여준다
    @action(detail=False) 
    def search(self,request): # 검색을 통한 강의목록 확인 
        qs = self.queryset
        search_title = self.request.GET.get('search','') # ex) GET /lecture/search/?search=자료구조
        search_category = self.request.GET.get('category','') # ex) GET /lecture/search/?category=IT
        
        if search_title:
            search_list = qs.filter(
                Q(title__icontains = search_title) |
                Q(teacher__icontains = search_title) 
            )
            if len(search_list) == 0:
                return Response(status=200)
            serailized_posts= self.get_serializer(search_list, many=True)
        elif search_category :
            search_list = qs.filter(
                Q(category__icontains = search_category)  
            )
            serailized_posts= self.get_serializer(search_list, many=True)
        else :
            return Response(status = 200)
        
        return Response(serailized_posts.data)

    # 이미지 파일과 같이 강의를 생성
    def create(self,request):
        serializer =  self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            for key in serializer.data.keys():
                if key =='id':
                    new_object = Wallet.objects.create(token = serializer.data[key])
            return Response(serializer.data)
        return Response(serializer.errors)

    # 삭제, DELETE /lecture/{id}/delete_lecture/
    @action(detail=True, methods=['delete'])  
    def delete_lecture(self,request, pk=None):
        lecture = self.queryset.filter(id = pk)
        if len(lecture)!=0:
            lecture.delete()
            return Response("complete delete")
        else:
            return Response("not found lecture")

    # 수정, PUT /lecture/{id}/update_lecture/
    @action(detail=True, methods=['put'])
    def update_lecture(self, request, pk=None):
        lecture  = self.queryset.filter(id = pk)
        if len(lecture) != 0 :
            for i in request.data.keys():
                if i == 'category':
                    lecture.update(category = request.data['category'])    
                elif i =='title':
                    lecture.update(title = request.data['title'])
                elif i =='teacher':
                    lecture.update(teacher = request.data['teacher'])
                elif i =='content':
                    lecture.update(content = request.data['content'])
                elif i =='count':
                    lecture.update(count = request.data['count'])
                elif i =='video_url':
                    lecture.update(video_url = request.data['video_url'])
                elif i =='image_url':
                    lecture.update(image_url = request.data['image_url'])
                elif i =='thumbnail':
                    lecture.update(thumbnail = request.data['thumbnail'])
            serializer = self.get_serializer(lecture, many=True)
            return Response(serializer.data)
        else:
            return Response("일치되는 강의가 없습니다")
 