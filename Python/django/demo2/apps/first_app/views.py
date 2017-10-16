from django.shortcuts import render

# Create your views here.
def index(request):
    print('got to the views.index')
    request.session['user_id'] = 1 # request.session is a dictonary
    return render(request, 'first_app/index.html')
