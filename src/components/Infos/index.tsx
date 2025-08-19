import { View, Text, ViewProps } from "react-native";
import { styles } from "./styles";

type Props = ViewProps & {
  title: string;
  value: string | number;
};

export function InfoCard({ title, value, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
