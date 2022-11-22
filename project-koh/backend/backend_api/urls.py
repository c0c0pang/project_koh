from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'lecture',views.LectureViewSet)
router.register(r'user',views.UserViewSet)

app_name = 'backend_api'
urlpatterns = [
    path('get/category/', views.titleShow.as_view()), # 카테고리 목록
<<<<<<< HEAD
    path('',include(router.urls)),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 이미지 접근 http://localhost:8000/image/leaf_detaction.jpeg
=======
    path('',include(router.urls)),
    path('test',views.test.as_view()),
    
    
    
    # path('reply/', views.get_reply),
    # path('post/', views.Lecture_create.as_view()),
]
>>>>>>> f189ab41 (refactor: api 주소 변경)
