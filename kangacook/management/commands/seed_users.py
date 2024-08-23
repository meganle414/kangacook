from django.core.management.base import BaseCommand
from kangacook.models import User

class Command(BaseCommand):
    help = 'Seed the database with initial users'

    def handle(self, *args, **kwargs):
        User.objects.create(email='meganle414@gmail.com+kangacookuser1', password='Kang@c00kUser1', username='KangacookUser1')
        User.objects.create(email='meganle414@gmail.com+kangacookuser2', password='Kang@c00kUser2', username='KangacookUser2')
        User.objects.create(email='meganle414@gmail.com+kangacookuser3', password='Kang@c00kUser3', username='KangacookUser3')
        
        self.stdout.write(self.style.SUCCESS('Successfully seeded the database with users'))
