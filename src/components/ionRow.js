import React from 'react';
import classnames from 'classnames';
import { Link } from "react-router";

var IonRow = React.createClass({
    propTypes: {
	customClasses: React.PropTypes.string,
	'width10': React.PropTypes.bool,
	'width20': React.PropTypes.bool,
	'width33': React.PropTypes.bool,
	'width40': React.PropTypes.bool,
	'width50': React.PropTypes.bool,
	'width60': React.PropTypes.bool,
	'width70': React.PropTypes.bool,
	'width80': React.PropTypes.bool,
	'width90': React.PropTypes.bool,
	'textRight': React.PropTypes.bool,	
	'textCenter': React.PropTypes.bool,
	'textLeft': React.PropTypes.bool,
	'onClick': React.PropTypes.func
	//    icon: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
	return {
	    customClasses: '',
	    'width10': false,
	    'width20': false,
	    'width33': false,
	    'width40': false,
	    'width50': false,
	    'width60': false,
	    'width70': false,
	    'width80': false,
	    'width90': false,
	    'textRight': false,
	    'textCenter': false,
	    'textLeft': false,	    
	    'onClick': null
	};
    },
    render() {
	var classes = classnames(
	    {
		'ion-row': false,
		'row': true,
		'item': false,
		'row-center': false,
		'text-right': this.props.textRight,
		'text-center': this.props.textCenter,
		'text-left': this.props.textLeft,
		'text-right': this.props.textRight,				
		'row-10': this.props.width10,
		'row-20': this.props.width20,
		'row-33': this.props.width33,
		'row-40': this.props.width40,
		'row-50': this.props.width50,
		'row-60': this.props.width60,
		'row-70': this.props.width70,
		'row-80': this.props.width80,
		'row-90': this.props.width90
	    },
	    this.props.customClasses
	);
	return (
	    <div className={classes}  onClick={this.props.onClick}>
	      { this.props.children }
	    </div>
	);
    }
});

export default IonRow;


