from django.urls import path, include
from .views import libros

urlpatterns = [
    path('libros', libros, name="libros"),
    
]