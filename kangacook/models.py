from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.URLField()
    cuisine = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.email