from django.shortcuts import render

# Create your views here.
def index(request):
    print('second app index view')
    return render(request, 'second_app/index.html')