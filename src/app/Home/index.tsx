import { useState } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { DrawerRoutesProps  } from "../../routes/DrawerRoutes";
import { fetchUser, clearUser } from "../../store/userSlice";
import { AppDispatch } from "../../store";

export function Home({ navigation }: DrawerRoutesProps<"home">) {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (username.trim()) {
      dispatch(fetchUser(username));
      navigation.navigate("user");
    }
  };

  return (
    <View style={styles.container}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Text style={styles.text}>Vitrine Dev</Text>
        <Avatar
          source={{ uri: "https://avatars.githubusercontent.com/u/147114210?v=4&size=64" }}
          size={50}
        />
      </Header>

      <Input
        placeholder="Qual dev você deseja ver?"
        icon="search"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Buscar" activeOpacity={0.8} onPress={handleSearch} />
    </View>
  );
}
