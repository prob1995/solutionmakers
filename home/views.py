from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,"index.html")
    
def fwissue(request):
    return render(request,"issue/foodwaste/fwissue.html")
    
def omissue(request):
    return render(request,"issue/oldman/omissue.html")

def bissue(request):
    return render(request,"issue/breath/bissue.html")
    
def issues(request):
    return render(request,"issue/issues.html")
    
def solutions(request):
    return render(request,"solution/solutions.html")
    
def issue_e(request):
    return render(request,"en/issues_e.html")