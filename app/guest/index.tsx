import Container from "@/components/Container";
import headerImage from "@/assets/images/bg-image.png";
import gmapLocation from "@/assets/images/gmap-location.png";
import { Text, View, Image, StyleSheet } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import EventInfo from "@/components/EventInfo";
import FootComponent from "@/components/FooterModal";

export default function GuestScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["55%", "80%", "85%"], []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <Container style="flex-1 bg-[#202020]">
      <Image source={headerImage} className="w-[100%]" />

      <View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          footerComponent={FootComponent}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text className="text-2xl font-semibold">Art show 🎨 </Text>
            <Text className="text-md">by Olivia Adams </Text>
            <EventInfo
              eventDate="Monday, Nov 13 2023"
              eventTime="6:00 PM - 10: 00 PM"
              eventLocation="Lower Manhattan"
              eventTicketLeft="78/100 tickets left"
              eventTicketInvited="100+ invited"
              eventPrice="$10.00 - $50.00"
            />
            <Text className="mt-4 text-xl">About this event</Text>
            <Text className="mt-4 text-base ">
              Come join me in celebrating my 25th birthday! I can't wait to
              celebrate with all of you, so let's make it a night to remember.
              See you at the party!
            </Text>
            <Text className="mt-4 text-xl ">Find this event</Text>
            <Image source={gmapLocation} className="justify-center m-4" />
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 32,
  },
});
