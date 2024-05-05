import os
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def libros(request):
  return HttpResponse(os.getcwd())
#  return render(request, 'index.html')