from django.contrib.auth import views
from . import views
from django.urls import path


app_name = "accountusers"
urlpatterns = [
	path('registeruser/', views.register_user, name='register_user'),
	path('login_user/', views.login_user, name='login_user'),
	path('logout/', views.logout_page, name='logout'),
	path('login/', views.login_page, name='login'),
	path('signup/', views.signup_page, name='signup'),
	path('loginapi/', views.login_user, name='loginapi'),
]