var React = require('react');
var ReactDOM = require('react-dom');
var InputComponent = require('./components/InputComponent.js');
var OutputComponent = require('./components/OutputComponent.js');
var marked = require('marked');

var InitialComponent = React.createClass({

    getInitialState: function(){
        return{
            outputText : ""
        }
    },

    handleUpdateText: function(event){
        var processed = marked(event.target.value);
        this.setState({
            outputText : processed
        })
    },

    render: function(){
        return(
            <div className="row" >
                <h1>Markdown Previewer</h1>
                <InputComponent  onUpdateText={this.handleUpdateText}/>
                <OutputComponent textInput={this.state.outputText} />
            </div>
        )
    }
})

var app = document.getElementById("app");

ReactDOM.render(<InitialComponent/>,app);
