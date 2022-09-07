import '../../App.css';
import '../../components/base/base.css';
import '../../components/rd-navbar/rd-navbar.css';
import {Helmet} from "react-helmet";

function NAVBAR() {
  return (
    <div className="pages">
         <Helmet>
    <script type="text/babel" src=
       "../../components/base/script.js" 
       
   />
     <script type="text/babel" src=
       "../../components/base/core.min.js" 
     />
     <script type="text/babel" src=
       "../../components/rd-navbar/rd-navbar.min" 
     />
    </Helmet>
      <header className="section rd-navbar-wrap">
      <nav className="rd-navbar" data-rd-navbar='{"responsive":{"1200":{"stickUpOffset":"50px"}}}'>
          <div className="rd-navbar-outer rd-navbar-outer-info">
            {/* <svg className="rd-navbar-outer-pattern" width="1920" height="70" viewbox="0 0 1920 70" fill="none">
              <circle cx="685" cy="23" r="6" fill="#e5e5e5"></circle>
              <circle cx="1645" cy="16" r="6" fill="#e5e5e5"></circle>
              <circle cx="1029" cy="50" r="19" stroke="#e5e5e5" stroke-width="2"></circle>
              <circle cx="279" r="19" stroke="#e5e5e5" stroke-width="2"></circle>
            </svg> */}
            <div className="navbar-container">
              <div className="navbar-cell">
                <div className="navbar-social">
                  <div className="social social-lg">
                    {/* <a  href="https://www.facebook.com/NikkisPetworld" className="icon icon-sm icon-link icon-gray-400 social-icon mdi-facebook" ></a>
                    <a  href="https://twitter.com/nikkis_pet"  className="icon icon-sm icon-link icon-gray-400 social-icon mdi-twitter" ></a>
                    <a  href="https://www.instagram.com/nikkispetworld/" className="icon icon-sm icon-link icon-gray-400 social-icon mdi-instagram"></a> */}
                </div>
                </div>
                <button className="navbar-button mdi-share-variant" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","className":"navbar-social-active","isolate":"[data-multi-switch]"}'></button>
              </div>
              <div className="navbar-cell">
                <div className="navbar-info">
                  <div className="navbar-info-item"><span className="icon icon-primary navbar-info-icon mdi-phone"></span><a className="navbar-info-link" href="tel:#">+91 98482 04672 </a></div>
                  <div className="navbar-info-item"><span className="icon icon-primary navbar-info-icon mdi-phone"></span><a className="navbar-info-link" href="tel:#">+91 9381385345  </a></div>
                  <div className="navbar-info-item"><span className="icon icon-primary navbar-info-icon mdi-email-outline"></span><a className="navbar-info-link" href="mailto:#">nikkispetworld@gmail.com</a></div>
                </div>
                <button className="navbar-button mdi-dots-vertical" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","className":"navbar-info-active","isolate":"[data-multi-switch]"}'></button>
              </div>
            </div>
          </div>
          <div className="rd-navbar-outer">
            <div className="navbar-container">
              <div className="navbar-cell">
                <div className="navbar-panel">
                  <button className="navbar-switch mdi-menu" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","isolate":"[data-multi-switch]"}'></button>
                 
                  <div className="logo navbar-logo hidden-mobile"><a className="logo-link" href="index.html">
                    <img  className="logo-image-default" src="images/logo1.jpeg" alt="LabraDog" width="100" height="10"/>
                    <img  className="logo-image-inverse" src="images/logo-01-inverse-150x39.png" alt="LabraDog" width="150" height="39"/>
                    <h4  className="brandName">Nikki's Pet World SPA & Clinic</h4></a>
                   
                  </div>
                </div>
              </div>
              <div className="navbar-cell navbar-spacer"></div>
              <div className="navbar-cell navbar-sidebar">
                <ul className="navbar-navigation rd-navbar-nav">
                  <li className="navbar-navigation-root-item active"><a className="navbar-navigation-root-link" href="index.html">Home</a>
                  </li>
                  <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="PetGroomingService.html">SPA & Grooming</a></li>
                   <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="PetClinic.html">Clinic</a> </li>
                  <li className="navbar-navigation-root-item "><a className="navbar-navigation-root-link" href="vetonline.html">Vet Online</a></li>
                  <li className="navbar-navigation-root-item "><a className="navbar-navigation-root-link" href="blog-post.html">Blog</a></li>
                  <li className="navbar-navigation-root-item"><a className="navbar-navigation-root-link" href="contact.html">Contacts</a>  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>


    </header>
    </div>
  );
}

export default NAVBAR;
