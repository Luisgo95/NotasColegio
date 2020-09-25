from rest_framework import serializers

from api.models.m_roles import Roles

class RolesModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Roles
        fields = '__all__'
