from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import  ( ContactViewSet, UserProfileViewSet,HRDetailsViewSet,
                     CompanyDetailsViewSet,
                     HiringDetailsViewSet, LoginView  ,
                      SendResetOtpView, VerifyOtpView,
                      UpdatePasswordView, user_profile, logout_view, get_csrf_token,SignupView, 
                      send_otp, resend_otp, VerifyOTPView, StoreUserTypeView,
                      )

router = DefaultRouter()
# router.register(r'register', UserRegistrationViewSet, basename='register')
router.register(r'contacts', ContactViewSet)
router.register(r'user-profile', UserProfileViewSet, basename='user-profile')
router.register(r'hrdetails', HRDetailsViewSet, basename='hrdetails')
router.register(r'hiringdetails', HiringDetailsViewSet, basename='hiringdetails')
router.register(r'company-details', CompanyDetailsViewSet, basename='company-details')

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', logout_view, name='logout'),
    path('csrf-token/', get_csrf_token, name='get_csrf_token',),
    path('register/', SignupView.as_view(), name='register'),
    path('send_otp/', send_otp, name='send_otp'),
    path('verify_otp/', VerifyOTPView.as_view(), name='verify_otp'),
    path('store_user_type/', StoreUserTypeView.as_view(), name='store_user_type'),
    path('resend_otp/', resend_otp, name='resend_otp'),  
    path('send-reset-otp/', SendResetOtpView.as_view(), name='send-reset-otp'),
    path('user-profile/', user_profile, name='user-profile'),
    path('send-reset-otp/', SendResetOtpView.as_view(), name='send-reset-otp'),
    path('verify-reset-otp/', VerifyOtpView.as_view(), name='verify-reset-otp'),
    path('update-password/', UpdatePasswordView.as_view(), name='update-password'),
]