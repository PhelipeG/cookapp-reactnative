import { View, Text } from "react-native";
import Animated , { BounceOutDown, SlideInDown  } from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "@/theme";
import { styles } from "./styles";
import { Button } from "../Button";
type Props = {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
};

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} Ingredientes Selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>
      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  );
}
