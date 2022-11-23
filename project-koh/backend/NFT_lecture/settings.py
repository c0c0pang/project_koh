"""
Django settings for NFT_lecture project.

Generated by 'django-admin startproject' using Django 4.1.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""
import os
from pathlib import Path
import pymysql


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-+eid@@5&6eufsa_taje)f%7oeq53fb_z8zo0f3u(1(2&o$0@-0"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "backend_api",
    "rest_framework",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "NFT_lecture.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "NFT_lecture.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# DATABASES = {
# 	'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'lecture',
#         'USER': 'admin',
#         'PASSWORD': 'chambich82250',
#         'PORT': '3306',
#         'HOST': 'nft-lecture.cuc7akurulpb.ap-northeast-1.rds.amazonaws.com',
#         'OPTIONS': {
#             'init_command' : "SET sql_mode='STRICT_TRANS_TABLES'"
#             },
#     }
# }

pymysql.install_as_MySQLdb()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'board',
        'USER': 'root',
        'PASSWORD': '4135',
        'HOST': 'localhost',
        'PORT': '3306'
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",},
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Asia/Seoul"

USE_I18N = True

USE_L18N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

# CORS_ORIGIN_ALLOW_ALL = True

# CORS_ALLOW_CREDENTIALS = True
# CSRF_COOKIE_NAME = 'XSRF-TOKEN'
# CSRF_HEADER_NAME = 'X-XSRF-TOKEN'
# CORS_ALLOW_HEADERS = (
#     'access-control-allow-credentials',
#     'access-control-allow-origin',
#     'access-control-request-method',
#     'access-control-request-headers',
#     'accept',
#     'accept-encoding',
#     'accept-language',
#     'authorization',
#     'connection',
#     'content-type',
#     'dnt',
#     'credentials',
#     'host',
#     'origin',
#     'user-agent',
#     'X-CSRFToken',
#     'csrftoken',
#     'x-requested-with',
# )
=======
>>>>>>> 05114840 (image and delete)
=======
>>>>>>> 039a4455 (fix: api post 요청 충돌 해결)
=======
>>>>>>> c7841dcf (image and delete)
MEDIA_URL = '/image/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'image')
=======
=======
>>>>>>> bc7eba51 (image and delete)


CORS_ORIGIN_ALLOW_ALL = True

CORS_ALLOW_CREDENTIALS = True
CSRF_COOKIE_NAME = 'XSRF-TOKEN'
CSRF_HEADER_NAME = 'X-XSRF-TOKEN'
CORS_ALLOW_HEADERS = (
    'access-control-allow-credentials',
    'access-control-allow-origin',
    'access-control-request-method',
    'access-control-request-headers',
    'accept',
    'accept-encoding',
    'accept-language',
    'authorization',
    'connection',
    'content-type',
    'dnt',
    'credentials',
    'host',
    'origin',
    'user-agent',
    'X-CSRFToken',
    'csrftoken',
    'x-requested-with',
)
<<<<<<< HEAD
>>>>>>> a228152d (fix: api post 요청 충돌 해결)
=======
=======
MEDIA_URL = '/image/'

<<<<<<< HEAD
MEDIA_ROOT = os.path.join(BASE_DIR, 'image')
>>>>>>> 05114840 (image and delete)
>>>>>>> bc7eba51 (image and delete)
=======
MEDIA_ROOT = os.path.join(BASE_DIR, 'image')
>>>>>>> 27c12e58 (fix: api post 요청 충돌 해결)
