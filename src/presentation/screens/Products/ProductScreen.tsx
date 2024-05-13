import { Image, Text, View } from "react-native"
import { globaStyles } from "../../theme/theme"
import { PrimaryButton, SecondaryButton, WarningButton } from "../../../components/shared/ButtonsComponents"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../routes/ProductsNavigator";
import { Modal } from "react-native";
import { useState } from "react";

export const ProductScreen = () => {

    const {
        id,
        name,
        description,
        logo,
        data_release,
        data_revision
    } = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

    const data_realease_format = data_release.toISOString().substring(0, 10);
    const data_revision_format = data_revision.toISOString().substring(0, 10);

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation<NavigationProp<RootStackParams, 'Product'>>();


    return (
        <View
            style={globaStyles.container}
        >
            <Text style={globaStyles.headerText}>{`ID: ${id}`} </Text>
            <Text>Información Extra</Text>



            <View style={{ ...globaStyles.description, marginTop: 60, paddingHorizontal: 30 }}>
                <Text>Nombre</Text>
                <Text
                    style={{ fontWeight: 'bold' }}
                >{name}
                </Text>
            </View>

            <View style={{ ...globaStyles.description, paddingHorizontal: 30 }}>
                <Text>Descripción</Text>
                <Text numberOfLines={3}
                    style={{ maxWidth: '50%', fontWeight: 'bold' }}
                >{description}
                </Text>
            </View>

            <View style={{ ...globaStyles.description, paddingLeft: 30, paddingRight: 30 }}>
                <Text>Logo</Text>
            </View>
            <Image
                style={{ width: 200, height: 125, alignSelf: 'center', borderRadius: 10, marginBottom: 20, marginTop: -15 }}
                source={{ uri: logo }} />

            <View style={{ ...globaStyles.description, paddingHorizontal: 30 }}>
                <Text >Fecha liberación</Text>
                <Text
                    style={{ fontWeight: 'bold' }}
                >{`${data_realease_format}`}
                </Text>
            </View>

            <View style={{ ...globaStyles.description, paddingHorizontal: 30 }}>
                <Text>Fecha revisión</Text>
                <Text
                    style={{ fontWeight: 'bold' }}
                >{`${data_revision_format}`}
                </Text>
            </View>


            <View style={{
                marginTop: 'auto',
                padding: 20,
            }}>

                <SecondaryButton
                    onPress={() => navigation.navigate('ProductForm',
                        {
                            id: id,
                            name: name,
                            description: description,
                            logo: logo,
                            data_release: data_release,
                            data_revision: data_revision,
                        }
                    )}
                    label="Editar"
                />

                <WarningButton
                    onPress={() => { setModalVisible(true) }}
                    label="Eliminar"
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={globaStyles.centeredView}>
                    <View style={globaStyles.modalView}>
                        <Text style={globaStyles.modalText}>
                            {`¿Estás seguro de elinar el producto ${name}?`}
                        </Text>
                        <PrimaryButton
                            onPress={() => {
                                navigation.navigate("Products");
                                setModalVisible(false);
                            }}
                            label="Confirmar"
                        />
                        <SecondaryButton
                            onPress={() => { setModalVisible(false) }}
                            label="Cancelar" />
                    </View>
                </View>
            </Modal>

        </View>
    )
}
