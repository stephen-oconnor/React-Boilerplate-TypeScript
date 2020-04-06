import * as React from 'react';

class DefaultErrorBoundary extends React.Component {
	state = {
		isError: false,
	};

	static getDerivedStateFromError() {
		return { isError: true };
	}

	render() {
		const { isError } = this.state;
		const { children } = this.props;

		return isError ? <div>Error</div> : children;
	}
}

export default DefaultErrorBoundary;
