

//////new one
import React, { Fragment } from 'react'

export const Home = () => {
    return (
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Proceed
      </button>
      
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 E-SAM. All rights reserved.
  </p>
</div>       
       </Fragment>
    )
}
