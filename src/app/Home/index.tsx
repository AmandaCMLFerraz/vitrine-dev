import { Text, View } from 'react-native';
import { styles } from './styles'
import { Button } from '../../../components/Button';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vitrine Dev</Text>
      <Button title='Buscar' activeOpacity={0.8}/>
    </View>
  );
}


