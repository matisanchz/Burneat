from django.db import models

# Create your models here.

class Food(models.Model):
    name = models.CharField(max_length=30)
    calories = models.IntegerField()
    total_fat = models.IntegerField()
    saturated_fat = models.IntegerField()
    trans_fat = models.IntegerField()
    cholesterol = models.IntegerField()
    sodium = models.IntegerField()
    total_carbohydrate = models.IntegerField()
    dietary_fiber = models.IntegerField()
    sugars = models.IntegerField()
    protein = models.IntegerField()
    vitamin_A = models.IntegerField()
    vitamin_C = models.IntegerField()
    vitamin_D = models.IntegerField()
    calcium = models.IntegerField()
    iron = models.IntegerField()
    potassium = models.IntegerField()


class Train(models.Model):
    class Month(models.TextChoices):
        AER = "Aerobic Training"
        FUN = "Funtional training"
        WEI = "Weight training"

    type_of_training = models.CharField(
                                        choices=Month.choices,
                                        default=Month.AER,
                                        max_length=50,
                                    )
    calories_burned = models.IntegerField()
    time_spended = models.IntegerField()
