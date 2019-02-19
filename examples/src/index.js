import React from 'react';
import { render } from 'react-dom';
import Button from '../../src';
const App = () => (
	<Button onClick={() => alert("Ciaone")}>Ciao</Button>
);
render(<App />, document.getElementById("root"));