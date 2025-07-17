from django.urls import path
from . import views

urlpatterns = [
    path("invitations/get-post/", views.CreateAndGetInvitations.as_view(),
         name="get-create-invitations")

]
