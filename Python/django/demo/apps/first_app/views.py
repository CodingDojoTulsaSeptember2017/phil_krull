from django.shortcuts import render, HttpResponse

# Create your views here.
# this is the controller of a MVC, brains of our backend logic
def index(request):
    return HttpResponse("Working Django project")
