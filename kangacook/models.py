from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField()
    cuisine = models.CharField(max_length=50)

    def __str__(self):
        return self.title
    
class User(models.Model):
    email = models.EmailField(blank=False)
    password = models.CharField(blank=False, max_length=128)
    username = models.CharField(blank=False, max_length=30)

    def __str__(self):
        return self.username