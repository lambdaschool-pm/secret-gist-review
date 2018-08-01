import React, { Component } from 'react';
import axios from 'axios';

import {
	Wrapper,
	Intro,
	H1,
	H2,
	Links,
	H3,
	Content,
	Container,
	Form,
	Input,
	TextArea,
	Button,
	Description,
} from './AppCSS';

class App extends Component {
	state = {
		head: 'Main heading goes here',
		intro: '',
		subHead: '',
		links: [],
		content: [],
	};

	makePage = (page) => {
		const { head, intro, subHead, links, content } = page;
		this.setState({
			head,
			intro,
			subHead,
			links,
			content,
		});
	};
	componentDidMount() {
		axios
			.get('http://localhost:8000/api')
			.then((response) => {
				this.makePage(response.data.page);
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
	}

	renderTextArea = (bol) => {
		if (bol) {
			return (
				<React.Fragment>
					Content:
					<TextArea name={'content'} cols={80} rows={10} />
				</React.Fragment>
			);
		} else {
			return null;
		}
	};

	render() {
		return (
			<Wrapper>
				<H1>{this.state.head}</H1>
				<Links>
					{this.state.links.map((link, i) => {
						const { url, text, description } = link;
						return (
							<li key={i}>
								<i>
									<a href={'/api/' + url}>{text}</a>
								</i>
								{description}.
							</li>
						);
					})}
				</Links>

				<Content>
					<Intro>{this.state.intro}</Intro>
					<H2>{this.state.subHead}</H2>
					{this.state.content.map((block, i) => {
						const { title, form: { action, method, label, type, name, textArea, description } } = block;
						return (
							<Container key={i}>
								<H3>{title}</H3>
								<Form action={'/api/' + action} method={method}>
									{label}:
									<Input type={type} name={name} />
									{this.renderTextArea(textArea)}
									<Description>{description}</Description>
									<Button>Submit</Button>
								</Form>
							</Container>
						);
					})}
				</Content>
			</Wrapper>
		);
	}
}

export default App;
