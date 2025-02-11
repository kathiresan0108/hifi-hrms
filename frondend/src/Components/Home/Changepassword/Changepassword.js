import React from 'react'
import '../Changepassword/Changepassword.css'
import { Link } from 'react-router-dom'
function Changepassword() {
  return (
    <body>
    <div className='All-change-pass'>
       <div className='container'>
         <h2 className='change-pass'>Change Password</h2>
         <div>
         <input type="password" className="form-control-1" placeholder="Current Password" id="password" required/>
                <input type="password" className="form-control-2" placeholder="Password" id="password" required/>
                <input type="password" className="form-control-3" placeholder="Confirm Password" id="password" required/>
                <Link to="/signup" ><button class="btn-login" type="submit"> Update Password</button></Link>
                <button  class="btn-gog" type="submit">   Back to Login</button>
         </div>
       </div>
    </div>
    </body>
  )
}

export default Changepassword