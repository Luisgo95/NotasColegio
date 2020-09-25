from rest_framework import serializers

from api.models.m_asignacionNotas import AsignacionNotas

class AsignacionNotasModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = AsignacionNotas
        fields = '__all__'
        
class LeerNotasModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = AsignacionNotas
        fields = '__all__'
        
        depth = 2