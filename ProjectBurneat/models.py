from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import EmailField, CharField, PasswordInput, BooleanField

class UserRegisterForm(UserCreationForm):
    email = EmailField()
    password1 = CharField(label = 'Contraseña', widget=PasswordInput)
    password2 = CharField(label = 'Repetir Contraseña', widget=PasswordInput)
    last_name = forms.CharField()
    first_name = forms.CharField()
    date_of_birth = forms.DateField()
    height = forms.IntegerField()
    weight = forms.IntegerField()
    gender = forms.ChoiceField()
    eating_style = forms.ChoiceField()
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2', 'last_name', 'first_name']
        help_texts = {k:'' for k in fields}

class UserEditForm(UserCreationForm):
    email = EmailField()
    password1 = CharField(label = 'Contraseña', widget=PasswordInput)
    password2 = CharField(label = 'Repetir Contraseña', widget=PasswordInput)
    last_name = CharField()
    first_name = CharField()
    date_of_birth = forms.DateField()
    height = forms.IntegerField()
    weight = forms.IntegerField()
    gender = forms.ChoiceField()
    eating_style = forms.ChoiceField()
    
    class Meta:
        model = User
        fields = ['email', 'password1', 'password2', 'last_name', 'first_name', 'is_staff']
        help_texts = {k:'' for k in fields}