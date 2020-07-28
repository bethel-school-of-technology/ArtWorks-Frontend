import React, { Component } from 'react';
import styled from 'styled-components';
import Instagram from '../assets/instagram.png';
import Email from '../assets/email.png';
import Facebook from '../assets/facebook.png';
import Portfolio from '../assets/portfolio.png';
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
    axios.post('http://localhost:3001/users/gallery'+ this.state.artists[index]._id,{count:newCount[index]})
    .then(res => {
      console.log(res);
    }
      )

  }

  render () {
    return (
      <GalleryWrapper>
          <div className="wrapper">
            <header className="gHeader">
              Gallery
                  </header>
          </div>
          <section className="art-grid" >
            <div className="grid-container">
              {this.state.artists.map((art, index) => (
                <div className="each-grid" key={index}>
                  <div className="artist-name" ><h4>{art.Name}</h4></div>
                  <div className="art-photo" > <img src={art.Photo} alt='' /></div>
                  <div>
                    <button className="voteButton" onClick={() => this.incrementMe(index)}>Vote: {this.state.count[index]} </button>
                  </div>
                  <div className="artist-email" ><img src={Email} className="email-logo" alt="email" />{art.Email}</div>
                  <div>
                    <a href="https://www.instagram.com" ><img src={Instagram} title="instaLink" className="logo" alt="" /></a>
                    <a href="https://www.facebook.com" ><img src={Facebook} title="fbLink" className="logo" alt="" /></a>
                    <a href="https://www.linkedin.com" ><img src={Portfolio} title="portfolioLink" className="logo" alt="" /></a>
                  </div>
                </div>
              ))}
            </div>
          </section>
      </GalleryWrapper>
    )
  }
}
export default Gallery;


const GalleryWrapper=styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  margin-bottom: 10px;
  grid-auto-rows: minmax(25px, auto);
  background-size: auto;
  background-color: rgba(250, 204, 204, 0.89);

  .gallery {
    background: url("jumboimg.jpg");
  }

.gHeader {
  font-family: URW Chancery L, cursive;
  font-size: 2em;
  text-align: center;
  margin: 1em;
}

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;

  }

  .contentWrapper{
    text-align: center;
    padding: 5px;
    border: 3px solid black;
  }

  .voteButton{
    padding: 4px;
  }

  .logo, .email-logo {
    text-align: center;
    margin: 5px;
    width: 30px;
    height: 30px;
  }

  .logo:hover {
    transform: scale(0.9);
  }

  .artInfo {
    padding: 1em;
  }

  .each-grid {
    border: 3px solid black;
    background-color: white;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    text-align: center;
    grid-gap: 20px;
    padding: 20px;
    margin: 1em;
  }

  .img {
      width: 100%;
      height: auto;
  }

  .art-grid {
      position: relative;
  }

  .art-photo {
      padding: 1em;
    line-height: 0;
    overflow: hidden;
  }

  .artist-name {
      text-align: center
  }

`;

