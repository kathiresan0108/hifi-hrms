from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate,  logout, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from .models import (
    Contact, AboutMe, EducationDetails, ExperienceDetails, 
    Courses, Certifications, Skills, RequiredFiles,HRDetails,
    CompanyDetails,
    HiringDetails,UserProfile  
)
from .serializers import (
    AboutMeSerializer, CertificationSerializer, ContactSerializer, CourseSerializer, EducationSerializer, ExperienceSerializer, RequiredFilesSerializer, SkillSerializer, UserProfileSerializer, UserRegistrationSerializer, 
    HRDetailsSerializer,
    CompanyDetailsSerializer,
    HiringDetailsSerializer,
)
from django.core.cache import cache
from .utils import create_otp, generate_and_send_otp, get_expected_otp, mark_otp_as_used, send_otp
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from django.core.mail import send_mail
import random
import logging
from .serializers import UserRegistrationSerializer
from .models import OTP
from django.shortcuts import get_object_or_404
import json
from rest_framework.parsers import MultiPartParser, FormParser


# Contact ViewSet
class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

# User Registration View
# Set up a logger
logger = logging.getLogger(__name__)

class RegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        logger.debug(f"Received registration request with data: {request.data}")
        
        serializer = UserRegistrationSerializer(data=request.data)
        
        if serializer.is_valid():
            try:
                user = serializer.save()  # Capture the user instance
                logger.info(f"User created successfully with ID: {user.id}")  # Log the user ID
                
                # Ensure the user ID is available
                return Response(
                    {'message': 'User created successfully', 'user_id': user.id}, 
                    status=status.HTTP_201_CREATED
                )
            except Exception as e:
                logger.error(f"Error saving user: {e}")
                return Response({'detail': 'An error occurred during registration.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        logger.warning(f"Invalid data: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
            email = request.data.get('email')
            password = request.data.get('password')

            try:
                # Get the user by email
                user = User.objects.get(email=email)
                # Authenticate using username (which is the email in this case) and password
                user = authenticate(request, username=user.username, password=password)
                
                if user is not None:
                    login(request, user)
                    user_id = user.id
                    user_type = user.profile.user_type 
                    return Response({"message": "Login successful","user_id":user_id,"user_type":user_type}, status=status.HTTP_200_OK)
                else:
                    return Response({"error": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)
            except User.DoesNotExist:
                return Response({"error": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)

# Logout View
@csrf_exempt
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        request.session.flush()  # Clear the session data completel
        response = JsonResponse({'status': 'success', 'message': 'Logout successful'}, status=200)
        response['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        response['Access-Control-Allow-Credentials'] = 'true'
        return response
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=405)



@api_view(['POST'])
@permission_classes([AllowAny])
def user_profile(request):
    # Debugging: Print the authenticated user
    print(f"Authenticated user: {request.user}")
    
    # Simulate a successful response
    return Response({"message": "User profile accessed!"}, status=200)
# CSRF Token View
@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'csrfToken': request.META.get('CSRF_COOKIE', '')})

# User Profile ViewSet
class UserProfileViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        data = request.data

        try:
            # Parse JSON fields
            about_me_data = json.loads(data.get('about_me', '{}'))
            
            # Extract the photo from request.FILES
            photo = request.FILES.get("photo")

            # Include the photo into the `about_me` dictionary
            about_me_data["photo"] = photo
            certifications_data = json.loads(data.get('certifications', '[]'))
            education_details_data = json.loads(data.get('education_details', '[]'))
            experience_details_data = json.loads(data.get('experience_details', '[]'))
            course_data = json.loads(data.get('course', '[]'))
            skill_data = json.loads(data.get('skill', '[]'))
            required_files_data = json.loads(data.get('required_files', '[]'))

            user_id = data.get('user')
            if not user_id:
                return Response({"error": "User ID is required."}, status=status.HTTP_400_BAD_REQUEST)

            # Debug data
            print("About Me Data:", about_me_data)
            print("Certifications Data:", certifications_data)
            print("Education Details Data:", education_details_data)

            # Validate data formats
            if not isinstance(about_me_data, dict):
                return Response({"error": "About Me data must be a dictionary."}, status=status.HTTP_400_BAD_REQUEST)

            for cert in certifications_data:
                if not isinstance(cert, dict):
                    return Response({"error": "Each certification must be a dictionary."}, status=status.HTTP_400_BAD_REQUEST)

            for education in education_details_data:
                if not isinstance(education, dict):
                    return Response({"error": "Each education detail must be a dictionary."}, status=status.HTTP_400_BAD_REQUEST)

            # Process AboutMe
            AboutMe.objects.update_or_create(user_id=user_id, defaults=about_me_data)

            # Process Certifications
            for cert in certifications_data:
                Certifications.objects.create(user_id=user_id, **cert)

            # Process Education Details
            for education in education_details_data:
                EducationDetails.objects.create(user_id=user_id, **education)

            # Process Experience Details
            for experience in experience_details_data:
                ExperienceDetails.objects.create(user_id=user_id, **experience)

            # Process Courses
            for course in course_data:
                Courses.objects.create(user_id=user_id, **course)

            # Process Skills
            for skill in skill_data:
                Skills.objects.create(user_id=user_id, **skill)

            # Process RequiredFiles
            for required_files in required_files_data:
                RequiredFiles.objects.create(user_id=user_id, **required_files)

            return Response({"message": "User profile created successfully."}, status=status.HTTP_201_CREATED)

        except json.JSONDecodeError:
            return Response({"error": "Invalid JSON format."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


    # GET method for retrieving user profiles
    def retrieve(self, request, pk=None):
        try:
            # Fetch the user's AboutMe data
            about_me = AboutMe.objects.get(user_id=pk)
            about_me_serialized = AboutMeSerializer(about_me).data

            # Fetch related data
            certifications = Certifications.objects.filter(user_id=pk)
            certifications_serialized = CertificationSerializer(certifications, many=True).data

            education_details = EducationDetails.objects.filter(user_id=pk)
            education_details_serialized = EducationSerializer(education_details, many=True).data

            experience_details = ExperienceDetails.objects.filter(user_id=pk)
            experience_details_serialized = ExperienceSerializer(experience_details, many=True).data

            courses = Courses.objects.filter(user_id=pk)
            courses_serialized = CourseSerializer(courses, many=True).data

            skills = Skills.objects.filter(user_id=pk)
            skills_serialized = SkillSerializer(skills, many=True).data

            required_files = RequiredFiles.objects.filter(user_id=pk)
            required_files_serialized = RequiredFilesSerializer(required_files, many=True).data

            # Combine all data into a single response
            profile_data = {
                "about_me": about_me_serialized,
                "certifications": certifications_serialized,
                "education_details": education_details_serialized,
                "experience_details": experience_details_serialized,
                "courses": courses_serialized,
                "skills": skills_serialized,
                "required_files": required_files_serialized,
            }

            return Response(profile_data, status=status.HTTP_200_OK)

        except AboutMe.DoesNotExist:
            return Response({"error": "User profile not found."}, status=status.HTTP_404_NOT_FOUND)



    def list(self, request, *args, **kwargs):
        try:
            # Get the user_id from query parameters
            user_id = request.query_params.get('user_id')
            
            # Filter profiles based on user_id if provided
            if user_id:
                profiles = AboutMe.objects.filter(user_id=user_id)
            else:
                profiles = AboutMe.objects.all()

            all_profiles = []

            for profile in profiles:
                user_id = profile.user_id

                # Serialize AboutMe
                about_me_serialized = AboutMeSerializer(profile).data

                # Fetch and serialize related data
                certifications = Certifications.objects.filter(user_id=user_id)
                certifications_serialized = CertificationSerializer(certifications, many=True).data

                education_details = EducationDetails.objects.filter(user_id=user_id)
                education_details_serialized = EducationSerializer(education_details, many=True).data

                experience_details = ExperienceDetails.objects.filter(user_id=user_id)
                experience_details_serialized = ExperienceSerializer(experience_details, many=True).data

                courses = Courses.objects.filter(user_id=user_id)
                courses_serialized = CourseSerializer(courses, many=True).data

                skills = Skills.objects.filter(user_id=user_id)
                skills_serialized = SkillSerializer(skills, many=True).data

                required_files = RequiredFiles.objects.filter(user_id=user_id)
                required_files_serialized = RequiredFilesSerializer(required_files, many=True).data

                # Combine all data for a single user
                profile_data = {
                    "about_me": about_me_serialized,
                    "certifications": certifications_serialized,
                    "education_details": education_details_serialized,
                    "experience_details": experience_details_serialized,
                    "courses": courses_serialized,
                    "skills": skills_serialized,
                    "required_files": required_files_serialized,
                }

                all_profiles.append(profile_data)

            # If filtering by user_id, return a single profile or 404 if not found
            if user_id:
                if all_profiles:
                    return Response(all_profiles[0], status=status.HTTP_200_OK)
                else:
                    return Response({"error": "No profile found for the given user_id."}, status=status.HTTP_404_NOT_FOUND)

            # Return all profiles if no user_id filter is applied
            return Response(all_profiles, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
    def put(self, request, user_id, format=None):
        try:
            user_profile = UserProfile.objects.get(id=user_id)
        except UserProfile.DoesNotExist:
            return Response({'detail': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserProfileSerializer(user_profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    





# class HRDetailsViewSet(viewsets.ModelViewSet):
#     permission_classes = [AllowAny]
#     queryset = HRDetails.objects.all()
#     serializer_class = HRDetailsSerializer

#     # Override get_queryset to filter by user_id if provided
#     def get_queryset(self):
#         user_id = self.request.query_params.get('user_id', None)
#         if user_id:
#             return self.queryset.filter(user=user_id)  # Assuming `user` is a field in your model
#         return self.queryset


class CompanyDetailsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = CompanyDetailsSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id')
        if user_id:
            return CompanyDetails.objects.filter(user__id=user_id)
        return CompanyDetails.objects.all()


@api_view(['GET'])
def company_details_view(request):
    user_id = request.query_params.get('user_id')
    if user_id:
        try:
            company = CompanyDetails.objects.get(user__id=user_id)
            serializer = CompanyDetailsSerializer(company)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except CompanyDetails.DoesNotExist:
            return Response({"error": "Company details not found."}, status=status.HTTP_404_NOT_FOUND)
    return Response({"error": "User ID is required."}, status=status.HTTP_400_BAD_REQUEST)




class HiringDetailsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = HiringDetails.objects.all()
    serializer_class = HiringDetailsSerializer

    # Override get_queryset to filter by user_id if provided
    def get_queryset(self):
        user_id = self.request.query_params.get('user_id', None)
        if user_id:
            return self.queryset.filter(user=user_id)  # Assuming `user` is a field in your model
        return self.queryset
    

class HRDetailsViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = HRDetails.objects.all()
    serializer_class = HRDetailsSerializer

    def create(self, request, *args, **kwargs):
        # If the data is inside 'hr_details' key, adjust here
        hr_details_data = request.data.get('hr_details', [])
        
        # Process each HR detail
        for hr_detail in hr_details_data:
            serializer = self.get_serializer(data=hr_detail)
            if serializer.is_valid():
                serializer.save()
            else:
                return Response(serializer.errors, status=400)

        return Response({"message": "HR details submitted successfully"}, status=201)

logger = logging.getLogger(__name__)

class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        user = User.objects.create_user(
            username=data['email'],
            email=data['email'],
            password=data['password'],
            first_name=data['first_name'],
            last_name=data['last_name'],
        )

        # Send OTP and cache it
        otp = random.randint(1000, 9999)  # Example OTP generation
        cache.set(user.email, otp, timeout=300)  # Cache OTP for 5 minutes

        return Response({"detail": "User created successfully. OTP sent to email.", 'user_id': user.id}, status=status.HTTP_201_CREATED)

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])  # This allows access without authentication
def send_otp(request):
    email = request.data.get('email')
    
    if not email:
        return Response({"detail": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Generate OTP
        otp = random.randint(1000, 9999)
        otp = create_otp(email)
        
        # Send the OTP via email
        send_mail(
           
            'Your OTP Code',
            f'Your OTP code is {otp}',
            f'ho i am arun'
            'srivaniagency@example.com',  # Replace with your email
            [email],
            fail_silently=False,
        )

        return Response({"detail": "OTP sent successfully."}, status=status.HTTP_200_OK)

    except Exception as e:
        # Handle email sending failure or other issues
        return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
logger = logging.getLogger(__name__)

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    print(type(request))  # Should show <class 'django.http.HttpRequest'>
    print(request.data) 
    logger.debug("Received data: %s", request.data)
    if request.method == 'POST':
        try:
            serializer = UserRegistrationSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                logger.info("User registered successfully.")
                return Response({"message": "User registered, OTP sent."}, status=status.HTTP_201_CREATED)
            else:
                logger.error("Validation errors: %s", serializer.errors)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.exception("An error occurred: %s", e)  # Log the exception with traceback
            return Response({"detail": "An internal error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class VerifyOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')

        if not email or not otp:
            return Response({"detail": "Email and OTP are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            expected_otp = get_expected_otp(email)

            if expected_otp is None:
                return Response({"detail": "OTP expired or email not found."}, status=status.HTTP_400_BAD_REQUEST)

            if otp == str(expected_otp):
                mark_otp_as_used(email)
                # Add status: true to match what the frontend expects
                return Response({"detail": "OTP verified successfully.", "status": True}, status=status.HTTP_200_OK)

            return Response({"detail": "Invalid OTP.", "status": False}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            logger.error(f"Error during OTP verification for {email}: {e}")
            return Response({"detail": "An error occurred while verifying OTP.", "status": False}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ResendOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({"detail": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            otp = send_otp(email)
            cache.set(email, otp, timeout=300)  # Cache new OTP for 5 minutes
            return Response({"detail": "OTP has been resent."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
@api_view(['POST'])
@permission_classes([AllowAny])
def resend_otp(request):
    email = request.data.get("email")

    if not email:
        return Response({"detail": "Email is required."}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        # Call function to generate and send OTP
        generate_and_send_otp(email)
        return Response({"status": True, "message": "OTP has been resent."}, status=status.HTTP_200_OK)
    except Exception as e:
        print(f"Error sending OTP: {e}")
        return Response({"status": False, "detail": "Failed to resend OTP. Please try again."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
@api_view(['POST'])
def verify_otp(request):
    email = request.data.get("email")
    otp = request.data.get("otp")
    
    try:
        # Look up the OTP entry with the given email and OTP
        otp_entry = OTP.objects.get(email=email, otp=otp, is_used=False)
        
        # Mark the OTP as used after verification
        otp_entry.is_used = True
        otp_entry.save()
        
        return Response({"status": True, "message": "OTP verified successfully."})
    except OTP.DoesNotExist:
        return Response({"status": False, "detail": "Invalid or already used OTP."}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        # Log any unexpected errors
        print(f"Error verifying OTP: {e}")
        return Response({"detail": "An unexpected error occurred."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class StoreUserTypeView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_id = request.data.get('user_id')
        user_type = request.data.get('userType')

        if user_type not in ['candidate', 'client']:
            return Response({"error": "Invalid user type"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Fetch the user based on the user_id from the request data
            user = User.objects.get(id=user_id)

            # Assuming you have a UserProfile model where user_type is stored
            user_profile, created = UserProfile.objects.get_or_create(user=user)
            user_profile.user_type = user_type
            user_profile.save()

            return Response({"message": "User type saved successfully", 'user_id': user.id}, status=status.HTTP_201_CREATED)

        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
class SendResetOtpView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get('email')
        
        # Check if the user exists (case-insensitive)
        try:
            user = User.objects.get(email__iexact=email)  # Use iexact for case-insensitive match
        except User.DoesNotExist:
            return Response({"message": "No user with this email address."}, status=status.HTTP_404_NOT_FOUND)

        # Generate a 6-digit OTP
        otp = random.randint(100000, 999999)

        # Store OTP in cache (valid for 5 minutes)
        cache.set(f'otp_{user.email}', otp, timeout=300)

        # Send OTP via email
        send_mail(
            'Password Reset OTP',
            f'Your OTP for password reset is {otp}.',
            'admin@example.com',  # Replace with your actual email
            [user.email],
            fail_silently=False,
        )

        return Response({"message": "OTP sent to your email."}, status=status.HTTP_200_OK)

class VerifyOtpView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')

        # Check if the user exists (case-insensitive)
        try:
            user = User.objects.get(email__iexact=email)  # Use iexact for case-insensitive match
        except User.DoesNotExist:
            return Response({"message": "No user with this email address."}, status=status.HTTP_404_NOT_FOUND)

        # Retrieve OTP from cache
        cached_otp = cache.get(f'otp_{user.email}')

        if cached_otp and str(cached_otp) == str(otp):
            return Response({"message": "OTP verified."}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Invalid OTP."}, status=status.HTTP_400_BAD_REQUEST)


class UpdatePasswordView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        new_password = request.data.get('password')
        user = get_object_or_404(User, email=request.data.get('email'))

        user.set_password(new_password)
        user.save()

        return Response({"message": "Password updated successfully"}, status=status.HTTP_200_OK)
    

class CompanyDetailsUpdateView(APIView):
    def put(self, request, user_id):
        try:
            company = CompanyDetails.objects.get(user_id=user_id)
            serializer = CompanyDetailsSerializer(company, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except CompanyDetails.DoesNotExist:
            serializer = CompanyDetailsSerializer(data={**request.data, "user": user_id})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'PUT'])
def company_details_view(request):
    user_id = request.query_params.get('user_id')
    if request.method == 'GET' and user_id:
        company_details = CompanyDetails.objects.filter(user_id=user_id).first()
        if company_details:
            serializer = CompanyDetailsSerializer(company_details)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method in ['POST', 'PUT']:
        data = request.data
        company_details = CompanyDetails.objects.filter(user_id=data.get('user')).first()
        if company_details and request.method == 'PUT':
            serializer = CompanyDetailsSerializer(company_details, data=data)
        else:
            serializer = CompanyDetailsSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)