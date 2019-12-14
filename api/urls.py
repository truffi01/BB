from rest_framework import routers 
from django.contrib import admin
from django.urls import path
from django.conf.urls import include 
from .views import ProductViewSet

router = routers.DefaultRouter()
router.register('product', ProductViewSet)

urlpatterns = [
    path('', include(router.urls)),
]