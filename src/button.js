var React = require('react');

var Button = React.createClass({
    render: function(){
        return (
            <button className={"btn " + this.props.className} type="button" onClick={this.props.whenClicked}>
                {this.props.title}  
                <span className="badge"> {this.props.number}</span>
                <span className="caret"></span>
            </button>
        );   
    }
});

module.exports = Button;
