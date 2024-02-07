import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }
    componentDidMount(){
        //console.log("Parent componentDidMount");
    }
    render() {
        //console.log("Parent Render");

        return (
            <div>
                <h1>About Page Class</h1>
                <h3>LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </h3>
                <User name={"Sonal Bajage functional"}/>
                <UserClass name={"1st child"} location={"Navi Mumbai Class"}/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <User name={"Sonal Bajage functional"}/>
//             <UserClass name={"Sonal Bajage class"} location={"Navi Mumbai Class"}/>
//         </div>
//     )
// }

export default About;