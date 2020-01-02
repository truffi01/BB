from django.db import models
from django.conf import settings
from django.db.models.signals import pre_save
from django.contrib.auth.models import User
from crum import get_current_user

class Product(models.Model):
    name = models.CharField(max_length=85)
    description = models.TextField(max_length=360)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True, default=None)

    
 
