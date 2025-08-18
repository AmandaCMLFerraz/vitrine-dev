import { Text, View } from 'react-native';
import { styles } from './styles'
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vitrine Dev</Text>
      <Input placeholder='Qual dev você deseja ver?' icon='search'/>
      <Button title='Buscar' activeOpacity={0.8}/>
    </View>
  );
}


