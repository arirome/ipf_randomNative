import { StyleSheet} from 'react-native';

const style= StyleSheet.create({
    container: {
      flex: 1,
    justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#fafafa',
    },

  

    lineas:{
           padding: 1,
           borderBottomColor: '#000000',
           borderBottomWidth: 2,
    },
    lineasagre:{
      
        padding: 5,
        borderBottomColor: '#6495ED',
        borderBottomWidth: 1,
        width: 500,
        height:10
 },

    textapp:{
        marginVertical:10,
        fontSize:20, 
      },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 40,
        borderRadius:10,
       
      },

      

      button:{
        backgroundColor:'#6495ED',
        alignSelf:'center',
        borderRadius:10,
        paddingVertical:15,
        width:'10%',
        marginHorizontal:20,
        marginTop: 40,
       
        
        },
        textbutton:{
            color:'#f1f1f1',
            textAlign:'center'
    
          },
  
  });

  

  export default style