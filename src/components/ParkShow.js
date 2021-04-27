import React from 'react'
import {connect} from 'react-redux'


const ParkShow = ({parks, match, history}) => {
    
    
    
    return (
        <div>
            Park Info here! 
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      parks: state.parksReducer.parks
    }
}

export default connect(mapStateToProps)(ParkShow);