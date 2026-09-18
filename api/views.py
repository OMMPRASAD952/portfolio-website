from django.conf import settings
from django.core.mail import send_mail

from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Project
from .serializers import ProjectSerializer


# ============================================================
# API HOME
# ============================================================

@api_view(["GET"])
def api_home(request):
    return Response({
        "message": "Portfolio Backend API is Working!",
        "status": "success",
    })


# ============================================================
# PROJECT LIST
# ============================================================

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer


# ============================================================
# CONTACT API
# ============================================================

@api_view(["POST"])
def contact(request):
    name = request.data.get("name", "").strip()
    email = request.data.get("email", "").strip()
    subject = request.data.get("subject", "").strip()
    message = request.data.get("message", "").strip()

    if not name or not email or not subject or not message:
        return Response(
            {
                "success": False,
                "message": "All fields are required.",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    email_body = f"""
New message received from your portfolio website.

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

    try:
        sent_count = send_mail(
            subject=f"Portfolio Contact: {subject}",
            message=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[
                "ommprasadsahoo952@gmail.com",
            ],
            fail_silently=False,
        )

        if sent_count == 1:
            return Response(
                {
                    "success": True,
                    "message": "Your message has been sent successfully!",
                },
                status=status.HTTP_200_OK,
            )

        return Response(
            {
                "success": False,
                "message": "Email could not be sent.",
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    except Exception as e:
        print("CONTACT EMAIL ERROR:", str(e))

        return Response(
            {
                "success": False,
                "message": "Unable to send message.",
                "error": str(e),
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )