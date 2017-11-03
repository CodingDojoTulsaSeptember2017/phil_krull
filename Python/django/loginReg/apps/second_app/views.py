from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if 'user_id' not in request.session:
        # a user did not login or register
        return redirect('users:index')
    return render(request, 'second_app/index.html')