import { useEffect } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchRepositories } from "../../store/repositoriesSlice";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Avatar } from "../../components/Avatar";
import { RepositoryCard } from "../../components/RepositoryCard";

export function Repositories({ navigation }: any) {
  const dispatch = useDispatch<AppDispatch>(); 
  const { data: user } = useSelector((state: RootState) => state.user);
  const {
    data: repos,
    loading,
    error,
  } = useSelector((state: RootState) => state.repositories);

  useEffect(() => {
    if (user?.login) {
      dispatch(fetchRepositories(user.login));
    }
  }, [user, dispatch]);

  return (
    <View style={styles.container}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Text style={styles.text}>Vitrine Dev</Text>
        {user && <Avatar source={{ uri: user.avatar_url }} size={50} />}
      </Header>

      {loading && <ActivityIndicator size="large" color="#000" />}

      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {repos.map((repo) => (
          <RepositoryCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
          />
        ))}
      </ScrollView>
    </View>
  );
}
