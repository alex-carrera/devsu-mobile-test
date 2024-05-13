import { Text, View } from "react-native"
import { ProductsScreen } from "./Products/ProductsScreen"
import { globaStyles } from "../theme/theme"
import { ProductScreen } from "./Products/ProductScreen"

export const HomeScreen = () => {
    return (
        <View style={globaStyles.container}>
            <ProductsScreen/>
        </View>
    )
}
