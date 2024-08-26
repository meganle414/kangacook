from django.core.management.base import BaseCommand
from kangacook.models import Recipe

class Command(BaseCommand):
    help = 'Seed the database with initial recipes'

    def handle(self, *args, **kwargs):
        Recipe.objects.create(title='Chinese stir-fry tomato and eggs with beef', description='Soft silky eggs stir fried in a sweet tangy tomato sauce with beef and green onions.', image='https://smellylunchbox.com/wp-content/uploads/2024/07/chinesetomatoeggsbeef-360x540.jpg', cuisine='Cantonese')
        Recipe.objects.create(title='Char Siu', description='Barbecued pork, usually eaten with rice, used as an ingredient for noodle dishes, in stir fries, and cha siu bao.', image='https://omnivorescookbook.com/wp-content/uploads/2022/09/220908_Air-Fryer-Char-Siu-Pork_550.jpg', cuisine='Cantonese')
        Recipe.objects.create(title='Mapo Tofu', description='Silken tofu awash in a fiery málà sauce, heightened by adding salty sweet black beans and ground beef.', image='https://www.cookwithmanali.com/wp-content/uploads/2021/03/Vegan-Mapo-Tofu.jpg', cuisine='Szechuan')
        Recipe.objects.create(title='Dry-fried string beans', description='Silken tofu awash in a fiery málà sauce, heightened by the addition of salty sweet black beans and ground beef.', image='https://www.seriouseats.com/thmb/lx43mp5YJckFJSxNoAr61QtL-9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__08__20140822-sichuan-string-beans-robyn-lee-c5a6c509e3bc4cecbce65c53f2bb5bd5.jpg', cuisine='Szechuan')
        Recipe.objects.create(title='Xiao Long Bao (Soup Dumplings)', description='A small steamed bun traditionally prepared in a xiaolong, a small bamboo steaming basket.', image='https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTMOcudCbCRLAxbbuHCwDSI_Wh4as53ZDtAPdvu70pA6CnoOHoJY-U6KPm_xgSmL_gt', cuisine='Taiwanese')
        Recipe.objects.create(title='Taiwanese Fried Chicken', description='Marinated and fried pieces of chicken, also known as popcorn chicken.', image='https://lh3.googleusercontent.com/nfrfaldUeh8ay8e2M4rPVEIXFbA9m-ZwRpMCiSnpPhXiVysm-P-zRbo2H3fDScs_6UVAPljT4izZPVLT_Jp6R8rZ2AlH22Ru9k1g3Gm9Sk04bmgOssXO4eK2Nh8198tVOZq0M9bk', cuisine='Taiwanese')
        Recipe.objects.create(title='Gimbap', description='Cooked rice, vegetables, fish, and meat rolled in dried seaweed sheets and served in bite-sized slices.', image='https://chefatulya.com/wp-content/uploads/2021/01/thumbnail-120-1-1024x1024.jpg', cuisine='Korean')
        Recipe.objects.create(title='Japchae', description='A savory and slightly sweet dish of stir-fried glass noodles and vegetables.', image='https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-01-Japchae%2F11-JAPCHAE-018', cuisine='Korean')
        Recipe.objects.create(title='Unagi Don (Eel Rice Bowl)', description='A donburi type large bowl filled with steamed white rice, and topped with fillets of caramelized grilled eel.', image='https://www.japanesecooking101.com/wp-content/uploads/2013/05/IMG_9990.jpg', cuisine='Japanese')
        Recipe.objects.create(title='Sushi', description='Prepared vinegared rice, salt, and a variety of ingredients, such as vegetables, and usually seafood.', image='https://www.craftycookbook.com/wp-content/uploads/2024/04/nigiri-sushi-1200.jpg', cuisine='Japanese')
        Recipe.objects.create(title='Phở Bò', description='A soup dish consisting of broth, rice noodles, herbs, and meat, sometimes chicken.', image='https://www.recipetineats.com/tachyon/2019/04/Beef-Pho_6.jpg', cuisine='Vietnamese')
        Recipe.objects.create(title='Bánh Mì' , description='A short baguette with thin, crisp crust and a soft, airy texture. It is filled with meat and savory ingredients.', image='https://www.allrecipes.com/thmb/HTJHVC_LYKmXaMF54dhe2gZQkNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332-cfb4d2e149e7476ab2a2b4030c543f1b.jpg', cuisine='Vietnamese')
        Recipe.objects.create(title='Chicken Adobo' , description='Chicken marinated in soy sauce and spices, then cooked till tender in a slow cooker.', image='https://www.jocooks.com/wp-content/uploads/2021/04/chicken-adobo-1-13.jpg' , cuisine='Filipino')
        Recipe.objects.create(title='Lumpia' , description='Various types of spring rolls made of thin paper-like pastry skin enveloping savory or sweet fillings.', image='https://bellyfull.net/wp-content/uploads/2024/01/Lumpia-blog-2.jpg', cuisine='Filipino')
        
        self.stdout.write(self.style.SUCCESS('Successfully seeded the database with recipes'))
