import { View, Text } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "@react-native-vector-icons/material-icons";

type RepositoryCardProps = {
  name: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
};

export function RepositoryCard({
  name,
  description,
  language,
  stars,
  forks,
}: RepositoryCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
      {language ? <Text style={styles.language}>Linguagem: {language}</Text> : null}

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <MaterialIcons name="star" size={16} color="#fff" />
          <Text style={styles.statText}>{stars}</Text>
        </View>
        <View style={styles.statItem}>
          <MaterialIcons name="alt-route" size={16} color="#fff" />
          <Text style={styles.statText}>{forks}</Text>
        </View>
      </View>
    </View>
  );
}