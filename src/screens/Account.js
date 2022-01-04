import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // importamos de aca, porque el SafeArea del paquete de react native no funciona

export default function Account() {
  return (
    <SafeAreaView>
      <Text>Account</Text>
    </SafeAreaView>
  );
}
