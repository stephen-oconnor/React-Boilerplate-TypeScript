import * as React from 'react';
import { hot } from 'react-hot-loader';

export interface IAppProps {
	compiler: string;
	framework: string;
}

class App extends React.Component<IAppProps, {}> {
	render() {
		return (
			<main role="main">
				<h1>
					{this.props.framework} App with {this.props.compiler}
				</h1>
			</main>
		);
	}
}

export default hot(module)(App);
