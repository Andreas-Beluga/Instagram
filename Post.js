import React, { Component } from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity,Animated,} from 'react-native';

class Pessoa extends Component {


    
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
      scaleAnim: new Animated.Value(0), 
    };




    this.carregaIcone = this.carregaIcone.bind(this);
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.animateHeart = this.animateHeart.bind(this);
  }





  carregaIcone(likeada) {
    return likeada
      ? require('./assets/likeada.png')
      : require('./assets/like.png');
  }




  like() {
    let feed = this.state.feed;

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1,
        },
      });
    }
  }




  mostraLikes(likers) {
    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.laike}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }




  animateHeart() {
    this.state.scaleAnim.setValue(0); 
    Animated.spring(this.state.scaleAnim, {
      toValue: 1, 
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.scaleAnim, {
        toValue: 0, 
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }




  render() {



    return (



      <View style={styles.areaPessoa}>
       
        <View style={styles.cima}>
          <Image
            source={{ uri: this.props.data.conta }}
            style={styles.conta}
          />
          <Text style={styles.user}>{this.props.data.usuario}</Text>
          <Text style={styles.time}>{this.props.data.hora}h</Text>
        </View>



       
        <TouchableOpacity
          onPress={() => {
            const now = Date.now();
            const DOUBLE_PRESS_DELAY = 300; 
            if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
              this.like(); 
              this.animateHeart(); 
            }
            this.lastTap = now;
          }}
          activeOpacity={1}
>




          <Image
            source={{ uri: this.props.data.imagem }}
            style={styles.imagem}
          />
    <Animated.Image
            source={require('./assets/heart.png')}
            style={[
              styles.animatedHeart,
              { transform: [{ scale: this.state.scaleAnim }] },
            ]}
          />
    </TouchableOpacity>

        



        <TouchableOpacity onPress={this.like}>
          <Image
            source={this.carregaIcone(this.state.feed.likeada)}
            style={styles.like}
          />




        </TouchableOpacity>

        {this.mostraLikes(this.state.feed.likers)}


       
        <Text style={styles.lege}>{this.props.data.legenda}</Text>

        <Text style={styles.comment}>{this.props.data.comentarios} Comentários</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({



  areaPessoa: {
    height: 500,
    backgroundColor: 'black',
  },
  user: {
    color: 'white',
    
    fontWeight: 'bold',
    fontSize: 18,


    marginLeft: 10,
    marginTop: 6,
  },


  conta: {
    width: 40,



    height: 40,
    borderRadius: 900,
  },



  time: {
    marginLeft: 10,
    marginTop: 8,
    color: 'grey',
  },


  imagem: {
    height: 300,
  },



  lege: {
    padding: 5,
    marginTop: 0,




    color: 'white',
    fontSize: 18,
    marginLeft: 20,
  },



  laike: {
    padding: 5,
    marginTop: -20,
    color: 'white',
    fontSize: 18,


    marginLeft: 20,
  },




  comment: {
    padding: 5,
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
  },


  cima: {
    flexDirection: 'row',
    padding: 10,
  },




  like: {
    height: 60,
    width: 170,
  },





  animatedHeart: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 110,


    height: 100,
    marginLeft: -50,

    marginTop: -50,
    
    opacity: 0.8,
  },
});

export default Pessoa;
