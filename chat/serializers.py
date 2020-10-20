from rest_framework import serializers

from .models import Messaage

class MessageSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Messaage
        fields = ('id', 'content', 'user',)
