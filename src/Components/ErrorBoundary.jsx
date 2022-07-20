import React from "react";

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		console.log(error);
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		// TODO log error To a service(error, errorInfo);
		this.setState({ error: error, errorInfo: errorInfo });
	}
	render() {
		if (this.state.hasError) {
			return (
				<>
					<h2>Sorry, something went wrong!  Details are below: </h2>
					<details style={{ whiteSpace: "pre-wrap" }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo && this.state.errorInfo.componentStack}
					</details>
				</>
			);
		}
		return this.props.children;
	}
}
