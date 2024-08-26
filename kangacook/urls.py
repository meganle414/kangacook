from django.urls import path
from .views import RecipeList, RecipeDetail, UserCreateView, UserListView, UserDetailView

urlpatterns = [
    path('recipes/', RecipeList.as_view(), name='recipe-list'), # List all recipes
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'), # Retrieves a recipe by id
    path('users/', UserListView.as_view(), name='user-list'),  # List all users
    path('users/<str:email>/', UserDetailView.as_view(), name='user-detail'),  # Retrieve a user by email
    path('users/sign-up/', UserCreateView.as_view(), name='user-create'),  # Create a new user
]
