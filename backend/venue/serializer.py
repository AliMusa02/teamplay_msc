from rest_framework import serializers
from .models import Venues, VenueSlots


class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venues
        fields = ['id', 'name', 'location', 'created_at']


class VenueSlotsSerializer(serializers.ModelSerializer):
    venue_id = serializers.IntegerField(source='venue.id', read_only=True)
    venue_name = serializers.CharField(source='venue.name', read_only=True)

    class Meta:
        model = VenueSlots
        fields = ['id', 'venue_id', 'venue_name',
                  'slot_time', 'is_booked', 'created_at']

    def update(self, instance, validated_data):
        if 'is_booked' in validated_data and len(validated_data) == 1:
            return super().update(instance, validated_data)
        raise serializers.ValidationError(
            "Only 'is_booked' field can be updated.")
