var React = require('react');
var Button = require('./button');
var List = require('./list');

var Dropdown = React.createClass({
    getInitialState: function(){
        return {
            display: false
        };  
    },
    handleClick: function(e){
        this.setState({display: !this.state.display})
    },
    handleItemClick: function(team, e){
        this.setState({
            display: !this.state.display,
            itemTitle: team
        });
    },
    render: function(){
        return (
            <div className="dropdown">
                <Button whenClicked={this.handleClick} className="btn-default" title={this.state.itemTitle || this.props.data.title} number={this.props.data.teams.length} />
                <List teams={this.props.data.teams} display={this.state.display} itemClick={this.handleItemClick} selected={this.state.itemTitle}/>
            </div>
        );   
    }
});

module.exports = Dropdown;