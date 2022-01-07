import React from 'react'
import './Alert.css';
function Alert(props) {
    return (
        <div>
            <div className="alert alert-warning Alert" role="alert">
                {props.alert}
            </div>
        </div>

    )
}

export default Alert
