from django import views
from django.urls import path, include
from home import views

urlpatterns = [
    path('', views.home, name="home"),
    path('gdrive', views.g_drive, name="gdrive")
]