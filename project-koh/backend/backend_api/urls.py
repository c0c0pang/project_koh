from django.urls import path

from . import views

app_name = 'backend_api'
urlpatterns = [
    path('get/', views.get_api),
    path('post/', views.testpost_create.as_view())
]
