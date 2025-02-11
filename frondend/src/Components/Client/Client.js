import React from 'react'
import '../Client/Client.css'
import img from '../Assets/HIFI-IT-PARK.png'
import { FaPlus } from "react-icons/fa";
function Client() {
  return (
    <body>
    <div className='full-page'>
       <img className='logo' src={img } alt='hey'/>
        <div className='container'>
        <div class="field-set">
                <label className="company-name">Company Name:</label>
                <br></br>
                <input type="text"  className="company-name-in" placeholder="Enter Your Company-Name"/>
         </div>
        <div class="field-set-1">
                <label className='company-location'>Company Location:</label>
                <input type="text"  className="company-location-in" placeholder="Enter Your Last-Name"/>
            </div>
        <div class="field-set-2">
                <label className='company-email'>Company Email:</label>
               
                <input type="email" className="company-email-in" placeholder="Enter Your Email"/>
            </div>
            <div class="field-set-3">
                <label className='company-ph-no'>Company Phone Number: </label>
                <br/>
                <input type='number' className='company-ph-no-in-1'placeholder="+91"/>  

                <input type="number" className='company-ph-no-in' placeholder="Enter Your Number"/>
                
            </div>
            <div class="field-set-4">
                <label className='company-social-media'>Company Social Media:</label>
                <br></br>
                <button className="add-btn">Add More <div className='plus'>< FaPlus/></div></button>
                <br></br>
                <input type="text" className='company-social-media-in' placeholder="Enter Your social-media"/>
            </div>
            <div class="field-set-5">
                <label className='company-dept' >Company Department:</label>
                <input type="text" className='company-dept-in' placeholder="Enter Your company-department"/>
              
            </div>
            <div class="field-set-6">
                <label className='company-no-of-employees'>Company no-of-employees</label>
                <input type="number"  className="company-no-of-employees-in" placeholder="Enter Your no-of-employees"/>
                
            </div>
            <div class="field-set-7">
                <label className='company-weblink'>Company Weblink</label>
                <input type="text" className='company-weblink-in' placeholder="Enter Your company-weblink"/>
            </div>
            <div class="field-set-8">
                <label className='company-ceo'>Company ceo</label>
                <br></br>
                <input type="text"  className="company-ceo-in" placeholder="Enter Your company-ceo" required/>
      
            </div>
            <div class="field-set-9">
                <label className='start-year'>Start Year</label>
                <br></br>
                <input type="number" className='start-year-in' placeholder="Enter Your start-year " required/>
                
            </div>
            <div class="field-set-10">
                <label className='annual-income'>Annual Income</label>
                <br></br>
                <input type="number" className='annual-income-in'  placeholder="Enter Your annual-income "/>
                
            </div>
            <div class="field-set-11">
                <label className='net-profit' >Net Profit</label>
                <br></br>
                <input type="number" className='net-profit-in' placeholder="Enter Your net-profit "/>
                
            </div>
            <div class="field-set-12">
                <label className="company-branch-no">company-branch-no</label>
                <input type="number" className="company-branch-no-in" placeholder="Enter Your company-branch-no "/>
            </div>
            <div class="field-set-13">
                <label className="company-certification">company certification</label>
                <input type="text" className='company-certification-in' placeholder="Enter Your company-certification "/>
                
            </div>
            <div class="field-set">
                <label className="company-lichence">company Lichence</label>
                <input type="text" className='company-lichence-in' placeholder="Enter Your company-lichence "/>
            </div>
            <div>
                <button className='reset'>Reset</button>
                <button className='submit'>Submit</button>
            </div>
        </div>
    </div>
    </body>
  )
}

export default Client