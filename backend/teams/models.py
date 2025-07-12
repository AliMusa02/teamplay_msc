from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _


User = get_user_model()

# Create your models here.


class Teams(models.Model):
    team_name = models.CharField(_("team name"), max_length=50)
    team_logo = models.ImageField(
        null=True, blank=True, upload_to="images/", default='images/fallback.png')
    about = models.TextField(_('about'), max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    captain = models.OneToOneField(
        User, on_delete=models.SET_NULL, related_name="team", null=True, blank=True)
