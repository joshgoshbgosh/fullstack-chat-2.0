from rest_framework import generics

from . import models
from . import serializers


class MessageListCreateView(generics.ListCreateAPIView):
    queryset = models.Messaage.objects.all().order_by('-created_at')
    serializer_class = serializers.MessageSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Create your views here.
