import { Text, Pressable, PressableProps, Image } from "react-native";

import { styles } from "./styles";
import { services } from "@/services";

export type IngredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image
        source={{ uri: `${services.storage.imagePath}/${image}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
}
