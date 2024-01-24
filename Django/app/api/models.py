from django.db import models

# Create your models here.
class Products(models.Model):
   # verbose_name -> Used To Change The Name In The Admin Panal

   CATEGORIES = [("foods", "Foods"), ("drinks", "Drinks"), ("accessories", "Accessories")]
   imageUrl = '/photos/24/01/24/81fPKd-2AYL._AC_SL1500_2.jpg'

   category = models.CharField(max_length=50, choices=CATEGORIES, default="------")
   name = models.CharField(max_length=50, null=True, blank=True)

   price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

   feature = models.BooleanField(default=False)
   createdAt = models.DateField(auto_now_add=True)

   content = models.TextField(null=True, blank=True, verbose_name="Description") # Is Not Required, null=True, blank=True
   image = models.ImageField(upload_to='photos/%y/%m/%d', null=True, blank=True, default=imageUrl)

   def __str__(self):
      return self.name

   class Meta:
      verbose_name = 'Products Table'
      ordering = ['name']

class Users(models.Model):
   ROLES = [(5059, 'Admin'), (4316, 'User')]

   email = models.CharField(max_length=50, unique=True, verbose_name="Email")
   password = models.CharField(max_length=50, verbose_name="Password")

   name = models.CharField(max_length=50, verbose_name="Name")
   phone = models.IntegerField(verbose_name="Phone")

   role = models.IntegerField(choices=ROLES, default=4316, verbose_name="Role")

   def __str__(self):
      return self.name

   class Meta:
      verbose_name = 'Users Table'

