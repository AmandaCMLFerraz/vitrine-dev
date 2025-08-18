import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { DrawerProps } from "../../routes/DrawerRoutes";

export function Home({ navigation }: DrawerProps<"home">) {
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
      <Input placeholder="Qual dev você deseja ver?" icon="search" />
      <Button title="Buscar" activeOpacity={0.8} />
    </View>
  );
}
