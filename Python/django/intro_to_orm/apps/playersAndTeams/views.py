from django.shortcuts import render, redirect
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
    team = Team.objects.get(id = request.POST['team'])

    Player.objects.create(name = request.POST['name'], team = team)
    return redirect('/')