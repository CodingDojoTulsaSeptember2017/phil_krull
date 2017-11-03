from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'main_app/index.html')


def register(request):
    # handle registering an user
    if request.method == 'POST':
        print('**************In view method****************')
        print(request.POST)
        # invoke my method from the model manager
        response_from_models = User.objects.validate_user(request.POST)

        print(response_from_models)

        if response_from_models['status']:
            # passed the validations and created a new user
            request.session['user_id'] = response_from_models['user'].id
            return redirect('success:index')
        else:
            # add flash messages to html
            for error in response_from_models['errors']:
                messages.error(request, error)
            return redirect('users:index')

    else:
        # not a post, redirect to index method
        return redirect('users:index')

def logout(request):
    if request.method == 'POST':
        request.session.clear()
    return redirect('users:index')

def login(request):
    response_from_models = User.objects.login_user(request.POST)

    print('************** in login view method ********************')
    print(response_from_models)

    if response_from_models['status']:
        # succussful login
        request.session['user_id'] = response_from_models['user'].id
        return redirect('success:index')
    else:
        messages.error(request, response_from_models['errors'])
        return redirect('users:index')