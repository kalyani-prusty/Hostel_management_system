import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
export default function Registration() {
  return (
    <>
       {/* <Header/> */}
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form >
            <div className="mb-3">
              <label htmlFor='Name' className='form-label'>First Name</label>
              <input type={'text'} className='form-control'
                placeholder='Enter your name'
                name='firstName'
               
              />
            </div>
            <div className="mb-3">
              <label htmlFor='Username' className='form-label'>last Name</label>
              <input type={'text'} className='form-control'
                placeholder='Enter your username'
                name='lastName'
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                

                required>
              </textarea>
            </div>
            <div className="mb-3">
              <div className="">
                <label htmlFor="inputState" className="form-label">Gender</label>
                <select id="inputState"
                  className="form-select"
                 
                  name="gender">
                  <option ></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input type="date"
                className="form-control"
                id="dob"
                name="dob"
             

                required />
            </div>
            <div className="mb-3">
              <div className="">
                <label htmlFor="inputState" className="form-label">Branch</label>
                <select id="inputGroup"
                  className="form-select"
                  name="branch"
                  >
                  <option ></option>
                  <option value="b-tech">B-Tech</option>
                  <option value="mca">MCA</option>
                  <option value="m-tech">M-Tech</option>
                  <option value="bca">BCA</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel"
                className="form-control"
                id="phone"
                name="phoneNo"
                
                required />
            </div>
            <div className="mb-3">
              <label htmlFor='Email' className='form-label'>E-mail</label>
              <input type={'text'} className='form-control'
                placeholder='Enter your E-mail'
                name='email'
                
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password"
                className="form-control"
                name="password"
               

                required />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>

    </div>
<Footer/>
</>
  )
}
