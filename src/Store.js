import React from 'react';
import './Store.css';
import { Button } from 'react-bootstrap';



const Store=() => {
  return (

    <body className="body">
      < div class="row">
        <div class="col-sm-12 text-center" id="title">
          <h1 class="text-center">What happens When you Purchase Winning Art Work?</h1>

          <h2> Provide clean water to those without</h2>
          <h2>Provide a future of hope to those that might not of had one </h2>
          <h2>Bring Life</h2>
          <Button id='cwbutton' href="https://www.bonfire.com/" variant="info">Purchase Here</Button>

        </div>

        <div class="col-md-12">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://hirehive.com/wp-content/uploads/2017/07/charity_water.png " className="center-block col-xl-12 rounded" alt="winner" width="660" height="545" />
                <div class="carousel-caption">
                </div>

              </div>

              <div className="carousel-item ">
                <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/10/p-1-five-ways-charity-water-uses-storytelling-to-inspire-donors.jpg" className="col-xl-12 center-block rounded" alt="winner" width="660" height="545" />
                <div class="carousel-caption">
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://thegreatdiscontent.com/assets/interviews/img/081-esther-havens/charitywater-uganda-esther-havens.jpg" className="center-block col-xl-12 rounded" alt="winner" width="660" height="545" />
                <div class="carousel-caption">


                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>



          <footer class="bg-warning">
            <p ></p>
          </footer>

        </div>

      </div>
    </body>

  );

}

export default Store






