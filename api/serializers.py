from rest_framework import serializers
from .models import Product 
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User 
from crum import get_current_user

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields = ('id', 'name', 'description',)

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data.update(user=user)
        return super().create(validated_data)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User 
        fields = ('id', 'username', 'password') 
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
