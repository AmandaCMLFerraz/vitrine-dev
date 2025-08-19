import { View, Text, ViewProps } from "react-native";
import { styles } from "./styles";

type Props = ViewProps & {
  title: string;
};

export function InfoTitle({ title, ...rest }: Props) {
  return (
    <View  {...rest}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
