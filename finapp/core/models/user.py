from django.db import models

class UserModel(models.Model):
    # User information
    cpf = models.CharField(max_length=11, unique=True)
    email = models.CharField(max_length=128, unique=True)
    phone = models.CharField(max_length=11)
    name = models.CharField(max_length=128)
    birth_date = models.DateField()
    
    # Data information
    username = models.CharField(max_length=64)
    password = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'usr_user'