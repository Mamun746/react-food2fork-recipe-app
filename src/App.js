import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import SingleRecipe from './pages/SingleRecipe'
import Default from './pages/Default'

export class App extends Component {
  state={
    recipes:[],
    searchRecipe:''
  }
  componentDidMount(){
    
  }

  handleOnchange=(e)=>{
    this.setState({
      searchRecipe:e.target.value
    })
  }

  submitRecipe=(e)=>{
    e.preventDefault()

    axios.get(`http://recipesapi.herokuapp.com/api/search?q=${this.state.searchRecipe}`)
    .then((res)=>{
      const data=res.data.recipes
      this.setState({
          recipes:data
      })
      
    })
    

  }





  // componentDidMount() {
  //   const json = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(json);
  //   this.setState({
  //     recipes
  //   });
  // }
  // componentDidUpdate() {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);
  // }
  render() {
    return (
      <div>
      <Home/>
      <Recipe/>
      <SingleRecipe/>
      <Default/>
      </div>
    )
  }
}

export default App



