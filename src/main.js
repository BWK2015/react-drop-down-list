var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

var App = React.createClass({
    render: function(){
        return (
            <Dropdown data={this.props.data} />
        );   
    }
 });

var data = {
    title: "Football Teams",
    teams: ["Manchester United", "Chelsea", "Arsenal"]
};        

ReactDOM.render(<App data={data} />, document.querySelector('.container'));