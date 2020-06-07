from django.urls import path
from django.conf.urls import url, include
from . import views


app_name='appindex'
urlpatterns = [
    path('', views.index, name="index" ),	
]

