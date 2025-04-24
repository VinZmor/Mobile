import React, { useState, useRef } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get("window");

const data = [
  {
    title:"Dados RPG",
    text: "Quer personalisar seus dados? De uma olhada em: DadosRPG",
    valor: 24,
    img: 'https://s.zst.com.br/cms-assets/2021/06/q-workshop-conjunto-de-dados-ornamentados-de-call-of-cthulhu.jpg'
},

{
    title:"DLC Dead By Daylight",
    text: "Quer jogar inspirado na nova temporada de Stragem Thigs? Veja essa nova DLC de DBD",
    valor: 39,
    img: 'https://psxbrasil.com.br/wp-content/uploads/2019/08/strangerthings-0deadbydaylight.jpg'
},

{
    title:"Livro de Regras Pathfinder 2e",
    text: "Quer mostrar o quão RPGista você é? Então compre nosso livro de regras",
    valor: 120,
    img: 'https://m.media-amazon.com/images/I/71GnKJirQrL._AC_UF894,1000_QL80_.jpg'
},
];



const{width:larguraTela, height:alturaTela} = Dimensions.get('window');

export default function CarrosselProdutos() {
  

  const [background, setBackground] = useState(data[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  

  return (
    <View style={styles.container}>

     <View style={{...StyleSheet.absoluteFill, backgroundColor:'#000' }}>
      <ImageBackground source={{uri: background}} style={styles.imgBg} blurRadius={8} >
      
     

       <ScrollView>
                  <View style={styles.moreInfo}>
                    <View style={{marginTop: 5}}>
      
                      <View style={styles.headerTitleInfo}>
                      <Text style={styles.movieTitle}>{data[activeIndex].title}</Text>
                      <Text style={styles.priceTitle}>R$ {data[activeIndex].valor},00</Text>
                      </View>
                      
                      <Text style={styles.movieDesc}>{data[activeIndex].text}</Text>
                    </View>
                    <TouchableOpacity 
                    style={{ marginRight: 15, marginTop: 10 }} 
                    onPress={() => alert('Você enviou pro carrinho')}
                    >
                      <Icon 
                      name="queue" 
                      color="#131313" 
                      size={30} 
                      />
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
       </ImageBackground>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  image: {
     width: "100%", height: 350, borderRadius: 10
     },
  title: { 
    fontSize: 18, fontWeight: "bold", marginTop: 10
  },
  imgBg:{
    flex:1,
    width: null,
    height: null,
    opacity: 0.9,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },


  slideView:{
    width: '100%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center'
  },


  moreInfo:{
    backgroundColor: '#FFF',
    width: larguraTela,
    height: alturaTela,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  },

  headerTitleInfo:{
      flexDirection:'row',
  },

  priceTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#055a02',
    marginBottom: 5,
  },
  
});
