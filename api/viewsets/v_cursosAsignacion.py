from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework import status, filters, viewsets

from api.serializers import CursosAsignacionSerializer,CursosAsignacionadosSerializer
from api.models.m_cursosAsignacion import AsignacionCursosUsuario 
# from api.utils.permissions import permissionAdmin
from rest_framework.response import Response

class CursosAsignacionUsuarioViewSet(viewsets.ModelViewSet):
    # queryset = AsignacionCursosUsuario.objects.all()

    # filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    # filter_fields = ("nombre",)
    # search_fields = ("nombre",)
    # ordering_fields = ("nombre",)

    # def get_serializer_class(self):
    #      """Define serializer for API"""
    #      if self.action == 'list' or self.action == 'retrieve':
    #          return CategoriaSerializer
    #      else:
    #          return CategoriaRegistroSerializer


    queryset = AsignacionCursosUsuario.objects.all()
    serializer_class = CursosAsignacionSerializer

    @action(methods=["get"], detail=False)
    def listarCursosAlumno(self, request, *args, **kwargs):
        print("request", request)
        data = request.query_params
        print("entro", data.get("id"))
        print("DAta entrante", data)
        queryset = AsignacionCursosUsuario.objects.filter(idUsuario=data.get("id"))
        print("estos son datos", queryset)
        # if(data.get('idTicket__id')):
        #     queryset = queryset.filter(idTicket__id=data.get('idTicket__id'))

        serializer = CursosAsignacionadosSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    @action(methods=["get"], detail=False)
    def listarAlumnosCurso(self, request, *args, **kwargs):
        data = request.query_params
        print("entro", data.get("id"))
        queryset = AsignacionCursosUsuario.objects.filter(idCurso=data.get("id"))
        print("estos son datos", queryset)
        # if(data.get('idTicket__id')):
        #     queryset = queryset.filter(idTicket__id=data.get('idTicket__id'))
        serializer = CursosAsignacionadosSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)