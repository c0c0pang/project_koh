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
from django.shortcuts import redirect
from rest_framework.parsers import JSONParser
from rest_framework.parsers import MultiPartParser
class test(APIView):
    def post(self, request):
        return Response("test",status=200)

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
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    parser_classes = [JSONParser]
    def list(self, request):
        queryset = self.queryset.filter(is_public=True)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    # user데이터를 지갑주소값으로 접근 url: /user/00000 wallet_address로 검색
    def retrieve(self, request, pk=None): 
        user = User.objects.get(wallet_address=pk)
        serializer = UserSerializer(user)
        if serializer.is_valid():
            return Response(serializer.data)
        else :
            return Response(serializer.errors)

    # user에 중복된 address가 있는지 여부 판단 url: /user/check_user/?address=0000
    @action(detail=False, methods=['get'])  
    def check_user(self,request): # 검색을 통한 강의목록 확인 
        qs = self.queryset.filter(is_public = True)
        search_address = self.request.GET.get('address','') 

        if search_address:
            search_list = qs.filter(wallet_address = search_address)
            if len(search_list) == 0:
                return Response("no user") # 검색 결과 없으므로 생성하도록 한다, 프론트에서 여기를 어떻게 받아들일지 확인하여 보완
            serailized_posts= self.get_serializer(search_list, many=True)
        else :
            return Response(status =200)
        return Response(serailized_posts.data)   

    # user데이터 생성, 중복이름을 방지한다
    def create(self,request):
        serializer =  UserSerializer(data=request.data)
        same_name = self.queryset.filter(Q(userName__icontains = request.data['userName'])) # 중복된 이름 확인
        if len(same_name) != 0:
            return Response("same user name")
        if serializer.is_valid():
            serializer.save(is_public =True)
            return Response(serializer.data)
        return Response(serializer.errors)

    # @action(detail=True, methods=['post'])
    # def set_username(self, request, pk=None):
    #     user = self.get_object()
    #     serializer = UserSerializer(data=request.data)
    #     if serializer.is_valid():
    #         user.set_username(serializer.validated_data['userName'])
    #         user.save()
    #         return Response({'status': 'username set'})
    #     else:
    #         return Response(serializer.errors)

    # url : PATCH user/wallet_address/delete/ , 삭제
    @action(detail=True, methods=['patch'])
    def delete(self, request, pk):
        instance = self.get_object()
        instance.is_public = False
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

@method_decorator(csrf_exempt,name='dispatch')
class LectureViewSet(ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer # get_serializer
    parser_classes = [MultiPartParser]
    def list(self, request):
        queryset = self.queryset.filter(is_public=True)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # 원하는 번호의 강의 추출 url: /lecture/3
    def retrieve(self, request, pk=None): 
        queryset = Lecture.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = LectureSerializer(user)
        return Response(serializer.data)

    # 삭제되지않은 강의 리스트를 보여준다
    @action(detail=False)
    def lecture_list(self,request): # 삭제안된 강의 목록을 확인
        qs = self.queryset.filter(is_public=True) # is_public = True인 값만을 확인가능
        serializer = self.get_serializer(qs,many=True) 
        return Response(serializer.data)
    
    # 강의리스트중에서 입력으로 넣은 이름,강사,카테고리에 맞는 리스트를 보여준다
    @action(detail=False) 
    def search(self,request): # 검색을 통한 강의목록 확인 
        qs = self.queryset.filter(is_public=True)
        search_title = self.request.GET.get('search','') # ex) /lecture/search/?search=자료구조
        search_category = self.request.GET.get('category','') # ex) /lecture/search/?category=IT
        
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
        serializer =  LectureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(is_public =True)
            return Response(serializer.data)
        return Response(serializer.errors)
 