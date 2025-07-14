from django.shortcuts import render
from rest_framework import generics, status
from .serializer import PostSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import PermissionDenied


from .models import Posts


# Create your views here.
class CreateAndGetPosts(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    # queryset = Posts.objects.all()

    def get_queryset(self):
        # user = self.request.user
        return Posts.objects.select_related('author', 'author__team').all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.error())


class DeletePost(generics.DestroyAPIView):
    # queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        post = super().get_object()
        if post.author != self.request.user:
            raise PermissionDenied("You cannot delete someone else's post.")
        return post

    def get_queryset(self):
        user = self.request.user
        return Posts.objects.filter(author=user)
