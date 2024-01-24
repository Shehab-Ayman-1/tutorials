from django.shortcuts import render
from api.models import Products, Users

# Create your views here.
def home(request):
   filters = { 
      "empty": "", 
      "name": "shehab", 
      "age": 21, 
      "skills": ['html', 'css', 'js'], 
      "size": 9999999999 
   }
   return render(request, "home/index.html", filters)

def about(request):
   return render(request, "about/index.html")

def products(request):
   products = Products.objects.all()
   count = products.count()
   search = products.filter(name__contains="e")
   return render(request, "products/index.html", { "products": products, "count": count })

def product(request, id):
   product = Products.objects.get(id=id)
   return render(request, "product/index.html", { "product": product })

def services(request):
   return render(request, "services/index.html")

def register(request):
   email = request.POST.get('email')
   password = request.POST.get('password')
   name = request.POST.get('name')
   phone = request.POST.get('phone')
   role = request.POST.get('role')

   if email:
      data = Users(email=email, password=password, name=name, phone=phone, role=role)
      data.save()

   return render(request, "register/index.html")
