import React from "react";

 class Profile extends React.Component {
constructor() {
    super();
    this.state = {
        name: 'Santosh',
        Email: 'dhisalesantosh@gmail.com',
        date: new Date()
    }
}
render() {
  const myfun=()=>  {
     this.setState({
        name: "dhisale",
            })
        }

    return(
        <div>
            <h1>Email: {this.state.Email}</h1>
            <h1>{this.state.name}</h1>
            <button onClick={myfun}>Update</button>
            <h3>Click This Update button Change the name</h3>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    )
}
}

export default Profile;