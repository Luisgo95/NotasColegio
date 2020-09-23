from rest_framework import serializers

from api.models.m_asignacionNotas import AsignacionNotas

class AsignacionNotasModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = AsignacionNotas
        fields = '__all__'