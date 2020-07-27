import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './Signup.css'



class Signup extends Component {
	state={
		name: '',
		email: '',
		portfolio: '',
		photo: ''
	}

	handleChange=({ target: { value, name } }) => this.setState({ [name]: value })

	formSubmission=() => {
		axios.post('http://localhost:3001/users/signup', this.state)
			.then(res => {
				console.log(res);
			})
	}


	render () {
		return (

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


		);
	}
}

export default Signup;