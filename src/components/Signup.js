import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Styles = styled.div`
@import url(https://fonts.googleapis.com/css?family=Cookie|Montserrat:300,700,400);
*{
	box-sizing: border-box;
	font-size: 1em;
	margin: 0;
	padding: 0;
}
body {
	background: url('https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fafdhelaziz%2Ffiles%2F2018%2F12%2Fclean-water.jpg') center no-repeat;
	background-size: cover;
	color: #333;
	font-size: 18px;
	font-family: 'Raleway', sans-serif;
}
.container{
	border-radius: 0.5em;
	box-shadow: 0 0 1em 0 rgba(51,51,51,0.25);
	display: block;
	max-width: 750px;
	overflow: hidden;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	padding: 2em;
	position: absolute;
		top: 50%;
		left: 50%;
		z-index: 1;
	width: 98%;
}
.container:before{
	background: url('https://iili.io/d2fHCB.jpg') center no-repeat;
	background-size: fit;
	content: '';
	-webkit-filter: blur(2px);
	filter: blur(1px);
	height: 120vh;
	position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	width: 100vw;
}
.container:after{
	background: rgba(255,255,255,0.6);
	content: '';
	display: block;
	height: 100%;
	position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	width: 100%;
}
form button.submit{
	background: rgba(255,255,255,0.25);
	border: 1px solid #333;
	line-height: 1em;
	padding: 0.5em 0.5em;
	-webkit-transition: all 0.25s;
	transition: all 0.25s;
}
form button:hover,
form button:focus,
form button:active,
form button.loading{
	background: #333;
	color: #fff;
	outline: none;
}

form label{
	border-bottom: 1px solid #333;
	display: block;
	font-size: 1.25em;
	margin-bottom: 0.5em;
	-webkit-transition: all 0.25s;
	transition: all 0.25s;
}
form label.col-one-half{
	float: left;
	width: 50%;
}
form label.col-one-half:nth-of-type(even){
	border-left: 1px solid #333;
	padding-left: 0.25em;
}
form label input{
	background: none;
	border: none;
	line-height: 1em;
	font-weight: 300;
	padding: 0.125em 0.25em;
	width: 100%;
}
form label input:focus{
	outline: none;
}

form label span.label-text{
	display: block;
	font-size: 0.5em;
	font-weight: bold;
	padding-left: 0.5em;
	text-transform: uppercase;
	-webkit-transition: all 0.25s;
	transition: all 0.25s;
} 

h1{
	font-size: 3em;
	margin: 0 0 0.5em 0;
	text-align: center;
}
h1 img{
	height: auto;
	margin: 0 auto;
	max-width: 240px;
	width: 100%;
}
html{
	font-size: 14px;
	height: 100%;
}

.text-center{
	text-align: center;
} 

`;

class Signup extends Component {
    state = {
        name: '',
        email: '',
        portfolio: '',
        photo: ''
    }

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    formSubmission = () => {
        axios.post('http://localhost:3001/users/signup', this.state)
            .then(res => {
                console.log(res);
            })
    }


    render() {
        return (
            <Styles>
                <div className="App">
                    <div className="main">
                        <div className="container">
                            <header>
                                <h1>
                                    <a href="https://freeimage.host/i/d9EZDN"><img src="https://iili.io/d9EZDN.png" alt="d9EZDN.png" /></a>
                                </h1>
                            </header>
                            <form className="registration-form">
                                <label className="col-one-half">
                                    <span className="label-text">Name</span>
                                    <input type="text" name="name" onChange={this.handleChange} />
                                </label>
                                <label className="col-one-half">
                                    <span className="label-text">Email</span>
                                    <input type="text" name="email" onChange={this.handleChange} />
                                </label>
                                <label>
                                    <span className="label-text">Portfolio Link (Optional)</span>
                                    <input type="text" name="portfolio" onChange={this.handleChange} />
                                </label>
                                <label className="artwork">
                                    <span className="label-text">Artwork Link</span>
                                    <input type="text" name="photo" onChange={this.handleChange} />
                                </label>
                                <div className="text-center">
                                    <button className="submit" id="submitDetails" name="submitDetails" onClick={this.formSubmission}>Submit My Work</button>
                                </div>
                            </form>
                          
                        </div>
                    </div>
                </div>
            </Styles>

        );
    }
}

export default Signup;