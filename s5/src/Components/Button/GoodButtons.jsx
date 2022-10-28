import {useContext} from 'react';
import {Context as VoteContext}from '../../contexts/VoteContext';
const GoodButtons = () => {
 
    const { good,addGood } = useContext(VoteContext )
  return (
    <div>
         - good : {good}
        <button onClick={addGood}>
          add
    </button>
    </div>
    
  )
}
export default GoodButtons;