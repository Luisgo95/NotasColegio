from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework import status, filters, viewsets

from api.serializers import AsignacionNotasModelSerializer,LeerNotasModelSerializer
from api.models.m_asignacionNotas import AsignacionNotas
from api.models import Cursos
from django.db.models import Avg
# from api.utils.permissions import permissionAdmin
from rest_framework.response import Response

class AsignacionNotasViewSet(viewsets.ModelViewSet):
    # queryset = AsignacionNotas.objects.all()

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


    queryset = AsignacionNotas.objects.all()
    serializer_class = AsignacionNotasModelSerializer

    # def create(self, request, *args, **kwargs):
    #     data = request.data
    #     print("Hola desde notas",data)
    #     return Response("Creado", status=status.HTTP_201_CREATED)

    #     # else:
    #     #     None
    #         # headers = self.get_success_headers(serializer.data)
    #     # return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    # def perform_create(self, serializer):
    #     serializer.save()
    def get_serializer_class(self):
        """Define serializer for API"""
        if self.action == 'list' or self.action == 'retrieve':
            return LeerNotasModelSerializer
        else:
            return AsignacionNotasModelSerializer


    @action(methods=["get"], detail=False)
    def PromedioPorAlumno(self, request, *args, **kwargs):
        data = request.data
        usuario = request.user
        asignacionesCurso = usuario.asignacion_usuarios.all()
        formato = []
        for asignacion in asignacionesCurso:
            # notas= AsignacionNotas.objects.filter(pk=asignacion.id)
            cursos = Cursos.objects.all()
            promedio = AsignacionNotas.objects.filter(idAsignacion=asignacion.id).aggregate(Avg('nota'))
            # for nota in notas:
            for curso in cursos:
                if(asignacion.idCurso.id==curso.id):
                    formato.append({
                        "Curso: ":curso.nombre,
                        "Promedio: ":promedio 
                    }
                    )
        # proyectos = []
        # for asignacion in asignaciones:
        #     proyectos.append(
        #         asignacion.idProyecto
        #     )
            # print(asignacion.idAsignacion.idUsuario.nombre)
        # queryset = Tickets.objects.filter(idProyecto__in=proyectos)
        serializer = LeerNotasModelSerializer(asignacionesCurso, many=True)
        # print(serializer.data)
        return Response({"promedio":formato}, status=status.HTTP_200_OK)
        # return serializer