## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `python manage.py runserver`

Runs the Django server\
Open [http://127.0.0.1:8000/api/recipes/](http://127.0.0.1:8000/api/recipes/) or [http://127.0.0.1:8000/api/users/](http://127.0.0.1:8000/api/users/) to view it in your browser.

### `python manage.py seed_recipes`

Seeds the data with pre-created recipes
```
[
    {
        "id": 1,
        "title": "Chinese stir-fry tomato and eggs with beef",
        "description": "Soft silky eggs stir fried in a sweet tangy tomato sauce with beef and green onions.",
        "image": "https://smellylunchbox.com/wp-content/uploads/2024/07/chinesetomatoeggsbeef-360x540.jpg",
        "cuisine": "Cantonese"
    },
    {
        "id": 2,
        "title": "Char Siu",
        "description": "Barbecued pork, usually eaten with rice, used as an ingredient for noodle dishes, in stir fries, and cha siu bao.",
        "image": "https://omnivorescookbook.com/wp-content/uploads/2022/09/220908_Air-Fryer-Char-Siu-Pork_550.jpg",
        "cuisine": "Cantonese"
    },
    {
        "id": 3,
        "title": "Mapo Tofu",
        "description": "Silken tofu awash in a fiery málà sauce, heightened by the addition of salty sweet black beans and ground beef.",
        "image": "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Vegan-Mapo-Tofu.jpg",
        "cuisine": "Szechuan"
    },
    ...
]
```

### `python manage.py seed_users`

Seeds the data with pre-created users
```
[
    {
        "email": "meganle414@gmail.com+kangacookuser1",
        "username": "KangacookUser1"
    },
    {
        "email": "meganle414@gmail.com+kangacookuser2",
        "username": "KangacookUser2"
    },
    {
        "email": "meganle414@gmail.com+kangacookuser3",
        "username": "KangacookUser3"
    }
]
```
### Homepage
![Homepage](https://github.com/meganle414/kangacook/blob/main/images/index.png?raw=true)
### Footer
![Footer](https://github.com/meganle414/kangacook/blob/main/images/index_footer.png?raw=true)
### Recipe Carousel
![Recipe Carousel](https://github.com/meganle414/kangacook/blob/main/images/recipe_carousel.png?raw=true)
### Recipe List
![Recipe List](https://github.com/meganle414/kangacook/blob/main/images/recipe_list.png?raw=true)
### Contact Page
![Contact Page](https://github.com/meganle414/kangacook/blob/main/images/contact.png?raw=true)
### Login Page
![Login Page](https://github.com/meganle414/kangacook/blob/main/images/login.png?raw=true)
### Invalid Email or Password Login Error
![Invalid Email or Password Login Error](https://github.com/meganle414/kangacook/blob/main/images/invalid_email_password_login_error.png?raw=true)
### Sign Up Page
![Sign Up Page](https://github.com/meganle414/kangacook/blob/main/images/sign_up.png?raw=true)
### Existing User Sign Up Error
![Existing User Sign Up Error](https://github.com/meganle414/kangacook/blob/main/images/existing_user_sign_up_error.png?raw=true)
### Mismatching Password Sign Up Error
![Mismatching Password Sign Up Error](https://github.com/meganle414/kangacook/blob/main/images/mismatching_password_sign_up_error.png?raw=true)

# kangacook
Develop a simple website:
* Frontend: Use React.js to build a simple web page (whatever you like to present). Just like to see if you know how to use components with React.
* Backend: Use Django to build at least two API endpoints for the frontend page you created to use.