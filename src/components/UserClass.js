import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo:{
                id: "0",
                login: "Default",
            }
        }
        console.log(this.props.name + "Child Constructor");

    }

    async componentDidMount(){

        // this.timer = setInterval(() => {
        //     console.log("namaste react operation!");
        // }, 1000);

        console.log(this.props.name +"Child componentDidMount");

        const data = await fetch("https://api.github.com/users/I-am-sonal");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    };

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        //clearInterval(this.timer);
        console.log("componentWillUnmount");
    }
    render() {

        // const {name, location} = this.props;
        const {count, count2} = this.state;
        const {id, login, avatar_url} = this.state.userInfo;

        console.log(this.props.name +"Child Render");
        // debugger;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                     this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,

                    })
                }
                   
                }>Count Increase</button>
                <h4>Count: {count2}</h4>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>ID: {this.state.userInfo.id}</h2>
                <h3>Login: {this.state.userInfo.login}</h3>
            </div>
        );
    }
}

export default UserClass;