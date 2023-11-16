import React from 'react';
import Footer from '../Layout/Footer';
import  Navbar from '../Layout/Navbar'
import '../Contact.css';
export default function () {
  return (
    <>
    <section className='cont-1'>
      <div className='ct-1'>
      <img src='https://images.static-collegedunia.com/public/college_data/images/campusimage/1434434652banner-4.jpg' alt='' />
              <h1>HOSTEL SMITH</h1>
              <h3>Campus Hostel/Smith University/Admission Open</h3>
              <h2>FIND US(Admission Open)</h2>      </div>
    </section> 
    {/* <section className='cont-2'>
      <div className='contact-box'>
        <div className='contact-left'>
          <h3>Sent Your Request</h3>
          <form>
            <div className='input-row'>
              <div className='input-group'>
                <label>Name</label>
                <input type='text' placeholder='Enter Your Name'/>
              </div>
              <div className='input-group'>
                <label>Phone</label>
                <input type='text' placeholder='Enter Your Phone No.'/>
              </div>
              <div className='input-row'>
              <div className='input-group'>
                <label>Email</label>
                <input type='email' placeholder='Enter Your Email Id '/>
              </div>
              <div className='input-group'>
                <label>Course</label>
                <input type='text' placeholder='Course You Looking For'/>
              </div>
              </div>
            </div>
          </form>
        </div>
        <div className='contact-right'>
          <h3>Reach Us</h3>
        </div>
      </div>
    </section> */}
{/* <section className="mb-4">
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
    </div>
</section> */}
    <section>
    <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">MESSAGE</button>
              {/* <button className="app-form-button">SEND</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
    <section className="location">
    <p>Our Campus location</p>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949264.7506273858!2d84.45765454687502!3d21.661311900000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1efd8486898717%3A0x84401c00123682ff!2sDharanidhar%20University!5e0!3m2!1sen!2sin!4v1696657835526!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.209842466198!2d85.75383577409784!3d20.29157958117961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907faaaaaaaab%3A0x8f5ad978379140db!2sPEDODISHA%202021!5e0!3m2!1sen!2sin!4v1696658946475!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48375.554078757435!2d-74.01963771484371!3d40.72963562571967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a20bf91c597%3A0x9c07845a3f67e75f!2sNew%20York%20University!5e0!3m2!1sen!2sin!4v1696659065388!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
    </section>
    <Footer />
    </>
  )
}