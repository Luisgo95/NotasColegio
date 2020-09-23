from django.db import models
# from django.contrib.auth.models import User
# from api.models import User
from api.models.m_cursosAsignacion import  AsignacionCursosUsuario 

class AsignacionNotas(models.Model):
    # idAsignacion = models.DecimalField(max_length=4)
    idAsignacion = models.ForeignKey(AsignacionCursosUsuario, on_delete=models.CASCADE, null=True, blank=True,default = None)
    nota =  models.DecimalField(max_digits=3, decimal_places=2)
    