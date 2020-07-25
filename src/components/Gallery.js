import React, { Component } from 'react';
import styled from 'styled-components';
import Instagram from '../assets/instagram.png';
import Email from '../assets/email.png';
import Facebook from '../assets/facebook.png';
import Portfolio from '../assets/portfolio.png';
import Header from '../assets/galleryHeader.png';

import axios from 'axios';

class Gallery extends Component {
  state={
    count: [],
    visible: true,
    loading: true,
    artists: []
  }
  componentWillMount () {
    axios.get('http://localhost:3001/users/gallery').then(res => {
      console.log(res.data.artworks);
      this.setState({ artists: res.data.artworks });
      
      for (let i = 0; i < this.state.artists.length; i++) {
        let temp= this.state.count;
        temp.push(this.state.artists[i].Votes);
        this.setState({count:temp});
      }
      console.log(this.state.count);
      
    });
  }

  incrementMe=(index) => {
    let newCount=this.state.count
    for (let i = 0; i < newCount.length; i++) {
     if (i === index){
       newCount[i]++
     }
    }
    this.setState({
      count: newCount
    })
    axios.post('http://localhost:3001/users/gallery/'+ this.state.artists[index]._id,{count:newCount[index]})
    .then(res => {
      console.log(res);
    })}

  render () {
    return (
      <body className="gallery">
        <div className="wrapper">
          <header className="gHeader">
            <img src={Header} className="gallery-img" />
          </header>
        </div>

        <section class="art-grid" >
          <div class="grid-container">
            {this.state.artists.map((art, index) => (
              <div className="each-grid" key={index}>
                <div className="artist-name" ><h4>{art.Name}</h4></div>
                <div  > <img src={art.Photo} className="art-photo" /></div>
                   <div>
                    <button className="voteButton" onClick={() => this.incrementMe(index)}>Vote: {this.state.count[index]} </button>
                  </div>
                <div className="artist-email" ><img src={Email} class="email-logo" alt="email" />{art.Email}</div>
                <div>
                  <a href="https://www.instagram.com" ><img src={Instagram} title="instaLink" className="logo" alt="" /></a>
                  <a href="https://www.facebook.com" ><img src={Facebook} title="fbLink" className="logo" alt="" /></a>
                  <a href={art.Portfolio} ><img src={Portfolio} title="portfolioLink" className="logo" alt="" /></a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </body>
    )
  }
}
export default Gallery;

