from rest_framework import serializers
from .models import Recipe, User

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username']  # Exclude 'password' from read operations

    def create(self, validated_data):
        # Extract password from the request data
        password = self.context['request'].data.get('password')

        # Create a user instance with the provided data
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        
        # Set the password with proper hashing
        user.set_password(password)
        user.save()
        return user