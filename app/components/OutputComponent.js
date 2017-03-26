var React = require('react');

function OutputComponent(props) {
    return(
        <div className="col-md-6 col-sm-6" dangerouslySetInnerHTML={{ __html: props.textInput }}>
        </div>
    )
}

module.exports = OutputComponent;