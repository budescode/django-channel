from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required(login_url='/usersaccounts/login/')
def userDashboard(request):
	return render (request, 'dashboard/dashboard.html')
