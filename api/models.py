from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)

    description = models.TextField()

    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True
    )

    github = models.URLField(
        blank=True,
        null=True
    )

    live_demo = models.URLField(
        blank=True,
        null=True
    )

    technology = models.CharField(
        max_length=300,
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title