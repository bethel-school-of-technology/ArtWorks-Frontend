// import React, { Component } from 'react';
// import axios from 'axios';

// class Gallery extends Component {
//   state={
//     submissions: []
//   }
//   componentWillMount () {
//     axios.get('http://localhost:3001/users/gallery').then(res => {
//       console.log(res.data.artworks);
//       this.setState({ submissions: res.data.artworks });
//     });
//   }
//   render () {
//     return (
//       <div>
//         {this.state.submissions.map((art, index) => (
//           <div key={index}>
//             <p>{art.Name}</p>
//             <img src={art.Photo} />
//           </div>
//         ))}
//         {/* this.state.submission.map  */}
//       </div>
//     );
//   }
// }
// export default Gallery;

import React, { Component } from 'react';
import styled from 'styled-components';
import Instagram from '../assets/instagram.png';
import Email from '../assets/email.png';
import Facebook from '../assets/facebook.png';
import Portfolio from '../assets/portfolio.png';
// import Art from './Art';
import axios from 'axios';




class Gallery extends Component {
  state={
    count: 0,
    visible: true,
    loading: true,
    artists: []

  }

  // async componentDidMount () {
  //   const url="https://api.randomuser.me/?results=9";
  //   const response=await fetch(url);
  //   const data=await response.json();
  //   this.setState({ artists: data.results, loading: false });
  // }

  componentWillMount () {
    axios.get('http://localhost:3001/users/gallery').then(res => {
      console.log(res.data.artworks);
      this.setState({ artists: res.data.artworks });
    });
  }

  incrementMe=() => {
    let newCount=this.state.count+1
    this.setState({
      count: newCount
    })
    console.log("it works")
  }
  render () {

    if (this.state.loading) {
      return (
        <div className="notLoading">loading...</div>
      )
    }

    // const artistGallery=[];

    // this.state.artists.forEach((person) => {
    //   artistGallery.push(
    //     // <div className="artInfo">
    //     //   {this.state.loading||!this.state.person? (<div>loading...</div>):(
    //     <div key={person.login.uuid}>
    //       <div>{person.name.first}</div>
    //       <img src={person.picture.large} alt="" />
    //       {/* </div> */}
    //       {/* )}
    //      <br /> */}
    //       <ul className="info">
    //         <li><img src={Email} class="logo" />Email: {person.gender}</li>
    //         <li><h4>Social: </h4>
    //           <a href="https://www.instagram.com" ><img src={Instagram} title="instaLink" class="logo" alt="" /></a>
    //           <a href="https://www.facebook.com" ><img src={Facebook} title="fbLink" class="logo" alt="" /></a>
    //           <a href="https://www.linkedin.com" ><img src={Portfolio} title="portfolioLink" class="logo" alt="" /></a>
    //         </li>

    //       </ul>
    //       <br />
    //       <button className="voteButton" onClick={this.incrementMe}>Vote: {this.state.count} </button>
    //       <br />
    //     </div>
    //   );
    // });

    return (
      <GalleryWrapper>
        <body class="gallery">
          <div className="wrapper">
            <header className="gHeader">
              Gallery
            </header>
          </div>

          <section class="art-grid" >
            <div class="grid-container">
              {this.state.artists.map((art, index) => (
                <div class="each-grid" key={index}>
                  <div class="artist-name" ><h4>{art.Name}</h4></div>
                  <div class="art-photo" > <img src={art.Photo} /></div>
                  <div class="artist-email" ><img src={Email} class="email-logo" alt="email" />{art.Email}</div>
                  <div>
                    <a href="https://www.instagram.com" ><img src={Instagram} title="instaLink" class="logo" alt="" /></a>
                    <a href="https://www.facebook.com" ><img src={Facebook} title="fbLink" class="logo" alt="" /></a>
                    <a href="https://www.linkedin.com" ><img src={Portfolio} title="portfolioLink" class="logo" alt="" /></a>
                  </div>
                  <div>
                    <button className="voteButton" onClick={this.incrementMe}>Vote: {this.state.count} </button>
                  </div>
                </div>

              ))}
            </div>
          </section>
        </body>
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

