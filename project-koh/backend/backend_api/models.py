from django.db import models

class Lecture(models.Model):
    id = models.BigAutoField( primary_key=True )
    category = models.CharField(max_length=20, blank=False, null=False)
    title = models.CharField(max_length=100, blank=False, null=False)
    teacher = models.CharField(max_length=20, blank=False, null=False)
    content = models.TextField(blank=True, null=False, default="")
    count = models.IntegerField(default=0)
    video_url = models.CharField(max_length=200, blank=True, null=False)
    image_url = models.CharField(max_length=200, blank=True, null=False)
    thumbnail = models.ImageField(upload_to="", blank=True, default='no_image.gif')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title

class Wallet(models.Model):
    token = models.IntegerField()

    class Meta:
        ordering = ['token']

class User(models.Model):
    wallet_address = models.CharField(primary_key=True, max_length=200)
    userName = models.CharField(max_length=30, blank=False, null=False)
    profile = models.ImageField(upload_to="", blank=True, default='default_image.jpeg')
    email = models.CharField(max_length=50, blank=True, null=False)
    regdate = models.DateTimeField(auto_now_add=True)
    tokens = models.ManyToManyField(Wallet)
    
    def __str__(self):
        return self.userName


