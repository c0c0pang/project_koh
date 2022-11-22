from rest_framework import serializers
from .models import Lecture, Reply

class TitleSerializer(serializers.Serializer):
    title =  serializers.ListField(child = serializers.CharField())

class LectureSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Lecture
        fields = '__all__'

class ReplySerializer(serializers.ModelSerializer) :
    class Meta :
        model = Reply
        fields = ['lecture_id', 'reply_id', 'writer', 're_contents', 'created_at']

class Lecturepost(serializers.ModelSerializer) :
    class Meta :
        model = Lecture
        fields = ('category', 'subhead','title', 'teacher','le_contents')
