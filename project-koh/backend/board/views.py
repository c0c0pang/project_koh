from django.shortcuts import render
from .models import Board

# Create your views here.
def test(request):
    return render(request, 'index.html')
