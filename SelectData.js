import React from "react";
import {View,Text,Image,StyleSheet,DataView,Alert,TouchableOpacity} from "react-native"
import {Calendar, CalendarList, getDisabledDates} from 'react-native-calendars';
import { Component } from "react/cjs/react.production.min";
import moment from 'moment'
import { todayString } from "react-native-calendars/src/expandableCalendar/commons";

export default class SelectData extends Component{
    state = {
     date: ""
      }

    
    render(){
        const today = new Date()
    
        return(
            <View  style={{backgroundColor:'#000',flex:1}}>
                <View style={{backgroundColor:"#000",flex:4,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{...styles.h1}}>Trainer Sarah Herwitz</Text>
                    <Image source={require('../image/6.jpg')} style={{width:100,height:100,borderRadius:50}}></Image>
                    <Text style={{...styles.h3}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ez</Text>
                </View>
                <View style={{flex:6}}>
                    <Calendar
                    
                    minDate={moment(today).format("YYYY-MM-DD")}
                    markedDates={this.state.customMarkedDates}
                    onDayPress={day =>{
                    }}
                     dayComponent={({date, state,marking}) => {
                        
                         return (
                           <TouchableOpacity onPress={{}=()=>{
                               //checed = true
                                //this.date = date
                                this.setState({date:date})
                                var customMarkedDates = {};
                                var arrayOfDates =  [date.dateString];
                                arrayOfDates.map((day) => {
                                  customMarkedDates[day] = {
                                    customStyles: {
                                      container: {
                                        backgroundColor: "#aaa",
                                      },
                                      text: {
                                        color: "#fff",
                                        fontWeight: "bold",
                                      },
                                    },
                                  };
                                });
                                
                                this.setState({customMarkedDates: customMarkedDates})
                              
                             }
                               
                               } style={{backgroundColor: marking ? "#15f" : "#333",width:35,height:35,borderRadius:17.5,justifyContent:'center',alignItems:"center"}}>
                             <Text style={{TextAlign: 'center', color: state === 'disabled' ? '#555': '#fff'}}>{date.day}</Text>
                           </TouchableOpacity>
                         );
                       }}

                     
                       
     
                    style={{backgroundColor:"#000"}}  theme={{
                  backgroundColor: '#000',
                   calendarBackground: '#000',
                   arrowColor: '#fff', monthTextColor: '#fff',}}></Calendar>
                </View>
            </View> 
         )
    }
    
    
    
}

var styles = StyleSheet.create({
    shadow:{
      shadowColor: '#000',
      
      shadowOffset:{
        width:0,
        height: -50,
      },
      shadowOpacity:1,
      shadowRadius:15,
      elevation:30
  },
  h3:{
    top:15,
    width: '80%',
    textAlign:'center',
    color:'#bbb',
    fontSize:15,
    fontFamily:'KohinoorDevanagari-Regular'
    
  },
  h2:{
    color:'#aaa',
    fontSize:18,
    fontWeight:'bold',
    fontFamily:'KohinoorDevanagari-Regular'
    
  },
  h1:{
    marginBottom: 40,
    color:'#fff',
    fontSize:20,
    fontFamily:'KohinoorDevanagari-Regular'
  },
  btnLogin:{
   width:85,
   height:35,
  }
});