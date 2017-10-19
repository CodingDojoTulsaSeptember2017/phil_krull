from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class PlayerManager(models.Manager):
    def validate_player(self, post_data):
        print('+'*90)
        print(post_data)
        response_to_views = {}

        if len(post_data['name']):
            # add to the DB
            team = Team.objects.get(id = post_data['team'])
            self.create(name = post_data['name'], team = team)
            response_to_views['status'] = True
        else:
            # send error to client
            response_to_views['status'] = False
            response_to_views['error'] = "Name field must be present!"

        return response_to_views

class Player(models.Model):
    name = models.CharField(max_length = 255)
    team = models.ForeignKey(Team, related_name = "players")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = PlayerManager()