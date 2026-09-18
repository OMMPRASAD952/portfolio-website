from django.urls import path

from .views import (
    api_home,
    ProjectListView,
    contact,
)


urlpatterns = [
    path(
        "",
        api_home,
        name="api-home",
    ),

    path(
        "projects/",
        ProjectListView.as_view(),
        name="projects",
    ),

    path(
        "contact/",
        contact,
        name="contact",
    ),
]