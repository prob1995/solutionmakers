from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'bootstrap_django.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'home.views.home'),
    url(r'^login/','member.views.home'),
    url(r'^newaccount/','member.views.newaccount'),
    url(r'^account/','member.views.account'),
    url(r'^fwissue/','home.views.fwissue'),
    url(r'^omissue/','home.views.omissue'),
    url(r'^bissue/','home.views.bissue'),
    url(r'^issues/','home.views.issues'),
    url(r'^solutions/','home.views.solutions'),
    url(r'^resetpw/','member.views.resetpw'),
    url(r'^en/issue','home.views.issue_e'),
    url(r'^en/bissue','home.views.bissue_e'),
    url(r'^en/fwissue','home.views.fwissue_e'),
    url(r'^en/omissue','home.views.omissue_e'),
    url(r'^en/solutions','home.views.solutions_e'),
    url(r'^en/index','home.views.index_e'),
    
)
