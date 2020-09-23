from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework import status, filters, viewsets

from api.serializers import AsignacionNotasModelSerializer
from api.models.m_asignacionNotas import AsignacionNotas
# from api.utils.permissions import permissionAdmin


class AsignacionNotasViewSet(viewsets.ModelViewSet):
    queryset = AsignacionNotas.objects.all()

    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filter_fields = ("nombre",)
    search_fields = ("nombre",)
    ordering_fields = ("nombre",)

    # def get_serializer_class(self):
    #      """Define serializer for API"""
    #      if self.action == 'list' or self.action == 'retrieve':
    #          return CategoriaSerializer
    #      else:
    #          return CategoriaRegistroSerializer


    queryset = AsignacionNotas.objects.all()
    serializer_class = AsignacionNotasModelSerializer