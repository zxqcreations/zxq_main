from django.db import models

# Create your models here.


class TextCenter(models.Model):
    data_series_number = models.CharField(max_length=100)
    data_time = models.CharField(max_length=100)
    data_content = models.TextField()

    def __str__(self):
        return self.data_content

    def get_series(self):
        return self.data_series_number

    def get_time(self):
        return self.data_time
