var React = require('react');
var Team = require('./team');

var List = React.createClass({
    render: function(){
        var teams = this.props.teams.map(function(team, index){
            return (
                <Team 
                key={index} 
                team={team} 
                teamChoice={this.props.itemClick}
                className={this.props.selected === team ? 'active':''}
                />
                );
        }, this);
        
        var displayStyle = {
            display: this.props.display ? 'block' : 'none'
        };
        
        return (
            <ul style={displayStyle} className="dropdown-menu">
                {teams}
            </ul>
        );
    }
});

module.exports = List;