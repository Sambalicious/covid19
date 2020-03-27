import React from 'react';
import { Button } from './Button';


const Questions = ({title}) => {
    return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
                 <div className="px-6 py-4">
          <div  className="font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="px-6 py-4">
         <Button />
      </div>

</div>
    )


}

export default Questions;