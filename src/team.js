var React = require('react');

var Team = React.createClass({
    handleClick: function(){ 
        this.props.teamChoice(this.props.team);
    },
    render: function(){
        console.log(this.props)
        return(
            <li onClick={this.handleClick} className={this.props.className}><a>{this.props.team}</a></li>
        );
    }
});
        
module.exports = Team;