from django.urls import path

from . import views

app_name = 'backend_api'
urlpatterns = [
    path('lecture/', views.get_lecture),
    path('testlecture/', views.get_testlecture),
    path('reply/', views.get_reply),
    path('post/', views.testpost_create.as_view()),
    path('title/', views.titleShow.as_view()),
]
