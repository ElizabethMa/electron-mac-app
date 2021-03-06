var React = require('react');
var ReactCssTransitionGroup = require('react-addons-css-transition-group');
require('../main.css')

var Main = React.createClass({
    render: function() {
        return (
            <div className='main-container'>
              <ReactCssTransitionGroup
                transitionName= "appear"
                transitionEnterTimeout= {2000}
                transitionLeaveTimeout= {2000}>
                {React.cloneElement(this.props.children, {key:this.props.location.pathname})}
              </ReactCssTransitionGroup>
            </div>
        )
    }
});

module.exports = Main;