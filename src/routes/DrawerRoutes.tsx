import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { Home } from "../app/Home";
import { Developer } from "../app/Developer";
import MaterialIcons from "@react-native-vector-icons/material-icons";


export type DrawerRoutesList = {
  home: undefined;
  developer: undefined | { id: string }
};

export type DrawerRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#000",
        drawerInactiveTintColor: "#000",
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="developer"
        component={Developer}
        options={{
          drawerLabel: "Desenvolvedor",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
