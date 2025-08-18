import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "@react-native-vector-icons/material-icons";

type IconName = "search"

type Props = TextInputProps & {
  icon?: IconName;
};

export function Input({ icon, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="#000"
        {...rest} 
      />
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color="#000"
        />
      )}
    </View>
  );
}
