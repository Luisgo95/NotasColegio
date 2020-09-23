from django.db import models
# from django.contrib.auth.models import User
from api.models.m_users import  User 
from api.models.m_cursos import Cursos

class AsignacionCursosUsuario(models.Model):
    idUsuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True,default = None,related_name="asignacion_usuarios")
    idCurso = models.ForeignKey(Cursos, on_delete=models.CASCADE, null=True, blank=True,default = None,related_name="asignacion_cursos")