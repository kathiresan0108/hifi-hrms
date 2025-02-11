from django.conf import settings
from django.db import models
from django.contrib.auth.models import User, AbstractUser
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from datetime import timedelta
from django.utils import timezone
from django.core.validators import RegexValidator
class OtpModel(models.Model):
    email = models.EmailField()
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)

    def is_expired(self):
        return timezone.now() > self.created_at + timedelta(minutes=10)  # 10-minute expiry



class CustomUser1(AbstractUser):
    # Add related_name to avoid conflicts
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # Update the related_name to avoid conflict
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_permissions_set',  # Update the related_name to avoid conflict
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )


#contactus
class Contact(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()


    def __str__(self):
        return self.username
    

class AboutMe(models.Model):
    # Link this model to the built-in User model
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='about_me')

    # Fields for the AboutMe model
    photo = models.ImageField(upload_to='media/', blank=True, null=True)  # File upload for JPG/JPEG images
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    dob = models.DateField()  # Date of Birth
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female')])
    email = models.EmailField()
    phone = models.CharField(max_length=15)  # Consider using a more strict validation if needed
    current_position = models.CharField(max_length=100)
    current_position_at = models.CharField(max_length=100)
    marital_status = models.CharField(max_length=10, choices=[('married', 'Married'), ('single', 'Single')])
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)  # Adjust length as necessary
    address = models.TextField()

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    

class EducationDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='education_details')
    school_name = models.CharField(max_length=255)
    board = models.CharField(max_length=255)
    qualification = models.CharField(max_length=255)
    specialization = models.CharField(max_length=255, blank=True, null=True)
    start_year = models.DateField()
    end_year = models.DateField()
    percentage = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    cgpa = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return f"{self.qualification} from {self.school_name}"
    
class ExperienceDetails(models.Model):
    EXPERIENCE_CHOICES = [
        ('Fresher', 'Fresher'),
        ('Experienced', 'Experienced'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='experience_details')
    experience_status = models.CharField(max_length=20, choices=EXPERIENCE_CHOICES, default='Fresher')
    company_name = models.CharField(max_length=255, blank=True, null=True)
    domain = models.CharField(max_length=255, blank=True, null=True)
    job_role = models.CharField(max_length=255, blank=True, null=True)
    year_of_experience = models.DecimalField(max_digits=4, decimal_places=1, blank=True, null=True)
    salary_per_annum = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return f"{self.experience_status} - {self.company_name if self.company_name else 'No company specified'}"
    
class Courses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses')
    course_name = models.CharField(max_length=255)
    institute_name = models.CharField(max_length=255)
    course_duration_start = models.DateField()
    course_duration_end = models.DateField()
    license = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.course_name} at {self.institute_name}"
    
class Certifications(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='certifications')
    certificate_name = models.CharField(max_length=255)
    issued_organization = models.CharField(max_length=255)
    issue_date = models.DateField()
    certification_input = models.FileField(upload_to='certifications/', blank=True, null=True)

    def __str__(self):
        return f"{self.certificate_name} issued by {self.issued_organization}"
    
class Skills(models.Model):
    TECHNICAL_CHOICES = [
        ('Technical', 'Technical'),
        ('Non-Technical', 'Non-Technical'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='skills')
    skill_type = models.CharField(max_length=20, choices=TECHNICAL_CHOICES)
    skill = models.CharField(max_length=255)
    area_of_interest = models.CharField(max_length=255)
    expected_ctc = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.skill} ({self.skill_type})"
    
class RequiredFiles(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='required_files')
    resume = models.FileField(upload_to='resumes/', blank=False)  # Store resumes in PDF format
    signature = models.ImageField(upload_to='signatures/', blank=False)  # Store signatures in JPG/JPEG format
    declaration = models.BooleanField(default=False)  # Declaration checkbox

    def __str__(self):
        return f"Required Files for {self.user.username}"
    
#HR Details Form
# class HRDetails(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
#     hr_name = models.CharField(max_length=255)
#     hr_phone_number = models.CharField(max_length=20)
#     hr_email = models.EmailField()
#     hr_social_media = models.JSONField(default=list, blank=True)

#     def _str_(self):
#         return self.hr_name

class HRDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hr_name = models.CharField(max_length=100)
    hr_phone_number = models.CharField(max_length=15)
    hr_email = models.EmailField()
    hr_social_media = models.JSONField(default=list)

    def __str__(self):
        return self.hr_name

    

    
# Hiring Post Detailsfrom django.db import models
class HiringDetails(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    job_roles = models.CharField(max_length=100)  # Job role title
    qualification = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    area_of_interest = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    experience = models.PositiveIntegerField()  # Years of experience
    passed_out = models.PositiveIntegerField()  # Year of graduation
    age_no_ratio = models.PositiveIntegerField()  # Age of candidate
    location = models.CharField(max_length=100)
    work_type = models.CharField(max_length=20)
    no_of_vacancies = models.PositiveIntegerField()  # Total vacancies available
    salary_details = models.CharField(max_length=100)
    no_of_vacancy_required = models.PositiveIntegerField()  # Number of vacancies required
    interview_dates = models.TextField(null=True, blank=True)  # Allow null values
    interview_locations = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Hiring for role: {self.job_roles} at {self.location}"

    def get_interview_details(self):
        """Helper method to get interview details."""
        dates = self.interview_dates.split(',') if self.interview_dates else []
        locations = self.interview_locations.split(',') if self.interview_locations else []
        return list(zip(dates, locations))
    

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            # Use email for authentication
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            return None
        if user.check_password(password):
            return user
        return None
    


class OTP(models.Model):
    email = models.EmailField(unique=True)  # Ensure email is unique for each OTP
    otp = models.CharField(max_length=6)  # Assuming OTPs are 6 digits
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)  # This field indicates whether the OTP has been used

    def __str__(self):
        return f"OTP for {self.email}: {self.otp}"
    

class UserProfile(models.Model):
    USER_TYPE_CHOICES = [
        ('candidate', 'Candidate'),
        ('client', 'Client'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default='candidate')

    def __str__(self):
        return f"{self.user.username} - {self.get_user_type_display()}"

# Company Details Model
class CompanyDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    company_name = models.CharField(max_length=255)
    company_location = models.CharField(max_length=255)
    company_email = models.EmailField()
    company_phone = models.CharField(
        max_length=10,
        validators=[RegexValidator(r'^\d{10}$', message="Phone number must be 10 digits")]
    )
        
    company_social_media_Linkedin = models.JSONField(default=list, blank=True)
    company_social_media_Instagram = models.JSONField(default=list, blank=True)
    company_social_media_Facebook = models.JSONField(default=list, blank=True)
    company_social_media_Twitter = models.JSONField(default=list, blank=True)
    company_social_media_Whatsapp_group = models.JSONField(default=list, blank=True)
    company_department = models.CharField(max_length=255, blank=True, null=True)
    company_employees = models.IntegerField()
    company_weblink = models.URLField(blank=True, null=True)
    start_year = models.IntegerField()
    annual_income = models.DecimalField(max_digits=12, decimal_places=2)
    net_profit = models.DecimalField(max_digits=12, decimal_places=2)
    company_branch_no = models.CharField(max_length=100, blank=True, null=True)
    company_certification = models.CharField(max_length=100, blank=True, null=True)
    company_license = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.company_name