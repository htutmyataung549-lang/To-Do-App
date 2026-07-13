import { Button } from "@/components/ui/button";
import { AddIcon, Icon } from "@/components/ui/icon";
import { View } from "react-native";

interface Props {
  onPress: () => void;
}

export default function FloatingButton({ onPress }: Props) {
  return (
    <View>
      <Button
        onPress={onPress}
        className="absolute bottom-8 right-6 rounded-full bg-blue-500 w-16 h-16"
      >
        <Icon as={AddIcon} />
      </Button>
    </View>
  );
}
