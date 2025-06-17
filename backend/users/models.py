from django.db import models
from django.utils import timezone

# Create your models here.

class Waitlist(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.email

    class Meta:
        ordering = ['-created_at']
