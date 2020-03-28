import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import covid from '../utils/images/covid.jpeg';
const Header = () => {
  
    return (
       
         <div className="max-w-sm rounded my-4 overflow-hidden shadow-lg">
           <img className="w-full" src={covid} alt="images" />
        <div className="px-6 py-4">
          <div className="font-bold text-green-500 text-4xl mb-2">
              COVID-19 Tracker
          </div>
          <p className="text-gray-700 text-base">
            Due to limited Test kit needed to combat COVID-19, we made this App to provide you with a means of self examining yourself before contacting NCDC.
          </p>
          <h4 className="font-bold text-green-500 text-xl mb-2"> We gat you.</h4>
          <p>it will only take a moment to answer some to our questions so as to provide you with best analysis provided by NDCDC guidelines</p>
        </div>
       
     

       <Fragment>
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
     
       <div className="flex items-center justify-between">
         <Link to="/test" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
           Proceed
         </Link>
         
       </div>

     <p className="text-center text-gray-500 text-xs">
       &copy;2020 Samuel Ayegbusi. All rights reserved.
     </p>
   </div>       
          </Fragment>
    </div>
    )
}

export default Header
