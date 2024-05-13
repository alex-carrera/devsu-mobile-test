import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { globalColors } from "../theme/theme";
import { ProductFormScreen } from "../screens/Products/ProductFormScreen";
import { ProductScreen } from "../screens/Products/ProductScreen";
import { ProductsScreen } from "../screens/Products/ProductsScreen";


export type RootStackParams = {
  Home: undefined,
  Product: {
    id: string,
    name: string,
    description: string,
    logo: string,
    data_release: Date,
    data_revision: Date
  },
  Products: undefined
  ProductForm: {
    id: string,
    name: string,
    description: string,
    logo: string,
    data_release: Date,
    data_revision: Date
  },
}

const Stack = createStackNavigator<RootStackParams>();

export const ProductsNavigator = () => {


  return (
    <Stack.Navigator
      screenOptions={{
        title: 'BANCO',
        headerTintColor: globalColors.headerText,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="ProductForm" component={ProductFormScreen} />

    </Stack.Navigator>
  );
}