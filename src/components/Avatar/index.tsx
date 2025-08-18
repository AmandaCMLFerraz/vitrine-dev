import { Image, ImageProps } from "react-native";
import { styles } from "./styles";

type Props = ImageProps & {
  size?: number;
};

export function Avatar({ size = 48, style, ...rest }: Props) {
  return (
    <Image
      {...rest}
      style={[styles.image, { width: size, height: size, borderRadius: size / 2 }, style]}
    />
  );
}
