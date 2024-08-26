from django.test import TestCase
from kangacook.models import Recipe, User
from django.core.management import call_command

class RecipeTestCase(TestCase):
    def setUp(self):
        call_command('seed_recipes')
    
    def test(self):
        tofu = Recipe.objects.get(title='Mapo Tofu')
        self.assertEqual(tofu.title, 'Mapo Tofu')

class UserTestCase(TestCase):
    def setUp(self):
        call_command('seed_users')
    
    def test(self):
        user = User.objects.get(email='meganle414@gmail.com')
        self.assertEqual(user.email, 'meganle414@gmail.com')
        self.assertEqual(user.password, 'cp/1^)H4P0Y5Fe!f')
