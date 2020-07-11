import React from 'react'


   const Store = () => {
      return(
    <div className="store container-fluid"> 
     <h1 className="  text-info col-md-12 text-center  ">Purchase Winning Art Work and provide clean water to those in need</h1>

     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/10/p-1-five-ways-charity-water-uses-storytelling-to-inspire-donors.jpg " className="image-responsive" alt="..."/>
      <div class="carousel-caption">
        <h1>Purchase</h1>
        <p>Provide clean water!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="" className="image-responsive" alt="..."/>
      <div class="carousel-caption">
        <h1>Purchase</h1>
        <p>Provide clean water!</p>
        </div>
    </div>
    <div className="carousel-item">
      <img src="" className="image-responsive" alt="..."/>
      <div class="carousel-caption">
        <h1>Purchase</h1>
        <p>Provide clean water!</p>
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
</div>
    </div> 
    
  
      );
    }

    export default Store 
    





