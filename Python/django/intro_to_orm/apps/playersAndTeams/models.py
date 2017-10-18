from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Player(models.Model):
    name = models.CharField(max_length = 255)
    team = models.ForeignKey(Team, related_name = "players")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)