import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

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
      <form onSubmit={this.submitRecipe}>
      <input type="text" value={this.state.searchRecipe} onChange={this.handleOnchange}/>
      
      </form>
      {
        this.state.recipes.map((recipe)=>{
          return <img height='300px' width="300px" src={recipe.image_url} alt='mamun'/>
        })
      }
       <h1>Hello</h1>
      </div>
    )
  }
}

export default App



