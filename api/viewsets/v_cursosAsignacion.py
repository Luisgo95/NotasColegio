from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework import status, filters, viewsets

from api.serializers import CursosAsignacionSerializer
from api.models.m_cursosAsignacion import AsignacionCursosUsuario
# from api.utils.permissions import permissionAdmin


class CursosAsignacionUsuarioViewSet(viewsets.ModelViewSet):
    # queryset = AsignacionCursosUsuario.objects.all()

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


    queryset = AsignacionCursosUsuario.objects.all()
    serializer_class = AsignacionCursosUsuario