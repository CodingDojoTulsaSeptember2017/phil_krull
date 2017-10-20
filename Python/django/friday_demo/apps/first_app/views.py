from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    print('in first app index')
    return render(request, 'first_app/index.html')

def create(request):
    return redirect('users:index')