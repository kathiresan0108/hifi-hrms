from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # Attempt to get the user by email or username
            user = User.objects.get(email=username) if '@' in username else User.objects.get(username=username)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None
