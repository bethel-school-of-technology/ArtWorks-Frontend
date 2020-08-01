import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {withRouter} from 'react-router';
import './Admin.css'

class Admin extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    login = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/users/login', this.state)
            .then(res => {
                console.log(res.data);
                if (res.data.status === 200 ) {
                    localStorage.setItem('token', res.data.jwt)
                    this.props.history.push('/admin-gallery')
                }
            })
    }


    render() {
        return (
                <div className="App">
                    <div className="main">
                        <div className="container">
                            <header>
                                <h1>
                                    <a href="https://freeimage.host/"><img src="https://iili.io/dTQJ71.png" alt="dTQJ71.png" border="0"  /></a>
                                </h1>
                            </header>
                            <form className="registration-form" onSubmit={this.login}> 
                                <label>
                                    <span className="label-text">Username</span>
                                    <input type="text" name="username" onChange={this.handleChange} />
                                </label>
                                <label className="artwork">
                                    <span className="label-text">Password</span>
                                    <input type="password" name="password" onChange={this.handleChange} />
                                </label>
                                <div className="text-center">
                                    <button className="submit" id="submitDetails" name="submitDetails" type="submit">Login</button>
                                </div>
                            </form>
                          
                        </div>
                    </div>
                </div>

        );
    }
}

export default withRouter(Admin);