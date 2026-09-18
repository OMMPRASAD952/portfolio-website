from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    class Meta:
        model = Project

        fields = [
            "id",
            "title",
            "description",
            "image",
            "github",
            "live_demo",
            "technology",
            "created_at",
        ]

    def get_image(self, obj):

        if not obj.image:
            return None

        request = self.context.get("request")

        if request:
            return request.build_absolute_uri(
                obj.image.url
            )

        return obj.image.url