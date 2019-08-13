from rest_framework import serializers
from .models import TextCenter


class TextCenterSerializer(serializers.Serializer):
    data_series_number = serializers.CharField(max_length=100)
    data_time = serializers.CharField(max_length=100)
    data_content = serializers.CharField()

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return TextCenter.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.title = validated_data.get('data_series_number', instance.data_series_number)
        instance.code = validated_data.get('data_time', instance.data_time)
        instance.linenos = validated_data.get('data_content', instance.data_content)
        instance.save()
        return instance
