import React, {useContext} from 'react';
import { GlobalContext  } from '../App';



export const Button = () => {

const {handleYesBtn} = useContext(GlobalContext);

  return (
    <div>
        <span>
                    <button onClick={handleYesBtn} class="bg-blue-500 hover:bg-blue-700 mx-4 my-4 text-white font-bold py-2 px-4 rounded">Yes</button>
                </span>
                <span>
                    <button class="bg-blue-500 hover:bg-blue-700 mx-4  my-4 text-white font-bold py-2 px-4 rounded">No</button>
                </span>
    </div>
  )
}
