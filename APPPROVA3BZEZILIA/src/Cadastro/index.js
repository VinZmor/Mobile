import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Switch } from "react-native";



export default function App() {
  const [produto, setProduto] = useState("");
  const [nome, setNome] = useState("");
  const [restricao, setRestricao] = useState(false);



  const enviarDados = () => {
    if (nome === "" || produto === "") {
      alert("Preencha todos os dados corretamente");
      return;
    }
    alert(
      `Compra bem sucedida! \n\nNome: ${nome}\nProduto: ${produto}\nRestrição de Idade: ${restricao ? "Ativo" : "Inativo"}`
    );
  };



  return (
    <View style={styles.container}>
    
        <View style={styles.areaFormulario}>
          <Text style={styles.textoNome}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do seu produto aqui!"
            onChangeText={setNome}
          />
        </View>

        <View style={styles.areaFormulario}>
          <Text style={styles.textoNome}>Tipo de Produto:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o tipo de produto aqui!"
            onChangeText={setProduto} // Atualizar para 'setObservacao' se for necessário
          />
        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Restrição de Idade:</Text>
          <Switch
            trackColor={{ false: "#ccc", true: "#70aa87" }}
            thumbColor="#db5643"
            value={restricao}
            onValueChange={setRestricao}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={enviarDados}>  onPress={() => alert('Você enviou pro carrinho')}
          <Text style={styles.botaoTexto}>Completar Cadastro de Produto</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07137333",
    alignItems: "center",
    justifyContent: "center",
  },
  imagemfundo: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "contain",
    borderRadius: 25,
    marginBottom: 20,
  },
  areaFormulario: {
    marginBottom: 15,
    width: "80%",
  },
  textoNome: {
    fontSize: 18, // Aumentado para maior legibilidade em dispositivos pequenos
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
  },
  inputTelefone: {
    height: 45,
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  telefoneText: {
    marginTop: 5,
    fontSize: 16,
    color: "#000",
  },
  areaCor: {
    width: "80%",
    marginBottom: 15,
  },
  pickerCor: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
  },
  limiteArea: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  limiteTexto: {
    color: "#FF0000",
    fontSize: 18, // Maior para destacar o limite
    fontWeight: "bold",
    paddingLeft: 10,
  },
  areaSlider: {
    width: "80%",
    marginBottom: 15,
  },
  areaEstudante: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  botao: {
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 30,
    width: "80%",
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
