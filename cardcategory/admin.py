from django.contrib import admin
from .models import CardCategory

class CardCategoryAdmin(admin.ModelAdmin):
	#list_display = ['name', 'usad1', 'usan1', 'usad2', 'usan2', 'ukd1', 'ukn1', 'ukd2', 'ukn2', 'eurd1', 'eurn1' , 'eurd2', 'eurn2', 'aud1', 'aun1', 'aud2', 'aun2', 'cadd1', 'cadn2', 'cadd2', 'cadn2']
	list_display = ['name']

admin.site.register(CardCategory, CardCategoryAdmin)
