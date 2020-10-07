import os
from humboldt.settings.base import *
from django.core.management.utils import get_random_secret_key


DEBUG = False
# ALLOWED_HOSTS = [os.environ.get("PRODUCTION_HOST")]
SECRET_KEY = os.environ.get("SECRET_KEY")
# SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', default=get_random_secret_key())
ALLOWED_HOSTS = ["https://pacific-citadel-37612.herokuapp.com"]


INSTALLED_APPS.extend(["whitenoise.runserver_nostatic"])

# Must insert after SecurityMiddleware, which is first in settings/common.py
MIDDLEWARE.insert(1, "whitenoise.middleware.WhiteNoiseMiddleware")

TEMPLATES[0]["DIRS"] = [os.path.join(BASE_DIR, "../", "frontend", "build")]

STATICFILES_DIRS = [os.path.join(
    BASE_DIR, "../", "frontend", "build", "static")]
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

STATIC_URL = "/static/"
WHITENOISE_ROOT = os.path.join(BASE_DIR, "../", "frontend", "build", "root")
