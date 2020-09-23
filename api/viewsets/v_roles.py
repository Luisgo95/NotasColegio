from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework import status, filters, viewsets

from api.serializers import RolesModelSerializer
from api.models.m_roles import Roles
# from api.utils.permissions import permissionAdmin


class RolesViewSet(viewsets.ModelViewSet):
    queryset = Roles.objects.all()

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


    queryset = Roles.objects.all()
    serializer_class = RolesModelSerializer
    
    # def get_permissions(self):
    #     if self.action in ['create','update','list','delete','partial_update']:
    #         permissions = [permissionAdmin]
    #     return [p() for p in permissions]

    # @action(detail=True, methods=['post'])    