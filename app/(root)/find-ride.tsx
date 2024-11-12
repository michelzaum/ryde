import { Text, View } from "react-native";
import { router } from "expo-router";
import { CustomButton } from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";

export default function FindRide() {
  const { userAddress, destinationAddress, setDestinationLocation, setUserLocation } = useLocationStore();

  return (
    <RideLayout title="Ride" snapPoints={['85%']}>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle='bg-neutral-100'
          textInputBackgroundColor="#F5F5F5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          containerStyle='bg-neutral-100'
          textInputBackgroundColor="transparent"
          handlePress={(location) => setDestinationLocation(location)}
        />
      </View>
      <CustomButton
        title="Find Now"
        onPress={() => router.push('/(root)/confirm-ride')}
        className="mt-5"
      />
    </RideLayout>
  )
}
