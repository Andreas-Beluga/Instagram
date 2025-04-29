import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, Image } from 'react-native';

import Pessoa from './Post';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      feed: [
        {usuario: 'Begula377', conta: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8wQxiaAJsvOaS6eLEEIju-jGPBI5khcHxA&s', hora: 10, imagem: 'https://estudenapuc.pucpr.br/pos-graduacao/wp-content/uploads/2024/11/Futebol-da-Formacao-a-Competicao.jpg', legenda: 'Nada muda XD', comentarios: '20', likers: 0, likeada: false,},
        {usuario: 'bobao77', conta: 'https://cdn-0001.qstv.on.epicgames.com/DeWFZjGciBtKpknWZf/image/landscape_comp.jpeg', hora: 2, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBebtkAtdaaJ25zzmLbW8LY6mSa5aLLJ5-Cg&s', legenda: 'Sempre conseguindo coisas', comentarios: '37', likers: 87, likeada: false,},
        {usuario: 'filipi7', conta: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJea7qh8jOk6IrbD84MljArhhXWY_40nFd4w&s', hora: 5, imagem: 'https://play-lh.googleusercontent.com/pscoSI9QPC62yYhvzFUoLHfo1OIzE3DF-iqBJ_1wXkje84qqVudqyHDxDGVfPptMpec=w240-h480-rw', legenda: 'essa legenda é legal', comentarios: '2', likers: 21, likeada: false,},
        {usuario: 'zébaguga', conta: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8wQxiaAJsvOaS6eLEEIju-jGPBI5khcHxA&s', hora: 1, imagem: 'https://renata.com.br/images/receitas/87/renata-imagem-receitas-macarrao-ao-molho-rustico-de-tomate-e-bacon-share.jpg', legenda: 'Macarrão', comentarios: '45', likers: 98764768, likeada: false,},
        {usuario: 'rizzler7', conta: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8wQxiaAJsvOaS6eLEEIju-jGPBI5khcHxA&s', hora: 22, imagem: 'https://estudenapuc.pucpr.br/pos-graduacao/wp-content/uploads/2024/11/Futebol-da-Formacao-a-Competicao.jpg', legenda: 'UUUUUUUUUUUi', comentarios: '24', likers: 42, likeada: false,},

      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>

    

      <View style={styles.cabecalho}>

      <Image source={{ uri: 'https://thumbs.dreamstime.com/b/print-204012277.jpg'  }}  style={styles.logo}/>

      <Image source={{ uri: 'https://www.shutterstock.com/shutterstock/videos/1103174319/thumb/1.jpg?ip=x480'  }}  style={styles.corasao}/>

<Image source={{ uri: 'https://i.pinimg.com/736x/3e/10/41/3e1041da8224b6a3a4aa63fdff34338d.jpg'  }}  style={styles.direct}/>


      </View>

      <ScrollView style={styles.storyes} horizontal={true}>

      <Image source={{ uri: 'https://cdn.thingiverse.com/assets/2c/18/d4/b8/d4/featured_preview_ab67616d00001e026267a426d1ca9c22b813835a1.jpg'  }}  style={styles.story}/>

      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJea7qh8jOk6IrbD84MljArhhXWY_40nFd4w&s'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://cdn-0001.qstv.on.epicgames.com/DeWFZjGciBtKpknWZf/image/landscape_comp.jpeg'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aREhEclD29pD8QTrdu7r2lWAnGG88AZk7Q&s'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYE6uoLNy5LJQvvGN1_WK82yOVh1niKCcQ6Q&s'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8wQxiaAJsvOaS6eLEEIju-jGPBI5khcHxA&s'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://cdn.thingiverse.com/assets/2c/18/d4/b8/d4/featured_preview_ab67616d00001e026267a426d1ca9c22b813835a1.jpg'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://cdn.thingiverse.com/assets/2c/18/d4/b8/d4/featured_preview_ab67616d00001e026267a426d1ca9c22b813835a1.jpg'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://cdn.thingiverse.com/assets/2c/18/d4/b8/d4/featured_preview_ab67616d00001e026267a426d1ca9c22b813835a1.jpg'  }}  style={styles.story}/>
      <Image source={{ uri: 'https://cdn.thingiverse.com/assets/2c/18/d4/b8/d4/featured_preview_ab67616d00001e026267a426d1ca9c22b813835a1.jpg'  }}  style={styles.story}/>
     
     
     
      </ScrollView>

      <FlatList

      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Pessoa data={item} />} 
      style={styles.fedo}
      />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo:{
    width: 150,
    height: 60,
    marginLeft: 10,
  },

  direct:{
    width: 70,
    height: 70,
    marginTop: -5,
    
  },

  corasao:{
    width: 60,
    height: 55,
    marginLeft: 140,
    marginTop: 6,
    marginRight: -15,
    
  },

   cabecalho:{
     backgroundColor: 'black',
     height: 60,
     flexDirection: 'row',
  },

  storyes:{
    backgroundColor: 'black',
    height: 800,
    flexDirection: 'row',
 },

 story: {
  width: 85,
  height: 85,
  borderRadius: 100,
  marginTop: 7,
  marginLeft: 10,
  borderColor: '#42FF2E',
  borderWidth: 4,
 },

 fedo: {

  marginTop: -130,

 },

//   conversas:{
//     backgroundColor: 'yellow',
//     height: 600,
//   },

//  menu:{
//     backgroundColor: 'blue',
//     height: 100,
//   },

//   box1:{
//     backgroundColor: 'purple',
//     height: 200,
//     width: 150,
//   },
//   box2:{
//     backgroundColor: 'pink',
//     height: 200,
//     width: 150,
//   },
//   box3:{
//     backgroundColor: 'orange',
//     height: 200,
//     width: 150,
//   },
//   box4:{
//     backgroundColor: 'lime',
//     height: 200,
//     width: 150,
//   },
});
export default App;