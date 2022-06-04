from django.shortcuts import render, HttpResponse

def home(request):
    return render(request, "index.html")

def secondpage(request):
    return render(request, "mobilehome.html")

def g_drive(request):
    return render(request, "drive.html")

