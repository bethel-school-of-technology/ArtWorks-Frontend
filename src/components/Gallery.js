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
    // count: 0,
    // loading: true,
    artists: []
  }
  componentWillMount () {
    axios.get('http://localhost:3001/users/gallery').then(res => {
      console.log(res.data.artworks);
      this.setState({ artists: res.data.artworks });
    });
  }

  // incrementMe=() => {
  //   let newCount=this.state.count+1
  //   this.setState({
  //     count: newCount
  //   })
  //   console.log("it works")
  // }

  render () {

    // if (this.state.loading) {
    //   return (
    //     <div className="notLoading">loading...</div>
    //   )
    // }


    return (

      // <GalleryWrapper>
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
                <div className="artist-email" ><img src={Email} class="email-logo" alt="email" />{art.Email}</div>
                <div>
                  <a href="https://www.instagram.com" ><img src={Instagram} title="instaLink" class="logo" alt="" /></a>
                  <a href="https://www.facebook.com" ><img src={Facebook} title="fbLink" class="logo" alt="" /></a>
                  <a href={art.Portfolio} ><img src={Portfolio} title="portfolioLink" class="logo" alt="" /></a>
                </div>
                {/* <div>
                    <button className="voteButton" onClick={this.incrementMe}>Vote: {this.state.count} </button>
                  </div> */}
              </div>

            ))}
          </div>
        </section>
      </body>
      // {/* </GalleryWrapper> */}
    )
  }
}

export default Gallery;

