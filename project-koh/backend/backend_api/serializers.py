from rest_framework import serializers
from .models import Lecture, User


class LectureSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Lecture
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer) :
    class Meta :
        model = User
        fields = '__all__'
