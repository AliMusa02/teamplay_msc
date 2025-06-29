from django.db import models
# from django.contrib.auth.models import UserManager
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomAccountManager(BaseUserManager):

    def create_user(self, email, user_name, first_name, password, **other_fields):
        if not email:
            raise ValueError(_("you must provide an email"))
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, user_name, first_name, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(" Superuser must be assigned to is_staff= true")

        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                " Superuser must be assigned to is_superuser= true")

        return self.create_user(email, user_name, first_name, password, **other_fields)


class NewUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email_address'), unique=True)
    user_name = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_('about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_captian = models.BooleanField(default=False)
    is_player = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', "first_name"]

    def __str__(self):
        return self.user_name


# Create your models here.


# class CustomUserManager(UserManager):
#     def create_user(self, email, password, **extra_fields):
#         if not email:
#             raise ValueError("You have not provided an email")

#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)()
#         user.save(using=self._db)

#         return user

# def create_user(self, email=None, password=None, **extra_fields):
#     extra_fields.setdefault('is_staff', False)
#     extra_fields.setdefault('is_superuser', False)
#     return self._create_user(email, password, **extra_fields)

# def create_superuser(self, username, email, password, **extra_fields):
#     return super().create_superuser(username, email, password, **extra_fields)
