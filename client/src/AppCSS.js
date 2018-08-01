import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #eee;
	padding: 1rem;
`;

export const H1 = styled.h1`
	font-size: 2rem;
	color: blue;
	font-weight: 700;
`;

export const H2 = styled.h2`
	font-size: 1.5rem;
	color: lightblue;
	font-weight: 500;
`;

export const Links = styled.ul`max-width: 600px;`;

export const H3 = styled.h3`
	font-size: 1.2rem;
	color: blue;
	font-weight: 400;
`;

export const Intro = styled.p`
	font-size: .8rem;
	color: gray;
	font-weight: 200;
`;

export const Content = styled.div`
	border: 1px solid gray;
	border-radius: 10px;
	background-color: #fff;
	padding: 1rem;
`;

export const Container = styled.div`
	border: 2px solid #aaa;
	margin: 1rem .5rem;
	padding: 1rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input``;

export const TextArea = styled.textarea``;

export const Description = styled.div``;

export const Button = styled.button`
	background-color: lightblue;
	color: #fff;
	font-size: 1rem;
	padding: .2rem;
	margin: 1rem 0;
	border-radius: 5px;
	width: 150px;
`;
