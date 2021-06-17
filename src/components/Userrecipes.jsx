import React, { Component } from 'react'
import './Userrecipes.css';
import { Link } from 'react-router-dom';

export default class Userrecipes extends Component {
    constructor(){
        super();
    
        this.state = {
          product:[]
        }
        
      }

    componentDidMount(){
       
        fetch(`/api/recipie/${sessionStorage.getItem('user_id')}`)
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
                
                <div className=" container-fluid ">
  
  

  <div className="row justify-content-center m-3">
      <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-10 col-sm-10 col-xs-10">
        
            <div className="card shadow-sm" id="radius">
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={recipe.photo} className="img-fluid" />
                <a href="#">
                 
                </a>
              </div>
              <div >
              <img src="/images/screenshot_1.jpg" alt=""/><span className="card-number "> # {recipe.id}</span>
              <span className="card-author subtle">Chef {recipe.username}</span>
              <h6>{recipe.likes} LIKES</h6>
              <a className="nav-link" href={`/edit/${recipe.id}`}><h5 className="card-title text-center">{recipe.name}</h5></a>
                
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
