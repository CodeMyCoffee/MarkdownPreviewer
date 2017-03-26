var React = require('react');

function OutputComponent(props) {
    return(
        <div dangerouslySetInnerHTML={{ __html: props.textInput }}>
        </div>
    )
}

module.exports = OutputComponent;