import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { DrawerRoutesProps } from "../../routes/DrawerRoutes";
import { InfoCard } from "../../components/Infos";
import { InfoTitle } from "../../components/Title";

export function User({ navigation }: DrawerRoutesProps<"home">) {
  return (
    <View style={styles.container}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Text style={styles.text}>Vitrine Dev</Text>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/147114210?v=4&size=64",
          }}
          size={50}
        />
      </Header>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/147114210?v=4&size=64",
          }}
          size={250}
        />

        <InfoTitle title="Amanda Ferraz" />
        <Text style={styles.email}>amanda@unochapeco.edu.br</Text>

        <View style={styles.containerFollowers}>
          <InfoCard title="Seguindo" value="10" />
          <InfoCard title="Seguidores" value="5" />
        </View>

        <View style={styles.readmeContainer}>
          <Text style={styles.readmeText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            ullam, aut amet voluptates non nihil accusamus tempora ut maiores
            quidem ex natus pariatur voluptatem voluptatibus impedit. Commodi
            perferendis quasi debitis.
          </Text>
        </View>

        <Button title="Ver repositórios" activeOpacity={0.8} />
      </ScrollView>
    </View>
  );
}
