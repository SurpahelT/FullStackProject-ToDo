import {PropTypes} from 'prop-types'
export default function CounterButton({by,incrementMethod, decrementMethod}){
   
    // function incrementFunction(){    
    //     incrementMethod(by)
    // }
   
    // function decrementFunction(){
    //    decrementMethod(by)
    // }

    return (
        <div >
            <div>
                    <button className="counterButton" 
                        onClick={() => incrementMethod(by)} 
                        >
                            +{by}        
                    </button>
                    
                    <button className="counterButton" 
                        onClick={()=> decrementMethod(by)} 
                        >
                            -{by}
                    </button>
            </div>
        </div>
    )
    
}

CounterButton.propTypes = {
    by: PropTypes.number
}
