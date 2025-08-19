import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { InfoCard } from "../../components/Infos";
import { InfoTitle } from "../../components/Title";

export function Developer({ navigation }: any) {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <View style={styles.container}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Text style={styles.text}>Vitrine Dev</Text>
        {data && <Avatar source={{ uri: data.avatar_url }} size={50} />}
      </Header>

      {!loading && !error && !data && (
        <View>
          <Text>Nenhum desenvolvedor selecionado</Text>
        </View>
      )}

      {data && (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Avatar source={{ uri: data.avatar_url }} size={250} />

          <InfoTitle title={data.name || data.login} />
          <Text style={styles.email}>
            {data.email || "Email não disponível"}
          </Text>

          <View style={styles.containerFollowers}>
            <InfoCard title="Seguindo" value={String(data.following)} />
            <InfoCard title="Seguidores" value={String(data.followers)} />
          </View>

          <View style={styles.readmeContainer}>
            <Text style={styles.readmeText}>{data.bio || "Sem descrição"}</Text>
          </View>
        </ScrollView>
      )}
      <Button title="Ver repositórios" activeOpacity={0.8} />
    </View>
  );
}
