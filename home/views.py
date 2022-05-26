from django.shortcuts import render, HttpResponse

def home(request):
    return render(request, "index.html")

def g_drive(request):
    return render(request, "drive.html")
