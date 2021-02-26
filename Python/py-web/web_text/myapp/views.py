from django.shortcuts import render

# Create your views here.

def hell_view(request):
    return render(request,'index.html',{'data':"hello_day"})