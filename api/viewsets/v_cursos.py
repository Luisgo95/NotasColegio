from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework import status, filters, viewsets

from api.serializers import CursosModelSerializer
from api.models.m_cursos import Cursos
# from api.utils.permissions import permissionAdmin


class CursosViewSet(viewsets.ModelViewSet):
    queryset = Cursos.objects.all()

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


    queryset = Cursos.objects.all()
    serializer_class = CursosModelSerializer