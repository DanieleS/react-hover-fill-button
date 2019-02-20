import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Filler = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: red;
	color: white;
	clip-path: polygon(0 0, -65% 0, 0% 100%, 0% 100%);
	transition: clip-path 0.5s;
`;

const Button = styled.button`
	border: 2px solid red;
	background: white;
	padding: 10px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.2em;
	position: relative;
	max-width: 100px;

	&:hover ${Filler} {
		clip-path: polygon(0 0, 100% 0, 165% 100%, 0% 100%);
	}
`;

const HoverFillButton = ({ children, className, style, ...props }) => {
	return (
		<Button {...props}>
			<Filler >{children}</Filler>
			{children}
		</Button>
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
