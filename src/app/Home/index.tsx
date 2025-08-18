  import { Text, View } from 'react-native';
  import { styles } from './styles'
  import { Button } from '../../../components/Button';
  import { Input } from '../../../components/Input';
  import { Avatar } from '../../../components/Avatar';

  export function Home() {
    return (
      <View style={styles.container}>
        <Avatar source={{ uri: "https://avatars.githubusercontent.com/u/147114210?v=4&size=64"}} size={50}/>
        <Text style={styles.text}>Vitrine Dev</Text>
        <Input placeholder='Qual dev você deseja ver?' icon='search'/>
        <Button title='Buscar' activeOpacity={0.8}/>
      </View>
    );
  }


