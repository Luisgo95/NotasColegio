from rest_framework import serializers

from api.models.m_cursosAsignacion import AsignacionCursosUsuario

class CursosAsignacionSerializer(serializers.ModelSerializer):

    class Meta:
        model = AsignacionCursosUsuario
        fields = '__all__'