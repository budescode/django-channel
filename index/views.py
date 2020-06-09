from django.shortcuts import render
from cardcategory.models import CardCategory

def index(request):
	qs = CardCategory.objects.all()
	context = {"qs":qs}
	#https://api.coindesk.com/v1/bpi/currentprice.json
	return render(request, 'index/index.html', context)