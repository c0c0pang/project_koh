from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Lecture, Reply, category, User
from .serializers import LectureSerializer, ReplySerializer, TitleSerializer, UserSerializer
from rest_framework.decorators import action
from django.http.response import HttpResponse
from django.db.models import Q
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import get_object_or_404

class titleShow(APIView):
    def get(self, request):
      titleList = category.objects.all().order_by('category')
      data = {
        'title' : titleList,
      }
      serializer = TitleSerializer(instance=data)
      return Response(serializer.data)

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer 

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None): # pk를 주소로 연결
        user = User.objects.get(wallet_address=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    @action(detail=False) 
    def check_user(self,request): # 검색을 통한 강의목록 확인 
        qs = User.objects.all()
        search_address = self.request.GET.get('address','') 

        if search_address:
            search_list = qs.filter(
                Q(wallet_address__icontains = search_address) 
            )
            if len(search_list) == 0 :
                return Response(status =200)
            serailized_posts= self.get_serializer(search_list)
            return Response(serailized_posts.data)
        else :
            return Response(status =200)

    


class LectureViewSet(ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer # get_serializer

    def list(self, request): # 모든 강의목록 확인
        queryset = Lecture.objects.all()
        serializer = LectureSerializer(queryset, many=True)
        return Response(serializer.data)

    # def retrieve(self, request, pk=None): # 원하는 번호의 강의 추출 ex) /lecture/3
    #     queryset = Lecture.objects.all()
    #     user = get_object_or_404(queryset, pk=pk)
    #     serializer = LectureSerializer(user)
    #     return Response(serializer.data)

    @action(detail=False)
    def lecture_list(self,request): # 삭제안된 강의 목록을 확인
        qs = self.queryset.filter(is_public=True) # is_public = True인 값만을 확인가능
        serializer = self.get_serializer(qs,many=True) #LectureSerializer(qs, many=True)
        return Response(serializer.data)
    
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
    
    def post(request):
        if request.method == 'POST':
            category = request.POST['category']
            title = request.POST['title']
            teacher = request.POST['teacher']
            le_contains = request.POST['le_contains']
            data = {
                'category': category,
                'title': title,
                'teacher': teacher,
                'le_contains': le_contains
            }
            serializer = LectureSerializer(instance=data)
            return Response(serializer.data)

    