from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url
from api.viewsets import *


router = DefaultRouter()
router.register(r'user', UserViewset, basename='user')
router.register(r'notas', AsignacionNotasViewSet, basename='notas')
router.register(r'cursos', CursosViewSet, basename='cursos')
router.register(r'roles', RolesViewSet,basename='roles')
router.register(r'cursosAsignados', CursosAsignacionUsuarioViewSet,basename='cursosAsignados')

urlpatterns = [
    path('api/', include(router.urls)),
    url(r"^api/token", obtain_auth_token, name="api-token"),
    path('api-auth/', include('rest_framework.urls')),
]
