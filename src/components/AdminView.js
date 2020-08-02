import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './AdminView.css'

class AdminView extends Component {
    state = {
        submissions: []
    }
    

     componentWillMount() {
        axios.get('http://localhost:3001/users/admin-gallery').then(res => {
            console.log(res.data);
            this.setState({submissions: res.data.artworks});
        });
    };

    acceptArt = (index) => {
        axios.post('http://localhost:3001/users/admin-accept', this.state.submissions[index])
            .then(res => {
                console.log(res);
            })
    };
     rejectArt = (index) => {
        axios.post('http://localhost:3001/users/admin-reject', this.state.submissions[index])
            .then(res => {
                console.log(res);
            })
    };
   

    render() {
        return (
                <div>
                    {this.state.submissions.map((art, index) => (
                        <div className="gallery" key={index}>
                            <p>{art.Name}</p>
                            <img src={art.Photo} /> 
                            <button  onClick={this.acceptArt(index)}>Accept</button>
                            <button  onClick={this.rejectArt(index)}>Reject</button> 
                        </div>
                    ))}
                </div>
                
        );
    }
}

export default AdminView;