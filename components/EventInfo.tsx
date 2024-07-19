import { View, Text, Image } from "react-native";
import React from "react";
import calendar from "@/assets/images/calendar.png";
import location from "@/assets/images/location.png";
import ticket from "@/assets/images/ticket.png";
import amount from "@/assets/images/amount.png";

interface EventInfoProps {
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventPrice: string;
  eventTicketLeft: string;
  eventTicketInvited: string;
}
export default function EventInfo({
  eventDate,
  eventLocation,
  eventPrice,
  eventTicketInvited,
  eventTicketLeft,
  eventTime,
}: EventInfoProps) {
  return (
    <View>
      <EventInfoItem icon={calendar} title={eventDate} value={eventTime} />
      <EventInfoItem
        icon={location}
        title={eventLocation}
        isClickable={true}
        value={"Join to see full address"}
      />
      <EventInfoItem
        icon={ticket}
        title={eventTicketLeft}
        value={eventTicketInvited}
      />
      <EventInfoItem icon={amount} title={eventPrice} />
    </View>
  );
}

function EventInfoItem({
  title,
  value,
  icon,
  isClickable = false,
}: {
  title: string;
  value?: string;
  icon: any;
  isClickable?: boolean;
}) {
  return (
    <View className="flex-row items-center mt-4">
      <Image source={icon} />
      <View className="ml-4">
        <Text className="text-base ">{title}</Text>
        {value && (
          <Text
            className={`text-sm  ${
              isClickable === true ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {value}
          </Text>
        )}
      </View>
    </View>
  );
}
