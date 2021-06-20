import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class RecipeEdit extends Component {
    constructor(){
        super();
        

        this.state = {
            recipe: {},
            redirect: null,
            
        }
    }

    componentDidMount(){
        let recipeId = this.props.match.params.id;
        console.log(recipeId)
        fetch(`https://chef-r.herokuapp.com/api/recipe/${recipeId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    recipe: data,
                    
                   
                })
            }).catch((error) => {
                console.error(error);
                
            })
    }

    editRecipe = (e) => {
        e.preventDefault();
        console.log(e);
        let name = e.target.name.value;
  let preparation = e.target.preparation.value;
  let user_id = sessionStorage.getItem('user_id');
  let user_name=sessionStorage.getItem('user_name')
        
        fetch(`https://chef-r.herokuapp.com/api/recipe1/${this.state.recipe.id}`, {
            method: "PUT",
             headers: {
          
          "Content-Type": "application/json", 
          
      },
            body: JSON.stringify({
                "name":name,
                "preparation":preparation,
                "user_id":user_id,
                "user_name":user_name,
                "recipe_photo":this.props.recipe_photo

            })
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    redirect: `/edit/${data.id}`
                })
            })
    }



    render() {
        if (this.state.redirect===`/edit/${this.state.recipe.id}`){
            return <Redirect to={this.state.redirect} />
        }

        
       
            return (
            
               
  
  

  <div className="row justify-content-center m-3">
      <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-12">
      <div className="card shadow-sm" id="radius">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src={this.state.recipe.photo}  className="img-fluid" />
                      <a href="#">
                       
                      </a>
                    </div>
          
                
                <form onSubmit={(e) => {this.editRecipe(e)}}  className="form-detail" action="#" method="post" id="myform">
                    
                    <div>
                    <div className="mb-3 form-row">
                    <input type="file" onChange={(e)=>{this.props.uploadImageRecipe(e.target.files)}}/> <br />
                    <label for="name" className="form-label mt-4">Name</label>
                    <input  defaultValue={this.state.recipe.name } type="text" className="form-control" id="name" ></input>
                    </div>
                    <div className="mb-3 form-row">
                    <label for="preparation" className="form-label">Preparation</label>
                    <textarea defaultValue={this.state.recipe.preparation }  className="form-control" id="preparation" rows="10"></textarea>
                    </div>
                    <div className="form-row-last">
                                    <input type="submit" name="Sign In" className="btn btn-primary" value="Share"></input>
                                    
                                </div>
                   </div>
    
                    
                </form>    
    
                </div>
                </div>
                </div>
                
                
            )
        
        
    }
}
