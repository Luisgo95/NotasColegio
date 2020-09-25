from rest_framework import serializers

from api.models.m_cursosAsignacion import AsignacionCursosUsuario
from api.serializers import CursosModelSerializer
class CursosAsignacionSerializer(serializers.ModelSerializer):
    # idCurso = CursosModelSerializer(many=True)
    class Meta:
        model = AsignacionCursosUsuario
        fields = '__all__'
        depth = 1


class CursosAsignacionadosSerializer(serializers.ModelSerializer):
    # idCurso = CursosModelSerializer(many=True)
    class Meta:
        model = AsignacionCursosUsuario
        fields = (
           'id',
           'idCurso',
           'idUsuario',
        )
        depth = 2