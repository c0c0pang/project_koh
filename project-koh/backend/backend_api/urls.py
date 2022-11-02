from django.urls import path

from . import views

app_name = 'backend_api'
urlpatterns = [
    path('lecture/', views.get_lecture),
    path('reply/', views.get_reply),
    path('post/', views.testpost_create.as_view())
]
