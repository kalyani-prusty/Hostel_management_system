import React from 'react'
import Footer from '../Layout/Footer'
import '../Facilities.css';
import { Link } from 'react-router-dom'

export default function Facilities() {
  return (
    // <div className='feature-container'>
    //     <div className='featured-cource '>
    //       <div class="card" style={{ width: '18rem' }}>
    //         <img src=" https://cutm.ac.in/wp-content/uploads/How-to-Create-an-Effective-Resume-for-a-Campus-Interview-1024x536.jpg" alt="..." />
    //         <div class="card-body">
    //           <h5 class="card-title">How to Create an Effective Resume for a Campus Interview</h5>
    //           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //           <a href="#" class="btn btn-primary">Known more<i class="fas fa-angle-double-right" aria-hidden="true"></i></a>
    //         </div>
    //       </div>
    //       <div class="card" style={{ width: '18rem' }}>
    //         <img src=" https://cutm.ac.in/wp-content/uploads/Which-Jobs-Can-You-Take-Up-After-Studying-Microbiology-1024x536.jpeg" class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <h5 class="card-title">Which Jobs Can You Take Up After Studying Microbiology?</h5>
    //           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //           <a href="#" class="btn btn-primary">Known more<i class="fas fa-angle-double-right" aria-hidden="true"></i></a>
    //         </div>
    //       </div>
    //       <div class="card" style={{ width: '18rem' }}>
    //         <img src=" https://cutm.ac.in/wp-content/uploads/What-are-Some-Top-Career-Options-in-Agriculture-1024x536.jpeg" class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <h5 class="card-title">What are Some Top Career Options in Agriculture?</h5>
    //           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //           <a href="#" class="btn btn-primary">Known more<i class="fas fa-angle-double-right" aria-hidden="true"></i></a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <>
      <section>
        <div className='fa-1'>
              <img src='sectionheader.jpg' alt='' />
              <h1>HOSTEL SMITH</h1>
              <h4>All Our Facilities</h4>
              <h3>Campus Hostel</h3>
              <h2>Our Students</h2>
        </div>
        <div className='fa-2'>
              <img src='https://college.gift.edu.in/website/images/GIFT-engineering-college-boys-hostel.jpg' alt='' />
              <img src='https://college.gift.edu.in/website/images/GIFT-engineering-college-girls-hostel.jpg' alt='' />
        </div>
        <div className='fa-3'>
          <p>The College is endowed with 3 separate hostels for boys and girls or endorse in campus. The hostels are like a home away from home for the students. The hostels are comfortable & secured, more than 800 students staying in the campus and enjoy the beautiful facilities at the campus. Spacious rooms, 24-hour power back up, Wi-Fi connectivity, are some of the basic features of hostels at campus.<b></b></p>
        </div>
        <div className='fa-4'>
          <ul>
            <p>Facilities:</p>
            <li>Dispensary, Medical officer on duty, 24 hours vehicle available for emergency.</li>
            <li>Round the clock security services, equipped with CCTV surveillance</li>
            <li>Food: A combination of veg & non-veg cuisine is served. North Indian & South Indian food is served on alternate days.</li>
            <li>The hostel rooms are Wi-Fi connected.</li>
            <li>Evening Library facility for hostellers.</li>
            <li>Laundry & dry-cleaning facility.</li>
            <li>Ragging free and strict discipline.</li>
            <li>Prayer and recreation halls.</li>
            <li>Visitors halls and guest rooms.</li>
            <li>Common room with TV & music.</li>
            <li>General Stores - Stationeries, Photo Copier, cosmetics, snacks & Spa.</li>
            <li>Playground and Indoor Games.</li>
          </ul>
        </div>
        <div className='fa-5'>
          <h3>!!!! Learn The World @SMITH UNIVERSITY !!!!</h3>
          {/* <h5>We have campuses in six districts of Odisha</h5> */}
          <img src='hostel2.webp' alt='' />
          <img src='playground1.jpeg' alt='' />
          <img src='https://i0.hippopx.com/photos/721/484/962/eat-canteen-court-nutrition-preview.jpg' alt='' />
          <img src='https://tse2.mm.bing.net/th?id=OIP.Vn07pp81mA9-8eJ58ad4IwAAAA&pid=Api&P=0&h=180' alt='' />
          <img src='https://www.onlineresultportal.com/wp-content/uploads/2020/03/centurion-university-of-technology-and-management-cutm-bhubaneswar.jpg' alt='' />
          <img src='https://tse2.mm.bing.net/th?id=OIP.0Pbvz9-hHssH8t9tAwVuPwHaFW&pid=Api&P=0&h=180' alt='' />
          <img  src='https://tse3.mm.bing.net/th?id=OIP.GoCfV_TO8oLXiRAQhyzpjQHaEK&pid=Api&P=0&h=180' alt=''/>
          <img src='https://tse2.mm.bing.net/th?id=OIP.3-OrfCAIGhL72jz8_agfHgHaE7&pid=Api&P=0&h=180' alt=''/>
          {/* <Link to='./https://cutm.ac.in/' alt=''></Link>Paralakhemundi Campus<br/>
          <small>
            Village alluri Nagar, P.O.-R Sitapur, Via-Uppalada Paralakhemundi, Gjapati,
            Odisha, India-761211
          </small> */}
        </div>
      </section>
      <Footer/>
    </>
  )
}
