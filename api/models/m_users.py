"""Users model"""
# django
from django.contrib.auth.models import AbstractUser
from django.db import models

# from api.models.m_categorias import Categorias
from api.models.m_roles import Roles

class User(AbstractUser):
    """User class
    Used the AbstractUser as it's base and Utilities
    extend the functionality.
    """

    username = models.CharField(max_length=15, null=True, blank=True,default = None)

    email = models.CharField(
        max_length=50,
        unique=True,
        error_messages={
            'unique': 'A user with that email already exists.'
        }
    )
                             
    # is_verify = models.BooleanField(
    #     default=False,
    #     help_text='Set to true when the user have verified its email address'
    # )

    activo = models.BooleanField(default=False)

   
    idRoles =  models.ForeignKey(Roles, on_delete=models.CASCADE, null=True, blank=True,default = None)

    # profile = models.CharField(null=True,blank=True)
    creado = models.DateTimeField(auto_now_add=True)

    modificado = models.DateTimeField(auto_now=True)

    creadoPor = models.IntegerField(null=True, blank=True) 

    modificadoPor = models.IntegerField(null=True, blank=True) 


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [ 'first_name', 'last_name', ]

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
