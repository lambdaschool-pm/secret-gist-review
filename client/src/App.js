import React, { Component } from 'react';
import axios from 'axios';

import { Wrapper, H1, Content } from './AppCSS';

class App extends Component {
	state = {
		header: 'Main heading goes here',
		head1: '',
		head2: '',
		head3: [],
	};

	makePage = (page) => {
		const { header, head1, head2, head3 } = page;
		console.log(head3);
		this.setState({
			header,
			head1,
			head2,
			head3,
		});
	};
	componentDidMount() {
		axios
			.get('http://localhost:8000')
			.then((response) => {
				this.makePage(response.data.page);
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
	}
	render() {
		return (
			<Wrapper>
				<H1>{this.state.header}</H1>
				<Content>
					<h1>{this.state.head1}</h1>
					<h2>{this.state.head2}</h2>
					{this.state.head3.map((head3) => {
						head3.heading;
					})}
				</Content>
			</Wrapper>
		);
	}
}

export default App;
