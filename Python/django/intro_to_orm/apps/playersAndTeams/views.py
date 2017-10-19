from django.shortcuts import render, redirect
from django.contrib import messages

from .models import Team, Player

# Create your views here.
def index(request):
    # get info for the index page
    all_teams = Team.objects.all()
    context = {
        'teams': all_teams,
        'players': Player.objects.all()
    }

    return render(request, 'playersAndTeams/index.html', context)

def add_player(request):
    print(request.POST)
    # add the player
    # first get the team object
    
    
    # move this line to the model
    response_from_models = Player.objects.validate_player(request.POST)
    print('-'*90)
    print(response_from_models)

    if not response_from_models['status']:
        # send error message to client
        messages.error(request, response_from_models['error'])

    

    return redirect('/')