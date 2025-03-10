import styled from 'styled-components/native'; 
import { router } from 'expo-router';
export default function Index() {
    return (
      <Container>
        <Icon source="https://i.ibb.co/fG1WP7Ps/cinta-metrica.png"/>
          <Texto>Conversor</Texto>
            <SubTitle>(cm) a (m)</SubTitle>
            <StartButton onPress={() => 
              router.push("/conversor")}> 
              <TButton>Iniciar</TButton> 
                </StartButton>
      </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f7e7ce;
`;  

const Texto = styled.Text`
font-weight: bold;
color: #614e3e;
margin-bottom: 20px;
font-size: 40px;
`;  

const SubTitle = styled.Text`
font-weight: bold;
color: #614e3e;
margin-bottom: 40px;
font-size: 30px;
`;  
const StartButton = styled.TouchableOpacity`
background-color: #decf93;
padding: 15px 30px;
border-radius: 8px;
`;  

const TButton = styled.Text`
font-weight: bold;
color: #614e3e;
font-size: 25px;
`;  

const Icon = styled.Image`
width: 150px;
height: 150px;
margin-bottom: 20px;
`;