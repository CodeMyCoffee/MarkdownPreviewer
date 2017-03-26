var React = require('react');
var ReactDOM = require('react-dom');

var InitialComponent = React.createClass({
    render: function(){
        return(
            <div>
                Hello World from the chaos!
            </div>
        )
    }
})

var app = document.getElementById("app");

ReactDOM.render(<InitialComponent/>,app);
