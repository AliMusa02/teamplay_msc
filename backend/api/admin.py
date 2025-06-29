from django.contrib import admin
from .models import NewUser
from django.contrib.auth.admin import UserAdmin

# Register your models here.


class UserAdminConfig(UserAdmin):
    # model = NewUser  we can change the style in admin page
    search_fields = ('email', 'user_name', 'first_name',)
    list_filter = ('email', 'user_name', 'first_name', 'is_active')
    ordering = ("-start_date",)
    list_display = ('email', 'user_name', 'first_name',
                    'is_active', 'is_staff')

    fieldsets = (
        ('Essentials', {
            "fields": ('email', 'user_name', 'first_name', 'password'),
        }),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {
         'fields': ('about', 'is_captian', 'is_player', 'start_date')})
    )

    add_fieldsets = (
        (None, {'classes': ('wide',), 'fields': (
            'email', 'user_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff')}),
    )

    # formfield_overrides = {
    #     NewUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})}
    # }  the design I assinged for admin page


admin.site.register(NewUser, UserAdminConfig)
