import React, { Component } from 'react'
import './Userrecipes.css';

export default class Allrecipes extends Component {
    constructor(){
        super();
    
        this.state = {
          product:[]
        }
        
      }

    componentDidMount(){
       
        fetch('https://chef-r.herokuapp.com/api/allrecipes')
      .then(res => res.json())
      .then(data => {
          console.log(data)

        this.setState({

            product:data

        })

        
        


    })
}
    render() {
        
        return (
           
            <div>
            
                {this.state.product.map((recipe)=>(
                
                <div className="container-fluid ">
  
  

  <div className="row justify-content-center m-3">
      <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
        
            <div className="card shadow-sm" id="radius">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={recipe.photo} className="img-fluid" />
                <a href="##">
                 
                </a>
              </div>
              <div >
              <img src="/images/screenshot_1.jpg" alt=""/><span className="card-number "> # {recipe.id}</span>
              <span className="card-author subtle">Chef {recipe.username}</span>
              <h6>{recipe.likes} LIKES</h6>
              <a className="nav-link" href={`/edit/${recipe.id}`}><h6 className="card-title text-center" >{recipe.name}</h6></a>
                
                <p className="card-text">
                {recipe.preparation}
                </p>
                 
              </div>
            </div>
          
                
            
          </div>

</div>

</div>


))}
</div>






         
            
            
          
            
        )
    }
}
