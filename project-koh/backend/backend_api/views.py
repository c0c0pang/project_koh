from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Lecture, Reply, category
from .serializers import LectureSerializer, ReplySerializer, Lecturepost, TitleSerializer
from rest_framework.decorators import api_view,action
from django.http.response import HttpResponse
from rest_framework.generics import CreateAPIView
from django.db.models import Q
from rest_framework.viewsets import ModelViewSet

class titleShow(APIView):
    def get(self, request, *args, **kwargs):
      titleList = category.objects.all().order_by('category')
      data = {
        'title' : titleList,
      }
      serializer = TitleSerializer(instance=data)
      return Response(serializer.data)


@api_view(['GET'])
def get_reply(request):
    posts = Reply.objects.all()
    serailized_posts= ReplySerializer(posts, many=True)
    return Response(serailized_posts.data)

class Lecture_create(CreateAPIView):
    serializer_class = Lecturepost


class LectureViewSet(ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer # get_s

    @action(detail=False)
    def lecture_list(self,request): # 삭제안된 강의 목록을 확인
        qs = self.queryset.filter(is_public=True) # is_public = True인 값만을 확인가능
        serializer = self.get_serializer(qs,many=True) #LectureSerializer(qs, many=True)
        return Response(serializer.data)
    
    @action(detail=False) 
    def search(self,request): # 검색을 통한 강의목록 확인 
        qs = self.queryset.filter(is_public=True)
        search_title = self.request.GET.get('search','') # /lecture/search/?search=자료구조
        search_category = self.request.GET.get('category','') # /lecture/search/?category=IT
        
        if search_title:
            search_list = qs.filter(
                Q(title__icontains = search_title) |
                Q(teacher__icontains = search_title) 
            )
            serailized_posts= self.get_serializer(search_list, many=True)
        elif search_category :
            search_list = qs.filter(
                Q(category__icontains = search_category)  
            )
            serailized_posts= self.get_serializer(search_list, many=True)
        else :
            return Response(status = 200)
        
        return Response(serailized_posts.data)
