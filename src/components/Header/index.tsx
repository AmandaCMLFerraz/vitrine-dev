import { View } from "react-native"
import { styles } from './styles'

type Props = {
  children: React.ReactNode
}

export function Header({ children }: Props) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}