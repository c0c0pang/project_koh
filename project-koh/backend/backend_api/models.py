from csv import writer
from django.db import models

class testLecture(models.Model):
    id = models.BigAutoField( primary_key=True )
    title = models.CharField(max_length=20, blank=False, null=False)
    Lecturename = models.CharField(max_length=20, blank=False, null=False)
    teacher = models.CharField(max_length=20, blank=False, null=False)
    def __str__(self):
        return self.title

class Lecture(models.Model):
    id = models.BigAutoField( primary_key=True )
    category = models.CharField(max_length=20, blank=False, null=False)
    subhead = models.CharField(max_length=30, blank=True, null=True)
    title = models.CharField(max_length=20, blank=False, null=False)
    teacher = models.CharField(max_length=20, blank=False, null=False)
    le_contents = models.TextField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class User(models.Model):
    wallet_address = models.CharField(primary_key=True, max_length=35)
    userName = models.CharField(max_length=10, blank=False, null=False)
    email = models.CharField(max_length=40, blank=True, null=True)
    regdate = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.UserName

class Reply(models.Model):
    lecture_id = models.ForeignKey("Lecture", related_name="Lecture", on_delete=models.CASCADE, db_column="lecture_id")
    reply_id = models.BigAutoField( primary_key=True )
    writer = models.CharField(max_length=20, blank=False, null=False)
    re_contents = models.TextField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
