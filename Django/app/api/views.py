from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from .serializers import ProductsSerializer, UsersSerializer
from .models import Products
# We Use This Line To Mind The Errors While POST, PUT, And DELETE Methods
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_products(request):
   if (request.method != 'GET'): return JsonResponse({ "error": "Invalid Method Request." })
   products = Products.objects.all()

   serializer = ProductsSerializer(products, many=True)
   return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_product(request, id):
   if (request.method != 'GET'): return JsonResponse({ "error": "Invalid Method Request." })
   product = Products.objects.get(id=id)

   serializer = ProductsSerializer(product, many=False)
   return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def create_product(request):
   if (request.method != 'POST'): return JsonResponse({ "error": "Invalid Method Request." })
   data = JSONParser().parse(request)

   serializer = ProductsSerializer(data=data)
   if (serializer.is_valid() == False): return JsonResponse(serializer.errors, status=400)

   serializer.save()
   return JsonResponse(serializer.data, status=201)

@csrf_exempt
def update_product(request, id):
   if (request.method != 'PUT'): return JsonResponse({ "error": "Invalid Method Request." })

   product = Products.objects.get(id=id)
   data = JSONParser().parse(request)

   serializer = ProductsSerializer(product, data=data)
   if (serializer.is_valid() == False): return JsonResponse(serializer.errors, status=400)

   serializer.save()
   return JsonResponse(serializer.data, status=200)

@csrf_exempt
def delete_product(request, id):
   if (request.method != 'DELETE'): return JsonResponse({ "error": "Invalid Method Request." })

   product = Products.objects.get(id=id)
   product.delete()

   return JsonResponse({ "message": "Product successfully deleted." }, status=204)