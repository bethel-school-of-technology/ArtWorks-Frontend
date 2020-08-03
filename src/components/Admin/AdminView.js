import React, { Component } from 'react';
import axios from 'axios';
import './AdminView.css'
import { withRouter } from 'react-router';

class AdminView extends Component {
    state={
        submissions: []
    }


    componentWillMount () {
        axios.get('http://localhost:3001/users/admin-gallery').then(res => {
            console.log(res.data);
            this.setState({ submissions: res.data.artworks });
        });
    };

    acceptArt=(index) => {
        axios.post('http://localhost:3001/users/admin-accept', this.state.submissions[index])
            .then(res => {
                console.log(res);
                this.componentWillMount()
            })
    };
    rejectArt=(index) => {
        axios.post('http://localhost:3001/users/admin-reject', this.state.submissions[index])
            .then(res => {
                console.log(res);
                this.componentWillMount()
            })
    };


    render () {
        return (

            <body className="admin-view">
                <div className="admin-header-wrapper">
                    <header className="admin-gallery-header">
                        Admin Gallery
                </header>
                </div>

                <article>
                    <div className="admin-gallery">
                        {this.state.submissions.map((art, index) => (
                            <div className="each-admin-grid" key={index}>
                                <p className="admin-artist-name">{art.Name}</p>
                                <img src={art.Photo} alt="" />
                                <br />
                                <button onClick={() => this.acceptArt(index)}>Accept</button>
                                <button onClick={() => this.rejectArt(index)}>Reject</button>
                            </div>
                        ))}
                    </div>
                </article>
            </body>
        );
    }
}

export default withRouter(AdminView);