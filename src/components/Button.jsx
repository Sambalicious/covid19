import React, {useContext} from 'react';
import { GlobalContext  } from '../App';




export const Button = ({score}) => {
  console.log(score)

const {handleYesBtn, handleNoBtn} = useContext(GlobalContext);

  return (
    <div>
        <span>
                    <button onClick={()=> handleYesBtn(score)} className="bg-blue-500 hover:bg-blue-700 mx-4 my-4 text-white font-bold py-3 px-5 rounded">Yes</button>
                </span>
                <span>
                    <button onClick={handleNoBtn} className="bg-blue-500 hover:bg-blue-700 mx-4  my-4 text-white font-bold py-3 px-5 rounded">No</button>
                </span>
    </div>
  )
}
