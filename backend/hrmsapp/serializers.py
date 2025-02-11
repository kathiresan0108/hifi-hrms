from rest_framework import serializers
from .models import (Contact,AboutMe,Courses,Certifications,EducationDetails,ExperienceDetails,Skills,RequiredFiles,HRDetails,
                     CompanyDetails,
                     HiringDetails,UserProfile,)
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from rest_framework import serializers

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']
    
    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user

class RequiredFilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredFiles
        fields = '__all__'


class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certifications
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationDetails
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienceDetails
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'

class UserProfileSerializer(serializers.Serializer):
    user = serializers.IntegerField()
    about_me = serializers.JSONField()
    certifications = serializers.ListField(child=serializers.JSONField())
    education_details = serializers.ListField(child=serializers.JSONField())
    experience_details = serializers.ListField(child=serializers.JSONField())
    course = serializers.ListField(child=serializers.JSONField())
    skill = serializers.ListField(child=serializers.JSONField())


class HRDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HRDetails
        fields = ['user', 'hr_name', 'hr_phone_number', 'hr_email', 'hr_social_media']

    # Optional: Custom validation to handle hr_social_media as a list of strings
    def validate_hr_social_media(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("HR social media must be a list.")
        return value



# Company Details Serializer
class CompanyDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyDetails
        fields = '__all__'

    # Validate company email
    def validate_company_email(self, value):
        if not value:
            raise serializers.ValidationError("Company email is required.")
        if not "@" in value:
            raise serializers.ValidationError("Enter a valid email address.")
        return value

    # Validate company phone number
    def validate_company_phone(self, value):
        if not value:
            raise serializers.ValidationError("Company phone number is required.")
        if len(value) < 10:  # Assuming phone number should be at least 10 digits
            raise serializers.ValidationError("Phone number must be at least 10 digits long.")
        return value

    # Validate company name
    def validate_company_name(self, value):
        if not value:
            raise serializers.ValidationError("Company name is required.")
        return value

    # Validate company employees (should be a positive integer)
    def validate_company_employees(self, value):
        if not isinstance(value, int) or value <= 0:
            raise serializers.ValidationError("Number of employees should be a positive integer.")
        return value

    # Validate annual income (should be a positive number)
    def validate_annual_income(self, value):
        if value is None or value < 0:
            raise serializers.ValidationError("Annual income must be a positive number.")
        return value

    # Validate net profit (should be a positive number)
    def validate_net_profit(self, value):
        if value is None or value < 0:
            raise serializers.ValidationError("Net profit must be a positive number.")
        return value

    # Validate start year (should be a valid year)
    def validate_start_year(self, value):
        if value is None or value < 1900 or value > 2100:  # Assuming the year should be between 1900 and 2100
            raise serializers.ValidationError("Enter a valid year for the start year.")
        return value
    
class HiringDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HiringDetails
        fields = '__all__'

class UserTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user_type']
