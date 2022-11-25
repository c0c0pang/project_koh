from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'api/test',views.LectureViewSet)
router.register(r'user',views.UserViewSet)

app_name = 'backend_api'
urlpatterns = [
    path('get/category/', views.titleShow.as_view()), # 카테고리 목록
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    path('',include(router.urls)),    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 이미지 접근 http://localhost:8000/image/leaf_detaction.jpeg
=======
    path('',include(router.urls)),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 이미지 접근 http://localhost:8000/image/leaf_detaction.jpeg
>>>>>>> 05114840 (image and delete)
=======
=======
<<<<<<< HEAD
>>>>>>> c7841dcf (image and delete)
=======
<<<<<<< HEAD
=======
>>>>>>> 6dda080b (refactor: api 주소 변경)
>>>>>>> 7df054e5 (refactor: api 주소 변경)
=======
=======
>>>>>>> b0f15e98 (병합 완료)
<<<<<<< HEAD
=======
>>>>>>> 6dda080b (refactor: api 주소 변경)
=======
>>>>>>> 159a0272 (fix: 병합 테스트)
<<<<<<< HEAD
>>>>>>> 24706d93 (fix: 병합 테스트)
    path('',include(router.urls)),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 이미지 접근 http://localhost:8000/image/leaf_detaction.jpeg
=======
>>>>>>> b0f15e98 (병합 완료)
=======

>>>>>>> df3ecae3 (병합 완료)
    path('',include(router.urls)),  
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT), # 이미지 접근 http://localhost:8000/image/leaf_detaction.jpeg

    path('',include(router.urls)),
    path('test',views.test.as_view()),
    
    
    
    # path('reply/', views.get_reply),
    # path('post/', views.Lecture_create.as_view()),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 159a0272 (fix: 병합 테스트)
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    path('',include(router.urls)),    
>>>>>>> 741655a7 (fix: 병합 테스트)
>>>>>>> 7df054e5 (refactor: api 주소 변경)
=======
=======
>>>>>>> df3ecae3 (병합 완료)
    path('',include(router.urls)),    
>>>>>>> b0f15e98 (병합 완료)
]
<<<<<<< HEAD
>>>>>>> f189ab41 (refactor: api 주소 변경)
<<<<<<< HEAD
>>>>>>> a46d4209 (refactor: api 주소 변경)
=======
=======
    path('',include(router.urls)),  
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 이미지 접근 http://localhost:8000/image/leaf_detaction.jpeg
>>>>>>> bc7eba51 (image and delete)
<<<<<<< HEAD
>>>>>>> c7841dcf (image and delete)
=======
=======
]
>>>>>>> f189ab41 (refactor: api 주소 변경)
>>>>>>> 6dda080b (refactor: api 주소 변경)
<<<<<<< HEAD
>>>>>>> 7df054e5 (refactor: api 주소 변경)
=======
=======
>>>>>>> df3ecae3 (병합 완료)
>>>>>>> b0f15e98 (병합 완료)
