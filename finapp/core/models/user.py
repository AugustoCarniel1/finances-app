from django.db import models

class UserModel(models.Model):
    # User information
    cpf = models.IntegerField(max_length=11)
    phone = models.IntegerField(max_length=11)
    name = models.CharField(max_length=128)
    birth_date = models.DateField()
    
    # Data information
    username = models.CharField(max_length=64)
    password = models.CharField(max_length=256)
    password_salt = models.CharField(max_length=16)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'usr_user'