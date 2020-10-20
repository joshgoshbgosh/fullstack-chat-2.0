from django.db import models
from django.conf import settings

class Messaage(models.Model):
    content = models.CharField(max_length=225)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.user.username
