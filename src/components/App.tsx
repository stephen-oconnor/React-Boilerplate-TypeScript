import * as React from 'react';
import { hot } from 'react-hot-loader';
import img from './image_cat.jpg';
import s from './styles.module.scss';

export interface IAppProps {
	compiler: string;
	framework: string;
}

class App extends React.Component<IAppProps, {}> {
	render() {
		return (
			<main role="main" className={s.heading}>
				<h1>
					{this.props.framework} App with {this.props.compiler}
				</h1>
				<img src={img} alt="Cat" />
			</main>
		);
	}
}

export default hot(module)(App);
