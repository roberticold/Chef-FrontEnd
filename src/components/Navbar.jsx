import React, { Component } from 'react'




export default class Navbar extends Component {
    

    
     

    render() {
        
            
            return(

               
                
                <nav className="navbar shadow-sm sticky-top navbar-expand-md navbar-light m-0" style={{"background-color":"white"}}>  
                    
                    
                            <div >
                                <a className="navbar-brand h1 mb-0" href="/" >
                                <img src="https://res.cloudinary.com/personal-cloud/image/upload/v1623682192/Sportify%20Images/Screenshot_3_dhl4nl.jpg"></img>
                                
                                </a>
                            </div> 
                            
                           
                           
                           {this.props.isSignedIn ? (

                               <>
                           <button 
                           type="button" 
                           data-bs-toggle="collapse" 
                           data-bs-target="#navbarNav" 
                           className="navbar-toggler" 
                           aria-controls="navbarNav" 
                           aria-expanded="false" 
                           aria-label="Toggle navigation">
                              
                             <span className="navbar-toggler-icon"></span>

                              </button>
                             
                          <div 
                          className="collapse  navbar-collapse  " 
                          id="navbarNav" >
                           <ul className="navbar-nav " style={{display:'flex', margin:'auto'}} >
                           
                               
                               <li className="nav-item ">
                                   <a className="nav-link active "  href="/allrecipes">All Recipes</a>
                               </li>
                               <li className="nav-item ">
                        
                                <a className="nav-link active" href="/createrecipe">Create a Recipe</a>
                               </li>
                               <li className="nav-item">
                                   <a className="nav-link active" href="/userrecipes">My Recipes</a>
                               </li>
                               <li className="nav-item">
                                   <a className="nav-link active" href="#">Most Popular Recipes</a>
                               </li>
                               
                          </ul>
                          </div>
                           
                           <div className="dropdown" >
                            <a className="btn btn-outline dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <img style={{height:'50px', width:'50px'}} src={sessionStorage.getItem('profile_photo')} id="image-user" alt=""/>   {sessionStorage.getItem('user_name')}
                            </a>

                            <ul className="dropdown-menu  dropdown-menu-end dropdown-menu-xxxl-start" aria-labelledby="dropdownMenuLink">
                                <li>  <a className="nav-link active" onClick={() => this.props.onLogOut()} aria-current="page" href="/"><i className="fas fa-sign-out-alt " style={{'font-size':'23px','color':'black'}}></i></a></li>
                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                               
                            </ul>
                            </div>
                            </>
                            
                            ):
                            (<ul className="navbar-nav ">
                                
                                <li className="nav-item justify-content-end">
                                    <a className="nav-link active" aria-current="page" href="/register">Sign Up</a>
                                </li>
                                <li className="nav-item justify-content-end">
                                    <a className="nav-link active" aria-current="page" href="/login">Sign In</a>
                                    
                                </li>
                                
                            </ul>
                            )}
                           
                                                              
                           
                           
                    
                </nav>  

                   
                
                
        

                

            )
        
            
       
        
    }
    
             

}
