import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Recipe.css';
import './Register.css';


export default class Createrecipe extends Component {

    

    render() {
        
        if (!this.props.isSignedIn){
            return <Redirect to='/' />
        
        }if (this.props.redirect=="/userrecipes"){
            return <Redirect to={this.props.redirect} />
        }
        return (
            <div className=" container-fluid ">
  
  

  <div className="row justify-content-center m-3">
      <div className="col col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
      <div className="card shadow-sm" id="radius">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src={this.props.recipe_photo} className="img-fluid" />
                      <a href="#">
                       
                      </a>
                    </div>
                <form onSubmit ={(e)=>this.props.onCreateRecipie(e)}  className="form-detail" action="#" method="post" id="myform">
                
                <div>
                <div className="mb-3 form-row">
                <input type="file" onChange={(e)=>{this.props.uploadImageRecipe(e.target.files)}}/> <br />
                <label for="name" className="form-label mt-4">Name</label>
                <input type="text" className="form-control" id="name" ></input>
                </div>
                <div className="mb-3 form-row">
                <label for="preparation" className="form-label">Preparation</label>
                <textarea className="form-control" id="preparation" rows="10"></textarea>
                </div>
                <div className="form-row-last">
                                <input type="submit" name="Sign In" className="btn btn-primary" value="Share"></input> 
                                
                            </div>
               </div>

                
            </form> 

                </div>
                
                
               

            </div>
            </div>
            </div>
            
            
        )
        
    }
    }


