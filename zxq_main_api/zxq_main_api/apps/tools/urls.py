from django.urls import path
from . import views

urlpatterns = [
    path('', views.TextIndex.as_view(), name='index'),
    path('<str:data_series_number>/', views.TextDetail.as_view(), name='detail')
]
