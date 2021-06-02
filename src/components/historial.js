import React, { Component } from "react";

import Powerslap from "./video/unica.mp4";

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-access-token", localStorage.getItem('user-token'))
        var requestOptions = {
            headers: myHeaders,
            method: 'GET',
            redirect: 'follow'
        };

        fetch(" https://spotify-pedro.herokuapp.com/api/historial", requestOptions)
            .then(response => response.json())
            .then(result => { this.setState({ data: result.notifications }); console.log(result.notifications) })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="list">
            <video 
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "50%",
                  top: "50%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1"
               }}
            >   
              <source src={Powerslap} type="video/mp4" />            
            </video>
                <div>
                    {this.state.data?.map(((item) => (
                        <div key={item._id} >
                            <h3>{item.title}</h3>
                            <p>{item.url}</p>
                        </div>
                    )))}
                </div>
            </div>
        );
    }
}

export default History;