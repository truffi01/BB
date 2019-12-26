from rest_framework import routers 
from django.contrib import admin
from django.urls import path
from django.conf.urls import include 
from .views import ProductViewSet, UserViewSet, SessionViewSet

router = routers.DefaultRouter()
router.register('user', UserViewSet)
router.register('product', ProductViewSet)
router.register('productlist', SessionViewSet)


urlpatterns = [
    path('', include(router.urls)),
]