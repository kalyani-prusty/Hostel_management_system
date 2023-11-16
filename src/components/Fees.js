import React from 'react'
// import { Link } from 'react-router-dom';
import '../Fees.css'
import Footer from '../Layout/Footer';

export default function Fees() {
  return (
    <>
      <section>
        <div className='fee-1'>
           <img src='https://images.static-collegedunia.com/public/college_data/images/appImage/1542879050261677301729742599720178441413093826490758n.jpg' alt='' />
           <h4>Home/ International/ International Admissions/Accommodation Fee</h4>
           <h3>Accommodation Fee</h3>
           <h1>HOSTEL SMITH</h1>
            <p>OUR ACCOMMODATIONS!!!!</p>
        </div>
        <div className='fee-2'>
          {/* <h4>Home/ International/ International Admissions/Accommodation Fee</h4> 
          <h4>Accommodation Fee</h4> */}
          <p className='f-1'>Accommodation Fee for Session 2022-23</p>
          {/* <p className='f-2'>Hostel Category   	Annual Fee</p>
          <p className='f-3'>Triple sharing non AC with food as per hostel menu with non veg	        USD 2000/-</p> */}
          <tr>
            <th>Hostel Category</th>
            <td> Triple sharing non AC with food as per hostel menu with non veg </td>
          </tr>
          <tr>
            <th>Annual Fee</th>
            <td> USD 2000/-</td>
          </tr>
          <tr>
            <th>Note 1:</th>
            <td> A security deposit of 200 USD (Refundable) will be charged from the students.</td>
          </tr>
          <tr>
            <th>Note 2:</th>
            <td> All students who are staying in the University Hostel, within the Campus will have to take food in the mess facility (Veg. or Non-Veg.) provided by the University.
          <br/> No refund application will be entertained once a student occupies a room in the hostel.</td>
          </tr>
          {/* <p className='f-4'>Note 1: A security deposit of 200 USD (Refundable) will be charged from the students.</p>
          <p className='f-5'> All students who are staying in the University Hostel, within the Campus will have to take food in the mess facility (Veg. or Non-Veg.) provided by the University.
          <br/> No refund application will be entertained once a student occupies a room in the hostel.</p>          */}
           </div>
      </section>
      <Footer />
    </>
  )
}
