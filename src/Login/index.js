import React from 'react';
import  ReactDOM  from 'react-dom';


class Login extends React.Component{
    render(){
        return(<div>
             <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
  <link href="assets/css/style.css" rel="stylesheet" />
  <title>Educational Bootstrap 5 Login Page Website Tampalte</title>
  <section className="form-02-main">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="_lk_de">
            <div className="form-03-main">
              <div className="logo">
                <img src="assets/images/user.png" />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control _ge_de_ol" placeholder="Enter Email" required aria-required="true" />
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control _ge_de_ol" placeholder="Enter Password" required aria-required="true" />
              </div>
              <div className="checkbox form-group">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id />
                  <label className="form-check-label" htmlFor>
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot Password</a>
              </div>
              <div className="form-group">
                <div className="_btn_04">
                  <a href="#">Login</a>
                </div>
              </div>
              <div className="form-group nm_lk"><p>Or Login With</p></div>
              <div className="form-group pt-0">
                <div className="_social_04">
                  <ol>
                    <li><i className="fa fa-facebook" /></li>
                    <li><i className="fa fa-twitter" /></li>
                    <li><i className="fa fa-google-plus" /></li>
                    <li><i className="fa fa-instagram" /></li>
                    <li><i className="fa fa-linkedin" /></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>)
    }
}

export default Login;