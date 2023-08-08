from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser  # Import the CustomUser model

class SignUpForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'password1', 'password2')

class LoginForm(forms.Form):
    username = forms.CharField(max_length=50)
    password = forms.CharField(widget=forms.PasswordInput)

