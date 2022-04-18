import { Component } from "react";
import axios from 'axios';
import GetData1 from './GetData'

import "./App.css"


import './App.css'


class Counter extends Component {
    state = {
        movies:[],
        filterMovies:[]


    }

    EventTrigger(value,value2){

        if(value2.length>0){
            let sarchvalue=value2.filter((item)=>{
                return item.Title.toLowerCase().includes(value.toLowerCase()
                
                
                )
            })
            this.setState({movies:sarchvalue})
        }

            }

    componentDidMount(){
        axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((res) => {
            this.setState({ movies: res.data.Search, filterMovies: res.data.Search });
          });
    }



    render() {
        let { movies, filterMovies } = this.state
        //console.log((filterMovies))
        console.log((filterMovies))
     //   filterMovies.map((item)=>console.log(item))

        return (
            <div className="App-header">
            <div className="serach_continer" >
            <h1 className="Moive_Title">Movies</h1>
                <input type="text" className="serachBox" placeholder="search the Value" onChange={(e)=>this.EventTrigger(e.target.value,filterMovies)}/>
            </div>
            <div className="card_Continer">
            {movies.length?movies.map((item)=><GetData1 key={item.imdbID} item={item}/>):""}
            </div>
            </div>)
    }
}

export default Counter
