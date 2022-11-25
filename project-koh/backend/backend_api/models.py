from django.db import models

class category(models.Model):
    category = models.CharField(max_length=20, blank=False, null=False)
    def __str__(self):
        return self.category

class Lecture(models.Model):
    id = models.BigAutoField( primary_key=True )
    category = models.CharField(max_length=20, blank=False, null=False)
    title = models.CharField(max_length=20, blank=False, null=False)
    teacher = models.CharField(max_length=20, blank=False, null=False)
    content = models.TextField(blank=False, null=False)
    headcount = models.IntegerField(default=0)
    thumbnail = models.ImageField(upload_to="", blank=True, default='no_image.gif')
    is_public = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title

class User(models.Model):
    wallet_address = models.CharField(primary_key=True, max_length=35)
    userName = models.CharField(max_length=10, blank=False, null=False)
    email = models.CharField(max_length=40, blank=True, null=True)
    is_public = models.BooleanField(default=True)
    regdate = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.userName

class Reply(models.Model):
    lecture_id = models.ForeignKey("Lecture", related_name="Lecture", on_delete=models.CASCADE, db_column="lecture_id")
    reply_id = models.BigAutoField( primary_key=True )
    writer = models.CharField(max_length=20, blank=False, null=False)
    re_contents = models.TextField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
