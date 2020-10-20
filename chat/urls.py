from django.urls import include, path

from .views import MessageListCreateView

app_name = 'chat'


urlpatterns = [
path('', MessageListCreateView.as_view(), name="message_list"),
]
