from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'lecture',views.LectureViewSet)

app_name = 'backend_api'
urlpatterns = [
    path('get/category/', views.titleShow.as_view()), # 카테고리 목록
    path('',include(router.urls)),
    path('post/lecture/',views.Lecture_create.as_view()),
    
    
    
    # path('reply/', views.get_reply),
    # path('post/', views.testpost_create.as_view()),
]
