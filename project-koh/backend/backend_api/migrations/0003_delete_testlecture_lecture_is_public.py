# Generated by Django 4.1.3 on 2022-11-21 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0002_category'),
    ]

    operations = [
        migrations.DeleteModel(
            name='testLecture',
        ),
        migrations.AddField(
            model_name='lecture',
            name='is_public',
            field=models.BooleanField(default=True),
        ),
    ]