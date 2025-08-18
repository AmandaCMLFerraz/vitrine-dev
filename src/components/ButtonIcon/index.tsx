import MaterialIcons from "@react-native-vector-icons/material-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  name: React.ComponentProps<typeof MaterialIcons>["name"]
}

export function ButtonIcon({ name, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <MaterialIcons name={name} size={24} />
    </TouchableOpacity>
  )
}