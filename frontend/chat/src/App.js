import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";
// import {withStyles} from "@material-ui/core/styles";
// import { Container } from '@material-ui/core/';
import { Component } from 'react';
import Form from './components/form/Form';
import Room from './components/chatroom/Room'
class App extends Component {
	state = {
		isLoggedIn: false,
		messages:[''],
		value : '',
		name : '',
		room: 'hub',
	}
	client = new W3CWebSocket('ws://localhost:8000/ws/chat/hub/');

	handleLoginOnClick = (rname ,uname ) =>{
		// console.log(this.state.name + "--before")
		console.log(rname)
		this.setState({
		  room : rname,
		  name: uname,
		  isLoggedIn: true,	
		  client:W3CWebSocket('ws://localhost:8000/ws/chat/'+rname+'/'),
		})
		// console.log(this.state.name + "--after")
	}
	addMessage = (data) =>{
		const newMessage = data.message;
		const userName = data.username
		this.setState({
			messages:[...this.state.messages,{
				msg:newMessage,
				sender:userName,
			}]
		});
		console.log("this is message");
		console.log(this.state.messages);
	}

	handleChatOnClick = (message) =>{
		console.log(message);
		this.client.send(JSON.stringify({
			'message' :message,
			'username': this.state.name,
		}));
		document.querySelector("#input-message").value ="";
	};


	componentDidMount(){
		this.client.onopen = ()=>{
			console.log("cool");
		}
		this.client.onmessage = (message) =>
		{
			const data = JSON.parse(message.data);
			console.log("recieved");
			if(data){
				this.addMessage(data);
			}
		}
		this.client.onclose = function (e) {
            console.error('Chat socket Closed unexpectedly');
        };
	}

	render(){
		return (
			<header className="App-header">
			{this.state.isLoggedIn? 
				<Room room_name = {this.state.room} messages ={this.state.messages} 
				handleChatOnClick = {this.handleChatOnClick} />:
				<Form rname = {this.state.room }
				uname = {this.state.name} 
				handleLoginOnClick = {this.handleLoginOnClick}/>
			}
			</header>
			
		);
	}
}

export default App;
