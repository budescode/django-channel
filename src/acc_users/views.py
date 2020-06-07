from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse ,QueryDict, JsonResponse
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from datetime import *




def register_user(request):
	email = request.POST.get('email')
	theu = email.find('@')
	if theu == -1:
		return JsonResponse({'error':'Invalid Email'})
	else:
		username = email[:theu]
		password  = request.POST.get('password')
		user_check = User.objects.filter(username = username)
		email_check = User.objects.filter(email=email)
		if user_check.exists():
			return JsonResponse({'error':'email exists'})
		elif email_check.exists():
			return JsonResponse({'error':'email exists'})
		else:
			User.objects.create_user(username, email, password)
			user = authenticate(username=username, password=password)
			if user is not None:
			 	if user.is_active:
			 		login(request, user)
			 		return JsonResponse({'response':'done'})		 		
			 	else:
			 		return JsonResponse({'error':'Disabled account'})
			else:
				return JsonResponse({'error':'Invalid Login'})

def login_user(request):
	email = request.POST.get('email')
	print(email, 'yeahhh')
	theu = email.find('@')
	if theu == -1:
		return JsonResponse({'error':'Invalid Email'})
	else:
		username = email[:theu]
		password  = request.POST.get("password")
		print(username, password)
		user = authenticate(username=username, password=password)
		if user is not None:
			if user.is_active:
				login(request, user)
				return JsonResponse({'response':'done'})
			else:
				return JsonResponse({'error':'Disabled Account'})
		else:
			return JsonResponse({'error':'Invalid Details'})

def logout_page(request):
	logout(request)
	return render(request, "account/login.html")

def login_page(request):
	return render(request, "account/login.html")

def signup_page(request):
	return render(request, "account/signup.html")
