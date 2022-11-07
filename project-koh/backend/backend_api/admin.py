from django.contrib import admin
from .models import Lecture, Reply,testLecture,category

admin.site.register(Lecture)
admin.site.register(testLecture)
admin.site.register(Reply)
admin.site.register(category)
