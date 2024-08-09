import { Alert, Text, View } from "react-native";
import CustomButton from "@/components/common/CustomButton";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomButton
        title="test"
        onPress={() => Alert.alert('test succeeded')}
        style={{ marginTop: 20 }}
      ></CustomButton>
    </View>
  );
}
