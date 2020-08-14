import React, { Component } from 'react'
import './style.css'

export class MemeReel extends Component {
    constructor() {
		super()
		this.state = {
            topText: "",
            bottomText: "",
            allMemeImgs: [],
            memeImg: "",
            imgUrl: 0,
            imgClicked: false
		}
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
	}

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            	const {memes} = response.data
	            this.setState({
	                allMemeImgs: memes
                })
                this.state.allMemeImgs.map(img => this.setState({ memeImg: img.url }))
            })

    }

    handleClick() {
        this.setState({
            imgClicked: !this.imgClicked,
        })

    } 

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        if (this.state.imgClicked) { 
            return (
                <div>
                    <form className="meme-form" onSubmit={ this.handleSubmit }>  
                        <input type="text" placeholder="Top Text" value={ this.state.topText } name="topText" onChange={ this.handleChange } />
                        <input type="text" placeholder="Bottom Text" value={ this.state.bottomText } name="bottomText" onChange={ this.handleChange } />
                        <br />
                        <button>Generate</button>
                    </form>
                    <div className="meme">
                        <img src={ this.state.imgUrl } alt="Meme" />
                        <h2 className="top">{ this.state.topText }</h2>
                        <h2 className="bottom">{ this.state.bottomText }</h2>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="imgMeme">
                    { this.state.allMemeImgs.map(img =>
                        <button onClick={ () => { this.handleClick(); this.setState({ imgUrl: img.url }) }}><img src={ img.url } alt="Meme" /></button>
                    ) }
                </div>
            )
        }
    }
}

export default MemeReel