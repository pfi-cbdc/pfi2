from django.urls import path
from .views import RegisterView, CustomTokenObtainPairView, WaitlistView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('waitlist/', WaitlistView.as_view(), name='waitlist'),
] 