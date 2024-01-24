from django.urls import path
from . import views

urlpatterns = [
   path('get-products/', views.get_products, name='get-products'),
   path('get-product/<id>', views.get_product, name='get-product'),
   path('create-product/', views.create_product, name='create-product'),
   path('update-product/<id>', views.update_product, name='update-product'),
   path('delete-product/<id>', views.delete_product, name='delete-product'),
]