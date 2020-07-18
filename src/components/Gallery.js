import React, {Component} from 'react';
import styled from 'styled-components';
import Instagram from '../assets/instagram.png';


class Gallery extends Component {
  state={
    count: 0,
    loading: true,
    person: null

  }

  async componentDidMount() {
    const url="https://api.randomuser.me/";
    const response=await fetch(url);
    const data=await response.json();
    this.setState({person: data.results[0], loading: false})
  }
  incrementMe=() => {
    let newCount=this.state.count+1
    this.setState({
      count: newCount
    })
    console.log("it works")
  }
  render() {

    return (
      <GalleryWrapper>
        <div className="wrapper">
          <header className="gHeader">
            <h1>Gallery</h1>
          </header>
          <div className="contentWrapper">
            <div className="grid">
              <body className="artGrid">
                <div>
                  {this.state.loading||!this.state.person? (<div>loading...</div>):(
                    <div>
                      <div>{this.state.person.name.first}</div>
                      <img src={this.state.person.picture.large} alt="" />
                    </div>
                  )}
                  <br />
                  <button className="voteButton" onClick={this.incrementMe}>Vote: {this.state.count} </button>
                  <ul className="info">
                    <li><a href=""><img src="email.png" />Email: </a></li>
                    <li><h4>Social: </h4>
                      <a href="https://www.instagram.com" ><img src={Instagram} title="instaLink" class="logo" alt="" /></a>
                      <a href="https://www.facebook.com" ><img src="facebook.png" title="fbLink" class="logo" alt="" /></a>
                      <a href="https://www.linkedin.com" ><img src="linkedin.png" title="linedinLink" class="logo" alt="" /></a>
                    </li>

                  </ul>
                </div>
              </body>
            </div>
          </div>
        </div>
      </GalleryWrapper>
    )
  }
}

export default Gallery;

// export const Gallery=() => (
//     <GridWrapper>
//         <h2>Gallery</h2>
//     </GridWrapper>
// )

const GalleryWrapper=styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  margin-bottom: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background-size: auto;


  .grid{
    text-align: center;
    padding: 5px;
    border: 3px solid black;
  }

  .voteButton{
    padding: 4px;
  }

  .artGrid{
    margin: 2em;
    text-align: center;
  }

  .info{
    text-align: left;
    list-style: none;

  }

  .logo{
    width: 30px;
    height: 30px;
  }
`;

