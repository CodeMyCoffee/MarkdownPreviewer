var React = require('react');


function InputComponent(props){
    return(
        <textarea onChange={props.onUpdateText} ></textarea>
    )
}

module.exports = InputComponent;