from rest_framework import viewsets
from .models import Product 
from .serializers import ProductSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User 

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all() 
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all() 
    serializer_class = ProductSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        queryset = Product.objects.all()
        user = self.request.user
        if user is not None:
            queryset=queryset.filter(user=user)
        return queryset

   


