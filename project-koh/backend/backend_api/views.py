from django.core.exceptions import *
from rest_framework.parsers import JSONParser, MultiPartParser,FormParser
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Lecture, Reply, category, User
from .serializers import LectureSerializer, ReplySerializer, TitleSerializer, UserSerializer
from rest_framework.decorators import action
from django.http.response import HttpResponse
from django.db.models import Q
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

class titleShow(APIView):
    def get(self, request):
      titleList = category.objects.all().order_by('category')
      data = {
        'title' : titleList,
      }
      serializer = TitleSerializer(instance=data)
      return Response(serializer.data)

@method_decorator(csrf_exempt,name='dispatch')
class UserViewSet(ModelViewSet):
    parser_classes = [JSONParser]
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
        user = User.objects.filter(wallet_address = pk)
        user.delete()
        return Response("complete delete")

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
            user = get_object_or_404(self.queryset, pk=pk)
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({"message": "존재하지 않는 UUID({})입니다".format(pk)}, status=status.HTTP_404_NOT_FOUND)
    
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
            return Response(serializer.data)
        return Response(serializer.errors)

    # 삭제, DELETE /lecture/{id}/delete_lecture/
    @action(detail=True, methods=['delete'])  
    def delete_lecture(self,request, pk=None):
        lecture = Lecture.objects.filter(id = pk)
        lecture.delete()
        return Response("complete delete")

    # 수정, PUT /lecture/{id}/update_lecture/
    @action(detail=True, methods=['put'])
    def update_lecture(self, request, pk=None):
        lecture  = Lecture.objects.filter(id = pk)
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
                elif i =='headcount':
                    lecture.update(headcount = request.data['headcount'])
                elif i =='thumbnail':
                    lecture.update(thumbnail = request.data['thumbnail'])   
            serializer = self.get_serializer(lecture, many=True)
            return Response(serializer.data)
        else:
            return Response("일치되는 강의가 없습니다")
 