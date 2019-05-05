import React, {Component} from 'react';
import {View, Image, TextInput, Text, Button,TouchableOpacity, StyleSheet} from 'react-native';

export default class app extends Component {
    componentWillMount(): void {
    }

    componentDidMount(): void {
    }

    componentWillUnmount(): void {
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '1',
            password: '2',
        };
    }

    //Image source加载本地文件，
    //let logourl = './xxx/yyy'
    //<Image style={styles.logo} source=require(logourl)/>  //错误做法
    //<Image style={styles.logo} source=require('./xxx/yyy')/> //正确做法
    /* Image 加载网络文件 uri:http地址，可变量*/
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.naviBar}>
                    <Text style={styles.naviBarText}>首页</Text>
                </View>
                <View style={styles.view2}>
                    <Image style={styles.logo}/>
                </View>
                <TextInput style={styles.username}
                           placeholder={'请输入用户名'}
                           value={this.state.username} onChangeText={(text) => {
                    this.setState({username: text})
                }}/>
                <TextInput style={styles.username}
                           placeholder={'请输入密码'}
                           value={this.state.password}
                           onChangeText={(text) => {
                               this.setState({password: text})
                           }}
                />

                <TouchableOpacity onPress={()=>{
                    this.clickBtnView()
                }}>
                    <Text style={styles.button}>登录</Text>
                </TouchableOpacity>


            </View>
        );
    }

    clickBtnView()
    {
       console.log('enter login')
    }

}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'black'
    },
    logo: {
        width: 50,
        height: 50,
        backgroundColor: '#ff5789'
    },
    username: {
        fontSize: 16,
        color: '#fff',
        marginTop: 20,
        backgroundColor:'red',
        padding:20

    },
    button: {
        borderColor:'yellow',
        borderWidth:3,
        backgroundColor:'red',
        marginLeft:20,
        marginRight:20,
        fontSize: 16,
        color:'blue',
        padding:20,
        textAlign: 'center'
    },
    view2:{
        marginTop:64,
        backgroundColor:'blue',
        alignItems:'center'
    },
    naviBar:{
        height:64,
        backgroundColor:'white',
        justifyContent:'center'
    },
    naviBarText:{
        marginTop:20,
        textAlign: 'center',
        color:'red',
        fontSize:18,
        backgroundColor:'yellow',
    }
});

