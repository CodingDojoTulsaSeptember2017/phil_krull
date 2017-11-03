from __future__ import unicode_literals
from django.db import models

from datetime import date
import re, bcrypt
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


# Create your models here.

class UserManager(models.Manager):
    def validate_user(self, post_data):
        response_to_views = {}
        errors = []
        print('**************In model method****************')
        print(post_data)
        # add validations
        if not post_data['first_name']:
            errors.append('First name is required!')
        if not len(post_data['first_name']) > 2:
            errors.append('First name must be at least 2 chararcters long!')
        if not post_data['first_name'].isalpha():
            errors.append('First name can only be alpha characters')
        if not post_data['last_name']:
            errors.append('Last name is required!')
        if not len(post_data['last_name']) > 2:
            errors.append('Last name must be at least 2 chararcters long!')
        if not post_data['last_name'].isalpha():
            errors.append('Last name can only be alpha characters')
        if not post_data['email']:
            errors.append('Email is required!')
        if not EMAIL_REGEX.match(post_data['email']):
            errors.append('Enter a valid email')
        if len(post_data['password']) < 8:
            errors.append('Password must be at least 8 chars long!')
        if not post_data['password'] == post_data['confirm_password']:
            errors.append('Passwords must match!')
        if not post_data['dob'] < str(date.today()):
            errors.append('You can not be born in the future')
        
        # check for unique emails
        if self.filter(email = post_data['email']):
            errors.append('Email is already in use!')

        # check the errors [] for failed validations
        if errors:
            # failed validations
            response_to_views['status'] = False
            response_to_views['errors'] = errors
        else:
            # passed validations
            response_to_views['status'] = True
            # hash the password
            hashed_password = bcrypt.hashpw(post_data['password'].encode(), bcrypt.gensalt())
            # create the user
            user = self.create(first_name = post_data['first_name'], last_name = post_data['last_name'], email=post_data['email'], password = hashed_password, dob=post_data['dob'])
            response_to_views['user'] = user

        return response_to_views

    def login_user(self, post_data):
        print('************** in login_user model method ********************')
        response_to_views = {}
        user = self.filter(email = post_data['email'])
        print(user)
        
        if user:
            print(user[0].password)
            print(post_data['email'])
            #found a match, check password
            if bcrypt.checkpw(post_data['password'].encode(), user[0].password.encode()):
                response_to_views['status'] = True
                response_to_views['user'] = user[0]
            else:
                response_to_views['status'] = False
                response_to_views['errors'] = 'Invalid email/password combination'

        else:
            # invalid email
            response_to_views['status'] = False
            response_to_views['errors'] = 'Invalid email'

        return response_to_views


class User(models.Model):
    first_name = models.CharField(max_length = 45)
    last_name = models.CharField(max_length = 45)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    dob = models.DateField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()