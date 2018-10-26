import React from 'react';
import { debounce } from 'debounce';

/* main component that holds playerlist in state */
class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['King James',
                    'Splash brother - Klay Thompson',
                    'Splash brother - Steph Curry',
                    'CP3 - Chris Paul',
                    'Boogie - Cousins',
                    'Greek Freak - Antetokounmpo ',
                    'Beastbrook - westbrook',
                    'The Brow - Davis',
                    'KD - Kevin Durant',
                    'Fresh Prince - Ben SImmons'
                ]
        }
    }

    render() {
        return (
            <div className="offset-md-3 col-md-6 offset-md-3">
                <SearchBar players={this.state.list} />
                { /* <SearchResults /> */ }
            </div>
        )
    }
}

/* this component holds input element and its handlers, also searches/matches the input value for the players list and updates the result in the local state  */
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            results: []
            //list: props.list
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        //this.debounceOnChange = debounce(this.onChangeHandler, 700);
    }
    debounceOnChange=(e)=>{
        console.log(e);
    }
    onChangeHandler(event) {
        // let value = debounce(()=>{
        //     return event.target.value
        // },1000);
        //console.log(value);
        let input = document.querySelector("input"); /* using js queryselector because event is undefined when using debounce */
        console.log(input);
        let value = input.value;
        
        //if(value.length > 1)
            this.getResult(value);
    }
    getResult(input) {
        let results = this.props.players.filter((v)=> {
            let inp = new RegExp(input, 'i');
            return v.match(inp) != null ? true:false;
        });

        this.setState({results});
    }
    render() {
        return(
            <div className="">
                <input className="form-control" placeholder="search player" onChange={debounce(this.onChangeHandler, 700)} />
                <SearchResults results={this.state.results} />
            </div>
        )
    }
}

/* this component creates and returns UI for results container */
const SearchResults = (props) => {
    console.log(props);
    const showResults = props.results.map((p,i) => {
            console.log(p);
            return ( <ResultItem key={i+1} player={p} /> )
        });

    return (
        <div>
            <ul className="list-group">
            {showResults}
            </ul>
        </div>
    )
}

/* this component creates and returns list-item */
const ResultItem = (props) => {
    return (
        <li className="list-group-item text-left">
            {props.player}
        </li>
    )
}

export default PlayerList;