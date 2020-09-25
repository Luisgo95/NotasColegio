from rest_framework import serializers

from api.models.m_cursos import Cursos

class CursosModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cursos
        fields = '__all__'
