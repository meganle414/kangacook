from django.contrib import admin

# Register your models here.
from .models import Recipe, User

admin.site.register(Recipe)
admin.site.register(User)