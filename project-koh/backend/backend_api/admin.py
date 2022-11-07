from django.contrib import admin
from .models import Lecture, Reply,testLecture

admin.site.register(Lecture)
admin.site.register(testLecture)
admin.site.register(Reply)
