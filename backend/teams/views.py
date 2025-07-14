
from rest_framework import generics
from .serializer import TeamSerializer
from django.core.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .models import Teams, TeamMember
# Create your views here.


class CreateAndGetTeams(generics.ListCreateAPIView):
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        try:
            user_team = TeamMember.objects.get(user=user).team
            return Teams.objects.exclude(id=user_team.id).select_related('captain')
        except TeamMember.DoesNotExist:
            return Teams.objects.select_related('captain').all()

    def perform_create(self, serializer):
        user = self.request.user

        if TeamMember.objects.filter(user=user).exists():
            raise PermissionDenied(
                "You are already in a team and cannot create another.")

        team = serializer.save(captain=user)
        TeamMember.objects.create(user=user, team=team, role="captain")


class deleteTeam(generics.DestroyAPIView):
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Teams.objects.filter(captain=self.request.user)

    def get_object(self):
        team = super().get_object()
        if team.captain != self.request.user:
            raise PermissionDenied("You cannot delete someone else's post.")
        return team


class getOneTeam(generics.RetrieveAPIView):
    queryset = Teams.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]
