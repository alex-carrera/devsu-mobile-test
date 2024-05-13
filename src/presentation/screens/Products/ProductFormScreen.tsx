import { KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { globalColors, globaStyles } from "../../theme/theme"
import { PrimaryButton, SecondaryButton } from "../../../components/shared/ButtonsComponents"
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../routes/ProductsNavigator";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export const ProductFormScreen = () => {

    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

    const data_realease_format = params.data_release.toISOString().substring(0, 10);
    const data_revision_format = params.data_revision.toISOString().substring(0, 10);

    const [id, setId] = useState(params.id);
    const [name, setName] = useState(params.name);
    const [description, setDescription] = useState(params.description);
    const [logo, setLogo] = useState(params.logo);
    const [dataRelease, setDataRelease] = useState(data_realease_format);
    const [dataRevision, setDataRevision] = useState(data_revision_format);
    const [errors, seterrors] = useState({
        id: '',
        name: '',
        description: '',
        logo: '',
        dataRelease: '',
        dataRevision: ''
    })



    const validateForm = () => {


        let errors = {
            id: '',
            name: '',
            description: '',
            logo: '',
            dataRelease: '',
            dataRevision: ''
        };

        if (id.length > 10 || id.length < 3) errors.id = 'ID no valido';
        if (!id) errors.id = 'Este Campo es requerido';
        if (!name) errors.name = 'Este Campo es requerido';
        if (name.length > 100 || name.length < 5) errors.name = 'Nombre no valido';
        if (!description) errors.description = 'Este Campo es requerido';
        if (description.length > 200 || description.length < 10) errors.description = 'Descripción no valida';
        if (!logo) errors.logo = 'Este Campo es requerido';
        if (!dataRelease) errors.dataRelease = 'Este Campo es requerido';
        if (dataRelease < '2024-05-13') errors.dataRelease = 'Fecha liberación no valida';
        if (dataRelease < dataRevision) errors.dataRelease = 'Fecha liberación no valida'

        seterrors(errors);

        return Object.keys(errors).length === 0;

    }

    const handleSubmit = () => {
        if (validateForm()) {
            setId(params.id);
            setName(params.name);
            setDescription(params.description);
            setLogo(params.logo);
            setDataRelease(data_realease_format);
            setDataRevision(data_revision_format)
            seterrors({
                id: '',
                name: '',
                description: '',
                logo: '',
                dataRelease: '',
                dataRevision: ''
            })
        }
    };

    const restartForm = () => {
        setId(params.id);
        setName(params.name);
        setDescription(params.description);
        setLogo(params.logo);
        setDataRelease(data_realease_format);
    }


    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={globaStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Formulario de Registro </Text>


            <Text style={{ marginBottom: 5 }}>ID</Text>
            {errors.id ? (<TextInput
                style={globaStyles.warningForm}
                placeholder="Enter id"
                value={id}
                onChangeText={setId}
            />) : <TextInput
                style={globaStyles.inputForm}
                placeholder="Enter id"
                value={id}
                onChangeText={setId}
            />

            }
            {errors.id ? (
                <Text style={globaStyles.errorText}>{errors.id}</Text>
            ) : null}


            <Text style={{ marginBottom: 5 }}>Nombre</Text>
            {errors.name ? (<TextInput
                style={globaStyles.warningForm}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />) : <TextInput
                style={globaStyles.inputForm}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            }
            {errors.name ? (
                <Text style={globaStyles.errorText}>{errors.name}</Text>
            ) : null}



            <Text style={{ marginBottom: 5 }}>Descripción</Text>
            {errors.description ? (<TextInput
                style={globaStyles.warningForm}
                placeholder="Enter description"
                value={description}
                onChangeText={setDescription}
            />) : <TextInput
                style={globaStyles.inputForm}
                placeholder="Enter description"
                value={description}
                onChangeText={setDescription}
            />
            }
            {errors.description ? (
                <Text style={globaStyles.errorText}>{errors.description}</Text>
            ) : null}

            <Text style={{ marginBottom: 5 }}>Logo</Text>
            {errors.logo ? (<TextInput
                style={globaStyles.warningForm}
                placeholder="Enter logo"
                value={logo}
                onChangeText={setLogo}
            />) : <TextInput
                style={globaStyles.inputForm}
                placeholder="Enter logo"
                value={logo}
                onChangeText={setLogo}
            />
            }
            {errors.logo ? (
                <Text style={globaStyles.errorText}>{errors.logo}</Text>
            ) : null}

            <Text style={{ marginBottom: 5 }}>Fecha Liberación</Text>
            {errors.dataRelease ? (<TextInput
                style={globaStyles.warningForm}
                placeholder="Enter date Release"
                value={dataRelease}
                onChangeText={setDataRelease}
            />) : <TextInput
                style={globaStyles.inputForm}
                placeholder="Enter date Release"
                value={dataRelease}
                onChangeText={setDataRelease}
            />
            }
            {errors.dataRelease ? (
                <Text style={globaStyles.errorText}>{errors.dataRelease}</Text>
            ) : null}

            <Text style={{ marginBottom: 5 }}>Fecha Revisión</Text>
            <TextInput
                style={{ ...globaStyles.inputForm, marginBottom: 40, backgroundColor: globalColors.secondary }}
                placeholder="Enter date review"
                value={data_revision_format}
                editable={false}
            />

            <PrimaryButton
                onPress={handleSubmit}
                label="Enviar"
            />
            <SecondaryButton
                onPress={restartForm}
                label="Reiniciar"
            />

        </KeyboardAvoidingView>
    )
}
123