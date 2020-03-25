import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
       
         <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-green-500 text-4xl mb-2">
              COVID-19 Tracker
          </div>
          <p className="text-gray-700 text-base">
           Do you feel different and you are curios to know your COVID-19 status? 
          </p>
          <h4 className="font-bold text-green-500 text-xl mb-2"> We gat you.</h4>
          <p>it will only take a moment to answer some to our questions so as to provide you with best analysis provided by NDCDC guidelines</p>
        </div>
       
     

       <Fragment>
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
           Username
         </label>
         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
       </div>
       <div className="mb-6">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
           Date of Birth
         </label>
         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Enter your date of birth"/>
         
       </div>
       <div className="flex items-center justify-between">
         <Link to="/test" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
           Proceed
         </Link>
         
       </div>
     </form>
     <p className="text-center text-gray-500 text-xs">
       &copy;2020 E-SAM. All rights reserved.
     </p>
   </div>       
          </Fragment>
    </div>
    )
}
