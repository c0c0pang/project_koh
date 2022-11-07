from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Lecture, Reply,testLecture, category
from .serializers import LectureSerializer, ReplySerializer, testpost, testLectureSerializer,TitleSerializer
from django.urls import reverse
from rest_framework import status
from rest_framework.decorators import api_view
from django.http.response import HttpResponse
from rest_framework.generics import CreateAPIView

class titleShow(APIView):
    def get(self, request, *args, **kwargs):
      titleList = category.objects.all()
      data = {
        'title' : titleList,
      }
      # 2. serialize
      serializer = TitleSerializer(instance=data)
      # 3. response
      return Response(serializer.data)

@api_view(['GET'])
def get_lecture(request):
    posts = Lecture.objects.all()
    serailized_posts= LectureSerializer(posts, many=True)
    return Response(serailized_posts.data)


@api_view(['GET'])
def get_testlecture(request):
    posts = testLecture.objects.all()
    serailized_posts= testLectureSerializer(posts, many=True)
    return Response(serailized_posts.data)

@api_view(['GET'])
def get_reply(request):
    posts = Reply.objects.all()
    serailized_posts= ReplySerializer(posts, many=True)
    return Response(serailized_posts.data)
# 함수를 활용하여 post구현하는 방식
# @api_view(['POST'])
# def post_api(request):
#     if request.method == 'GET':
#         return HttpResponse(status=200)
#     if request.method == 'POST':
#         serializer = LectureSerializer(data = request.data, many=True)
#         if(serializer.is_valid()):
#             serializer.save()
#             return Response(serializer.data ,status=200)
#         return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)

class testpost_create(CreateAPIView):
    queryset = Lecture.objects.all()
    serializer_class = testpost
