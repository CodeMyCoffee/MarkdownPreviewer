var React = require('react');


function InputComponent(props){
    return(
        <textarea className="col-md-6 col-sm-6" onChange={props.onUpdateText} ></textarea>
    )
}

module.exports = InputComponent;