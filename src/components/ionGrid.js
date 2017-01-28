import React from 'react';
import classnames from 'classnames';
import { Link } from "react-router";

var IonGrid = React.createClass({
    propTypes: {
	'onClick': React.PropTypes.func,
	customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
	return {
	    onClick: null,
	    customClasses: ''	    
	};
    },
    render() {
	var classes = classnames(
	    'grid',
	    this.props.customClasses
	);

	return (
	    <div className={classes} onClick={this.props.onClick}>
	      { this.props.children }
	    </div>
	);
    }
});
				
export default IonGrid;


