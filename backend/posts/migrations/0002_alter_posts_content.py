# Generated by Django 5.2.3 on 2025-07-13 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='content',
            field=models.TextField(max_length=500, verbose_name='about'),
        ),
    ]
