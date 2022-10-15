from rest_framework import serializers
from .models import Lecture, Reply

class LectureSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Lecture
        fields = ['id', 'title', 'lecturename', 'teacher', 'created_at']
    title = serializers.CharField(max_length=100)
    lecturename = serializers.CharField(max_length=100)
    teacher = serializers.CharField(max_length=100)
    created_at = serializers.DateTimeField(input_formats=["%Y-%m-%d"])

class ReplySerializer(serializers.ModelSerializer) :
    class Meta :
        model = Reply
        fields = ['lecture_id', 'reply_id', 'writer', 're_contents', 'created_at']
    writer = serializers.CharField(max_length=100)
    re_contents = serializers.CharField(max_length=100)
    created_at = serializers.DateTimeField(input_formats=["%Y-%m-%d"])


class testpost(serializers.ModelSerializer) :
    class Meta :
        model = Lecture
        fields = ('category', 'title', 'teacher','le_contents')
