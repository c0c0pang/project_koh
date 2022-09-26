from django.shortcuts import render
from rest_framework.response import Response
from .models import Lecture
from rest_framework.views import APIView
from .serializers import LectureSerializer
from django.urls import reverse


class LectureListAPI(APIView):
    def get(self, request):
        queryset = Lecture.objects.all()
        print(queryset)
        serializer = LectureSerializer(queryset, many=True)
        return Response(serializer.data)
