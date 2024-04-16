import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"rohan"}>

    {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
<section id="home" className="slider-area fix p-relative">
<div className="slider-active">
  <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)', height: 660, backgroundSize: 'cover', backgroundPosition: 'left'}}>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-12 col-md-12">
          <div className="slider-content s-slider-content text-center">
            <h1>Welcome To Grab The Funds</h1>
            <div className="headp">
              <p>GrabTheFunds are the platform where founders and investors meet. Our mission is to enable early-stage startups to thrive by connecting them with the right investors and mentors and get evaluated by investors before moving to the next round. Join our community and take your buisness to the next level</p>
            </div>
            <div className="homebuttons">
              <div className="slider-btn two-btn mt-30 mb-105">
                
                <a href="/" className="btn ss-btn active mr-15">
                  <h6>Explore Startup <i class="fa-solid fa-arrow-right"></i></h6>
                
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</section>



<section className="about">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="abutimg">
      <img src="./images/homeabout.jpg" />

        </div>
      </div>
      <div className="col-md-6">
        <div className="abutright">
          <h2>
            About Us
          </h2>
          <p>
          While you wade into this new kind of
              investment journey, we ensure to empower
              you with all the necessary information and
              tools While you wade into this new kind of
              investment journey, we ensure to empower
              you with all the necessary information and
              tools While you wade into this new kind of
              investment journey, we ensure to empower
              you with all the necessary information and
              tools While you wade into this new kind of
              investment journey, we ensure to empower
              you with all the necessary information and
              tools
          </p>
          <div className="foundersays">
            <p>investment journey, we ensure to empower
              you with all the necessary information and
              tools While you wade into this new kind of
              investment journey, we ensure to empower
              you with all the necessary information and
              tools investment journey, we ensure to empower
              you with all the necessary information and
              tools While you wade into this new kind of
              investment journey, we ensure to empower
              you with all the necessary information and
              tools</p>
              <div className="foundername">
              <i class="fa-solid fa-minus min"></i>
              <h6 className="founderright">
               says GTF CEO
              </h6>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="sectors">
  <div className="container">
    <h2 className="h2center">Investment Sectors</h2>
    <div className="row">
      <div className="col-md-4">
<div className="sectorfull">
  <div className="sectorimg">
    <img src="./images/farming.png" className="secimg" />
  </div>
  <div className="sectorinfo">
    <h4>AgriTech</h4>
    <h6>Solution for challenges in food chain</h6>
  </div>
</div>
      </div>
      <div className="col-md-4">
      <div className="sectorfull">
  <div className="sectorimg">
    <img src="./images/patient.png" className="secimg" />
  </div>
  <div className="sectorinfo">
    <h4>HealthTech</h4>
    <h6>Innovations in health care sector.</h6>
  </div>
</div>
        </div>
        <div className="col-md-4">
        <div className="sectorfull">
  <div className="sectorimg">
    <img src="./images/revenue.png" className="secimg" />
  </div>
  <div className="sectorinfo">
    <h4>Alternative Investments</h4>
    <h6>Newer models for market investment</h6>
  </div>
</div>
        </div>
        <div className="col-md-4">
        <div className="sectorfull">
  <div className="sectorimg">
    <img src="./images/maintenance.png" className="secimg" />
  </div>
  <div className="sectorinfo">
    <h4>Electronic vechiles</h4>
    <h6>Reimaging better ways of commuting</h6>
  </div>
</div>
        </div>
        <div className="col-md-4">
        <div className="sectorfull">
  <div className="sectorimg">
    <img src="./images/it.png" className="secimg" />
  </div>
  <div className="sectorinfo">
    <h4>Information Technology</h4>
    <h6>Making the best of technology upgrades</h6>
  </div>
</div>
        </div>
        <div className="col-md-4">
        <div className="sectorfull">
  <div className="sectorimg">
    <img src="./images/renewable-energy.png" className="secimg" />
  </div>
  <div className="sectorinfo">
    <h4>CleanTech</h4>
    <h6>Improving the use and delivery of metal</h6>
  </div>
</div>
        </div>
    </div>
  </div>
</section>





<section>
  <div className="secondsecfi">
    <div className="container">
      <div className="row founde align-items-center">
        <div className="col-md-6">
          <div className="secondsecinside2">
            <h2>
              Get Funding <br />And Support
            </h2>
            <p className="paraleft">
              Be part of the most evolved startup funding
              experience of our times with unrestricted
              funding support in various forms
            </p>
            <a href="/founders" className="homebtn">Founders <i className="fa-solid fa-arrow-right" /></a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="secondsecinside2">
            <h2>
              Explore startups <br />to invest
            </h2>
            <p>
              While you wade into this new kind of
              investment journey, we ensure to empower
              you with all the necessary information and
              tools
            </p>
            <a href="/investors" className="homebtn">Investors <i className="fa-solid fa-arrow-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>








<section className="counter">
  <div className="container">
    <div className="row">
      <div className="col-md-3 countercen">
        <div className="countimg">
        <img src="./images/closure.png" />
        </div>
        <div className="countinfo">
          <h4>6+</h4>
          <h6>Deals</h6>
        </div>

      </div>
      <div className="col-md-3 countercen">
      <div className="countimg">
        <img src="./images/founder.png" />
        </div>
        <div className="countinfo">
          <h4>6+</h4>
          <h6>Founders</h6>
        </div>
        </div>
        <div className="col-md-3 countercen">
        <div className="countimg">
        <img src="./images/funding.png" />
        </div>
        <div className="countinfo">
          <h4>6Cr+</h4>
          <h6>Fundings raised</h6>
        </div>
        </div>
        <div className="col-md-3 countercen">
        <div className="countimg">
        <img src="./images/crowdfunding.png" />
        </div>
        <div className="countinfo">
          <h4>6+</h4>
          <h6>Investors</h6>
        </div>
        </div>
    </div>
  </div>
</section>


  </Layout>
  );
};

export default HomePage;






// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { useAuth } from "../context/auth";

// const HomePage = () => {
//   const [auth, setAuth] = useAuth();

//   // Destructure _id and name directly from auth object
//   const { _id, name } = auth;

//   console.log(_id);
//   console.log(name._id);

//   return (
//     <Layout title={"Best offers "}>
//       <h1>HomePage</h1>
//       {/* Displaying auth object as a string */}
//       {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
//     </Layout>
//   );
// };

// export default HomePage;

