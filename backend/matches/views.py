from django.shortcuts import render
from rest_framework import generics, status
from .serializer import InvitationSerializer, MatchesSerializer
from .models import Invitation, Matches
from rest_framework.permissions import IsAuthenticated, AllowAny
from teams.models import Teams
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied, NotFound


# Create your views here.


class CreateAndGetInvitations(generics.ListCreateAPIView):
    serializer_class = InvitationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if not Teams.objects.filter(captain=user).exists():
            raise PermissionDenied("Only captain can get data")
        return Invitation.objects.filter(receiver_team__captain=user, status="pending")

    def perform_create(self, serializer):
        user = self.request.user
        receiver_team = serializer.validated_data.get("receiver_team")
        venue = serializer.validated_data.get("venue")
        time_slot = serializer.validated_data.get("time_slot")
        date = serializer.validated_data.get("date")
        message = serializer.validated_data.get("message")

        user = self.request.user
        receiver_team = serializer.validated_data.get("receiver_team")

        if not receiver_team:
            raise PermissionDenied("receiver id cannot be null")
        try:
            sender_team = Teams.objects.get(captain=user)
        except Teams.DoesNotExist:
            raise PermissionDenied('Only captains can send invitations')

        if sender_team == receiver_team:
            raise PermissionDenied(
                "You cannot send an invitation to your own team")

        if Invitation.objects.filter(venue=venue, time_slot=time_slot, date=date).exists():
            raise PermissionDenied(
                "This venue is already booked at the selected time and date")

        serializer.save(sender_team=sender_team,
                        receiver_team=receiver_team,
                        venue=venue,
                        time_slot=time_slot,
                        date=date,
                        message=message
                        )

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response({
            "message": "Invitation sent successfully",
            "data": response.data
        }, status=status.HTTP_201_CREATED)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            "message": "Pending invitations fetched successfully",
            "data": serializer.data
        })
