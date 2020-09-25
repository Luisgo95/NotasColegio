from django.db import models
# from django.contrib.auth.models import User
# from api.models import User
from api.models.m_cursosAsignacion import  AsignacionCursosUsuario 

class AsignacionNotas(models.Model):
    # idAsignacion = models.DecimalField(max_length=4)
    idAsignacion = models.ForeignKey(AsignacionCursosUsuario,
     on_delete=models.CASCADE, blank=True,default = None, related_name="asignacion_nota")
    nota =  models.DecimalField(max_digits=5, decimal_places=2)
    