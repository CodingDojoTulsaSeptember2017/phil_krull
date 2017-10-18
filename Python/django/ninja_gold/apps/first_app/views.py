from django.shortcuts import render, redirect
from random import randint
from datetime import datetime

# Create your views here.
def index(request):
    if 'total_gold' not in request.session:
        request.session['total_gold'] = 0
        request.session['activity_log'] = []

    return render(request, 'first_app/index.html')


def process_money(request):
    
    building = request.POST['building']

    buildings = {
        'farm': randint(10,20),
        'cave': randint(5,10),
        'house': randint(2,5),
        'casino': randint(-50, 50)
    }

    gold = buildings[building]

    result = {}

    request.session['total_gold'] += gold

    curr_time = datetime.now().strftime('%Y/%m/%d %I:%M %p')

    if gold < 0:
        # lost from the casino
        result['sentence'] = "Entered a {} and lost {} golds....Ouch! ({})".format(building, abs(gold), curr_time)
        result['class'] = 'red'
    else:
        # gained gold from a building
        result['sentence'] = "Earned {} from the {}! {}".format(gold, building, curr_time)
        result['class'] = 'green'

    request.session['activity_log'].append(result)

    # 
    # try:
    #     request.session['total_gold'] += gold
    # except KeyError:
    #     request.session['total_gold'] = gold

    return redirect('/')