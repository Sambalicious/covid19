import React, { useContext } from 'react';
import { Button } from './Button';



const Questions = ({title, pics, score }) => {
       
    return (
          <div className="max-w-sm rounded my-6 overflow-hidden shadow-lg">
               <img className="w-medium" src={pics} alt="images"/>
                 <div className="px-6 py-4">
          <div  className="font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="px-6 py-4">
         <Button score={score} />
      </div>

</div>
    )


}

export default Questions;