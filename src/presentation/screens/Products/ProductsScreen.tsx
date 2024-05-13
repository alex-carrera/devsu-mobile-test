import { KeyboardAvoidingView, Platform, View } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"

import { FlatList, TextInput } from "react-native-gesture-handler"
import { globaStyles } from "../../theme/theme"
import { PrimaryButton } from "../../../components/shared/ButtonsComponents";
import { type RootStackParams } from "../../routes/ProductsNavigator";
import { useState } from "react";
import { ProductComponent } from "../../../components/shared/ProductComponent";




export const ProductsScreen = () => {

    const data = [
        { id: 'trj-crd-1', name: 'Visa', description: 'Tarjeta de consumo bajo la modalidad de credito', logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg', date_release: new Date("2024-02-01"), data_revision: new Date("2023-02-01") },
        { id: 'trj-crd-2', name: 'Mastercard', description: 'Tarjeta de consumo bajo la modalidad de credito', logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg', date_release: new Date('2023-02-01'), data_revision: new Date("2024-02-01") },
        { id: 'trj-crd-3', name: 'American', description: 'Tarjeta de consumo bajo la modalidad de credito', logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg', date_release: new Date('2023-02-01'), data_revision: new Date("2024-02-01") },
        { id: 'trj-crd-4', name: 'Austro', description: 'Tarjeta de consumo bajo la modalidad de credito', logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg', date_release: new Date('2023-02-01'), data_revision: new Date("2024-02-01") },
        { id: 'trj-crd-5', name: 'Visa Platinum', description: 'Tarjeta de consumo bajo la modalidad de credito', logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg', date_release: new Date('2023-02-01'), data_revision: new Date("2024-02-01") },
        { id: 'trj-crd-6', name: 'Dinners', description: 'Tarjeta de consumo bajo la modalidad de credito', logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg', date_release: new Date('2023-02-01'), data_revision: new Date("2024-02-01") }
    ];



    const [search, setSearch] = useState("");
    const [productos, setProductos] = useState([...data]);
    const navigation = useNavigation<NavigationProp<RootStackParams>>();



    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={globaStyles.container}
        >
            <TextInput
                style={globaStyles.inputForm}
                placeholder="Search..."
                value={search}
                onChangeText={(e) => {
                    setSearch(e);
                    const inf = data.filter((producto) =>
                      producto.name.startsWith(e)
                    );

                    setProductos([...inf]);
                }}
            />

            <FlatList
                data={productos}
                renderItem={({ item }) => (
                    <ProductComponent
                        onPress={() => navigation.navigate('Product',
                            {
                                id: item.id,
                                name: item.name,
                                description: item.description,
                                logo: item.logo,
                                data_release: item.date_release,
                                data_revision: item.data_revision
                            })}
                        label={item.name}
                        idNumber={item.id}
                    />
                )}
            />

            <PrimaryButton
                onPress={() => navigation.navigate('ProductForm', {
                    id: '',
                    name: '',
                    description: '',
                    logo: '',
                    data_release: new Date(),
                    data_revision: new Date(),
                })}
                label="Agregar"
            />


        </KeyboardAvoidingView>
    )
}
