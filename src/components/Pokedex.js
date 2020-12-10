import React, { Component } from 'react';
import Axios from 'axios'

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokemonName: 'pikachu',
            pokemonImage: ''
         }
    }
    componentDidMount() {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
            this.setState({
                pokemonImage: res.data.sprites.front_default
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.pokemonName === '') {
            return
        }
        if(prevState.pokemonName === this.state.pokemonName) {
            return
        }
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then((res) => {
            this.setState({
                pokemonImage: res.data.sprites.front_default
            })
        }).catch((err) => {
            this.setState({
                pokemonImage: ''
            })
        })
    }

    render() { 
        return ( 
            <div>
                {/* input componenet

                    state to govern the inpit component

                    state to hold the image; this will be a url string
                    that will nbecome the src of an img tag

                    img tag that references the image stored in state


                */}
                <h1>Fisher Price: My First Pokedex</h1>
                <input value={this.state.pokemonName} onChange= {(e) => 
                    {this.setState({pokemonName: e.target.value.toLowerCase()
                    })}} />
                    <div>
                        <img src={this.state.pokemonImage} />
                    </div>
            </div>
         );
    }
}
 
export default Pokedex;