Deploy to Heroku:
    Create venv
        ($ virtualenv venv)
    activate venv
        ($ source venv/bin/activate)
    install django-toolbet
        ($ pip install django-toolbelt)
    create Procfile
        (create a Procfile file with "web: gunicorn hellodjango.wsgi --log-file -")
    create requirments.txt
        ($ pip freeze > requirements.txt)
    modify settings.py and wsgi.py
    add something to .gitignore
        (add
            venv
            *.pyc
            staticfiles)
    create static folder in bootstrap_django/ and add one any file (usually .dir)
    git it
    heroku it

    or visit
    https://devcenter.heroku.com/articles/getting-started-with-django
    
    if you want re heroku it, use code below to remove previous heroku git. 
    git remote rm heroku
    
For Cloud9 test:
    Go to djtest/settings.py and djtest/wsgi.py 
    mark #FOR HEROKU DEPLOY 

For Heroku deploy:
    Go to djtest/settings.py and djtest/wsgi.py 
    unmark #FOR HEROKU DEPLOY # herodj
