import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.css';

const HoverFillButton = ({ children, className, ...props }) => {
	return (
		<button className={`${style.button} ${className ? className : ""}`} {...props}>
			<div className={`${style.filler} hover-fill-button-filter`}>{children}</div>
			{children}
		</button>
	)
};

HoverFillButton.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

export default HoverFillButton;
