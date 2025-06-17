from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Waitlist

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class WaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waitlist
        fields = ('email', 'created_at')
        read_only_fields = ('created_at',) 