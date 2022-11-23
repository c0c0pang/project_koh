from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'lecture',views.LectureViewSet)
router.register(r'user',views.UserViewSet)

app_name = 'backend_api'
urlpatterns = [
    path('get/category/', views.titleShow.as_view()), # 카테고리 목록
    path('',include(router.urls)),    
]
