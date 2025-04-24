import Rect, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import Slider from '@react-native-community/slider';

import { Switch } from 'react-native';




export default function App() {

  const [nome, setNome] = useState('');

  const [telefone, setTelefone] = useState('');
  
  const [sexo, setSexo] = useState(0);
  
  const [limite, setLimite] = useState(100);
  
  const [estudante, setEstudante] = useState(false);
  
  const sexos = [
  
    { sexoNome: 'Masculino', valor: 1 },
  
    { sexoNome: 'Feminino', valor: 2 }
  
  ];
  
  
  function enviarDados() {
  
    if (nome == '' || telefone == '0') {
  
      alert('Preencha todos os dados corretamente')
  
      return
  
    }
  
    alert(
  
      'Conta aberta com sucesso \n\n' +
      'Nome: ' + nome + '\n' +
      'Telefone: ' + telefone + '\n' +
      'Sexo: ' + sexos[sexo].sexoNome + '\n' +
      'Limite Conta: ' + limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + (estudante ? 'Ativo' : 'Inativo')
  
    )
  
  }
  
  
  let sexoItems = sexos.map((v, k) => {
  
    return <Picker.Item
  
      key={k}
  
      value={k}
  
      label={v.sexoNome}>
  
    </Picker.Item>
  })
  
  
  //Para colocar alinhamento do botão Switch sobre a linha, que usamos na WEB
  
  const isWeb = typeof navigator !== 'underfined' && navigator.userAgent;

  return (

    <View

      style={styles.container}>

      <Text

        style={styles.bancoLogo}> 

        Banco de Etecanismo

        </Text>

      <View

        style={styles.areaFormulario}>

        <Text

          style={styles.textoNome}>

          Nome:

        </Text>


        <TextInput

          style={styles.Input}

          placeholder="Digite seu nome aqui"

          onChangeText={nome => setNome(nome)}>

        </TextInput>


        <Text

          style={styles.textoNome}>Telefone: </Text>


        <TextInput

          style={{ borderBottomWidth: 1, padding: 10, fontSize: 16 }}

          placeholder="(99) 99999-9999"

          value={telefone}

          keyboardType='numeric'

          maxLength={15}

          onChangeText={telefone => setTelefone(telefone)}></TextInput>


        <Text>

          Telefone: {telefone}

        </Text>


        <View
          style={styles.areaSexo}>

          <Text

            stye={styles.textoNome}>
              
               Sexo:

          </Text>


          <Picker

            style={styles.pickerSexo}

            selectedValue={sexo}

            onValueChenge={(itemValue, itemIndex) => setSexo(itemValue)}>

          </Picker>


        </View>


        <View style={styles.limiteArea}>

          <Text style={styles.textoNome}> Seu limite: </Text>


          <Text 

          style={styles.limiteTexto}>

             R${limite.toFixed(0)}
             
             </Text>


        </View>


        <View 
        
        style={styles.areaEstudante}>

          <Text

            style={styles.textoNome}>

            Estudante

          </Text>

          <Switch

            style={isWeb ? { transform: [{ translateY: -2 }] } : {}}

            trackColor={{ false: '#ccc', true: '#4ca' }}

            thumbClor='#d3a'

            value={estudante}

            onValueCahnge={estudante => setEstudante(estudante)}>

          </Switch>


          <TouchableOpacity

            style={styles.botton}

            onPress={enviarDados}>

            <Text

              style={styles.bottonTexto}>

              Abrir Conta

            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',
  },

});
