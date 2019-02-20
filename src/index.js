import React from 'react';
import PropTypes from 'prop-types';
import cssStyle from './styles.css';

const HoverFillButton = ({ children, className, style, ...props }) => {
	style = style ? style : {};
	const buttonStyle = {
		color: props.textColor,
		background: props.background,
		borderColor: props.fillBackground,
		...style
	};
	return (
		<button className={`${cssStyle.button} ${className ? className : ""}`} style={buttonStyle} {...props}>
			<div className={`${cssStyle.filler} hover-fill-button-filter`} style={{
				color: props.fillTextColor,
				background: props.fillBackground,
			}}>{children}</div>
			{children}
		</button>
	)
};

HoverFillButton.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	fillBackground: PropTypes.string,
	background: PropTypes.string,
	textColor: PropTypes.string,
	fillTextColor: PropTypes.string
}

export default HoverFillButton;
