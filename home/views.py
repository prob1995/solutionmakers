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
    
def about(request):
    return render(request,"about.html")    
    
def issue_e(request):
    return render(request,"en/issues_e.html")
    
def bissue_e(request):
    return render(request,"en/issue_e/bissue_e.html")

def fwissue_e(request):
    return render(request,"en/issue_e/fwissue_e.html")
    
def omissue_e(request):
    return render(request,"en/issue_e/omissue_e.html")
    
def index_e(request):
    return render(request,"en/index_e.html")
    
def solutions_e(request):
    return render(request,"en/solutions_e.html")
    
def about_e(request):
    return render(request,"en/about_e.html")