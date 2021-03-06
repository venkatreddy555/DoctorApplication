import React from 'react';
import ReactDOM from 'react-dom';


class Service extends React.Component{
    render(){
        return(
            <div>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="description" content="Orbitor,business,company,agency,modern,bootstrap4,tech,software" />
  <meta name="author" content="themefisher.com" />
  <title>Novena- Health &amp; Care Medical template</title>
  {/* Favicon */}
  <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
  {/* bootstrap.min css */}
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css" />
  {/* Icon Font Css */}
  <link rel="stylesheet" href="plugins/icofont/icofont.min.css" />
  {/* Slick Slider  CSS */}
  <link rel="stylesheet" href="plugins/slick-carousel/slick/slick.css" />
  <link rel="stylesheet" href="plugins/slick-carousel/slick/slick-theme.css" />
  {/* Main Stylesheet */}
  <link rel="stylesheet" href="css/style.css" />
  <header>
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ul className="top-bar-info list-inline-item pl-0 mb-0">
              <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2" />support@novena.com</a></li>
              <li className="list-inline-item"><i className="icofont-location-pin mr-2" />Address Ta-134/A, New York, USA </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
              <a href="tel:+23-345-67890">
                <span>Call Now : </span>
                <span className="h4">823-4565-13456</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navigation" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="images/logo.png" alt className="img-fluid" />
        </a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icofont-navigation-menu" />
        </button>
        <div className="collapse navbar-collapse" id="navbarmain">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="/About">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/Services">Services</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/Department" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Department <i className="icofont-thin-down" /></a>
              <ul className="dropdown-menu" aria-labelledby="dropdown02">
                <li><a className="dropdown-item" href="/Department">Departments</a></li>
                <li><a className="dropdown-item" href="/Department/DepartmentSingle">Department Single</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/Doctor" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down" /></a>
              <ul className="dropdown-menu" aria-labelledby="dropdown03">
                <li><a className="dropdown-item" href="/Doctor">Doctors</a></li>
                <li><a className="dropdown-item" href="/Doctor/DoctorSingle">Doctor Single</a></li>
                <li><a className="dropdown-item" href="/Appoinment">Appoinment</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/BlogSlider" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down" /></a>
              <ul className="dropdown-menu" aria-labelledby="dropdown05">
                <li><a className="dropdown-item" href="/BlogSlider">Blog with Sidebar</a></li>
                <li><a className="dropdown-item" href="/BlogSider/BlogSingle">Blog Single</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="/Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section className="page-title bg-1">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="block text-center">
            <span className="text-white">Our services</span>
            <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
            {/* <ul class="list-inline breadcumb-nav">
      <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
      <li class="list-inline-item"><span class="text-white">/</span></li>
      <li class="list-inline-item"><a href="#" class="text-white-50">Our services</a></li>
    </ul> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section service-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5">
            <img src="images/service/service-1.jpg" alt className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Child care</h4>
              <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5">
            <img src="images/service/service-2.jpg" alt className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2  title-color">Personal Care</h4>
              <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5">
            <img src="images/service/service-3.jpg" alt className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">CT scan</h4>
              <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src="images/service/service-4.jpg" alt className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Joint replacement</h4>
              <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src="images/service/service-6.jpg" alt className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Examination &amp; Diagnosis</h4>
              <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="service-block mb-5 mb-lg-0">
            <img src="images/service/service-8.jpg" alt className="img-fluid" />
            <div className="content">
              <h4 className="mt-4 mb-2 title-color">Alzheimer's disease</h4>
              <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section cta-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="cta-content">
            <div className="divider mb-4" />
            <h2 className="mb-5 text-lg">We are pleased to offer you the <span className="title-color">chance to have the healthy</span></h2>
            <a href="/Appoinment" className="btn btn-main-2 btn-round-full">Get appoinment<i className="icofont-simple-right  ml-2" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* footer Start */}
  <footer className="footer section gray-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mr-auto col-sm-6">
          <div className="widget mb-5 mb-lg-0">
            <div className="logo mb-4">
              <img src="images/logo.png" alt className="img-fluid" />
            </div>
            <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
            <ul className="list-inline footer-socials mt-4">
              <li className="list-inline-item"><a href="https://www.facebook.com/themefisher"><i className="icofont-facebook" /></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/themefisher"><i className="icofont-twitter" /></a></li>
              <li className="list-inline-item"><a href="https://www.pinterest.com/themefisher/"><i className="icofont-linkedin" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="widget mb-5 mb-lg-0">
            <h4 className="text-capitalize mb-3">Department</h4>
            <div className="divider mb-4" />
            <ul className="list-unstyled footer-menu lh-35">
              <li><a href="#">Surgery </a></li>
              <li><a href="#">Wome's Health</a></li>
              <li><a href="#">Radiology</a></li>
              <li><a href="#">Cardioc</a></li>
              <li><a href="#">Medicine</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="widget mb-5 mb-lg-0">
            <h4 className="text-capitalize mb-3">Support</h4>
            <div className="divider mb-4" />
            <ul className="list-unstyled footer-menu lh-35">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Company Support </a></li>
              <li><a href="#">FAQuestions</a></li>
              <li><a href="#">Company Licence</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="widget widget-contact mb-5 mb-lg-0">
            <h4 className="text-capitalize mb-3">Get in Touch</h4>
            <div className="divider mb-4" />
            <div className="footer-contact-block mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-email mr-3" />
                <span className="h6 mb-0">Support Available for 24/7</span>
              </div>
              <h4 className="mt-2"><a href="tel:+23-345-67890">Support@email.com</a></h4>
            </div>
            <div className="footer-contact-block">
              <div className="icon d-flex align-items-center">
                <i className="icofont-support mr-3" />
                <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
              </div>
              <h4 className="mt-2"><a href="tel:+23-345-67890">+23-456-6588</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm py-4 mt-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="copyright">
              ?? Copyright Reserved to <span className="text-color">Novena</span> by <a href="https://themefisher.com/" target="_blank">Themefisher</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
              <form action="#" className="subscribe">
                <input type="text" className="form-control" placeholder="Your Email address" />
                <a href="#" className="btn btn-main-2 btn-round-full">Subscribe</a>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <a className="backtop js-scroll-trigger" href="#top">
              <i className="icofont-long-arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="copyright text-lg-center">
        Distributed by <a href="https://themewagon.com/" target="_blank">Themewagon</a>
      </div>
    </div>
  </footer>
  {/* 
    Essential Scripts
    =====================================*/}
  {/* Main jQuery */}
  {/* Bootstrap 4.3.2 */}
  {/* Slick Slider */}
  {/* Counterup */}
  {/* Google Map */}
</div>

        );
    }
}

export default Service;