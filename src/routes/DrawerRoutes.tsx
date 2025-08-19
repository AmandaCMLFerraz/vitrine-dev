import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { Home } from "../app/Home";
import { User } from "../app/User";
import MaterialIcons from "@react-native-vector-icons/material-icons";


export type DrawerRoutesList = {
  home: undefined;
  user: undefined | { id: string }
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="user"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#000",
        drawerInactiveTintColor: "#000",
      }}
    >
      <Drawer.Screen
        name="user"
        component={User}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
