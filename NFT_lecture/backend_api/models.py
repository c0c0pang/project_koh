from django.db import models

class Lecture(models.Model):
    title = models.CharField(max_length=100)
    lecturename = models.CharField(max_length=100)
    teacher = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
