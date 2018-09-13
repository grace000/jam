import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes }from 'styled-components'
import { fadeInDown } from 'react-animations'
import wordList from "../data/words.json"
import "./index.css"

const fader = keyframes`${fadeInDown}`

const Fade = styled.p`
  animation: ${fader} 1.5s alternate infinite;
`;

class IndexPage extends React.Component {
	constructor(props){
		super(props);
		this.state={
			word: "time",
			color: ""
		}

	}
	componentDidMount() {
		let data = wordList.map((word)=>{return word});
		
		let index = 0;
		setInterval(()=> {
			let currentWord = data[index].word;
			let currentColor = data[index].color;
			this.setState({
				word: currentWord,
				color: currentColor
			})
			index++;
			if (index >= data.length){
				index = 0;
			}
		}, 3000)
	}


	render() {
	    return (
	    	
	    	<div className="wrapper">
	    		<div>
    				<Link to="/intro"><span role="img" aria-label="waving-hand">👋🏾</span></Link>
    			</div>
  				<div className="container">
  					<div className="row">
	  					<div className="col" >
	  						<h1 id="jam">JAM</h1>
	  					</div>
	  					<div className="col">
	  						<Fade id="word-plug">{this.state.word}</Fade>
	  					</div>
  					</div>
    			</div>
  			</div>
  			
	    )
	}
}


export default IndexPage
