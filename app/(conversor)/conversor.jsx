import styled from 'styled-components/native'; 
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';

export default function Conversor() {
    const [centimetros, setCentimetros] = useState(""); // Separa centímetros del resultado
    const [resultado, setResultado] = useState(null);

    const convertircmMetros = () => {
        if (!centimetros || isNaN(centimetros)) { // Verifica que sea un número válido
            Alert.alert('Error', 'Por favor, ingrese un valor numérico');
            return;
        }
        const metros = parseFloat(centimetros) / 100;
        setResultado(metros);
    };

    return (
      <Container>
          <Input 
              placeholder="Centímetros (cm)" 
              keyboardType="numeric"
              value={centimetros} 
              onChangeText={text => setCentimetros(text)} // Ahora almacena el valor correctamente
          />
          <Calculo onPress={convertircmMetros}>
            <CalculoTexto>Calcular</CalculoTexto>
          </Calculo>
          <Texto>Resultado: {resultado !== null ? `${resultado} m` : "-"}</Texto>
          <BackButton onPress={() => router.back()}>
                <BackText>Volver</BackText>
          </BackButton>
      </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f7e7ce;

`;  

const Input = styled.TextInput`
width: 80%;
padding: 10px;
margin-bottom: 20px;
background-color: #fff;
border-radius: 10px;
border: 1px solid #ccc;
text-align: center;
border: none;
font-size: 20px;

`

const Calculo = styled.TouchableOpacity`
background-color: #ffffff;
padding: 15px 30px;
border-radius: 8px;
margin-top: 20px;
`

const CalculoTexto = styled.Text`
font-weight: bold;
color: #614e3e;
font-size: 20px;

`;

const Texto = styled.Text`
font-weight: bold;
color: #614e3e;
font-size: 30px;
margin-bottom: 20px;
margin-top: 20px;
`;  

const BackButton = styled.TouchableOpacity`
background-color: #decf93;
padding: 15px 30px;
border-radius: 8px;
`;

const BackText = styled.Text`
font-weight: bold;
color: #614e3e;
font-size: 17px;
`;