from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,"login.html")
    
def newaccount(request):
    return render(request,"newaccount.html")
    
def account(request):
    return render(request,"account.html")
    
    
def resetpw(request):
    return render(request,"resetpw.html")
    