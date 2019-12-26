from django.db import models
from django.contrib.auth.models import User
class Product(models.Model):
    name = models.CharField(max_length=85)
    description = models.TextField(max_length=360)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
 
