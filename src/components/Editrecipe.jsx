import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Editrecipe extends Component {
    constructor(){
        super();

        this.state = {
            recipe: {},
            comment:[],
            getcomments:[],
            redirect: null
            
        }
    }

    componentDidMount(){
        let recipeId = this.props.match.params.id;
        console.log(recipeId)
        fetch(`https://chef-r.herokuapp.com/api/recipe/${recipeId}`)
            .then(res => res.json())
            .then(data => {
                
                this.getCommentsOnMount();
                console.log(data)
                
                this.setState({
                    
                    recipe: data,

                   
                })

            }).catch((error) => {
                console.error(error);
                this.setState({
                    
                })
            })
    }

   

    deleteRecipe = () => {
        
       
        fetch(`https://chef-r.herokuapp.com/api/recipe/delete/${this.state.recipe.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                redirect: '/userrecipes'
            })
        })
    }


    deleteComment=(commentid)=>{
        
        
       
        fetch(`https://chef-r.herokuapp.com/api/comment/delete/${commentid}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            this.getCommentsOnMount()
            console.log(data);
            
        })
    
    }



    
   


   getCommentsOnMount(){
    
    let recipeId = this.props.match.params.id;
    fetch(`https://chef-r.herokuapp.com/api/commentsget/${recipeId}`)
  .then(res => res.json())
  .then(data => {
      console.log(data)

    this.setState({

        getcomments:data

    })

    
    


})
}




    
    like= () => {
        
        //    console.log(this.state.recipe.id)
        fetch(`https://chef-r.herokuapp.com/api/like/${this.state.recipe.id}`, {
            method: "PUT",
             headers: {
          
          "Content-Type": "application/json", 
          
      },
            body: JSON.stringify({
                "username":sessionStorage.getItem("user_name"),
                
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    
                    recipe: data,

                   
                })
            })
        }






    createComment= (e)=>{

        
        
        e.preventDefault();
        let commen = e.target.comment.value;
        e.target.reset();
        
        console.log(this.state.recipe.id)
        fetch(`https://chef-r.herokuapp.com/api/comments/${this.state.recipe.id}`,{
            method: "POST",
            headers: {
                
                "Content-Type": "application/json", 
                
            },
            body:JSON.stringify( {
      
      
                "message":commen,
                "user_name":sessionStorage.getItem('user_name'),
                "photo":sessionStorage.getItem('profile_photo')

                
      
            })
      
      
      
        }).then(res => res.json())
        .then(data => {
            this.getCommentsOnMount()
            console.log(data)
            this.setState({
                comment:data
                


                
                
      
            }
            
        )
        }).catch(error => console.log(error))
        
      
      }

      AddToFavourites=(id)=>{

        fetch(`https://chef-r.herokuapp.com/api/addfavourites/${id}`,{
            method: "POST",
            headers: {
                
                "Content-Type": "application/json", 
                
            },
            body:JSON.stringify( {
      
      
                "username":sessionStorage.getItem("user_name"),
                "contact_id":id,
                
      
      
            })
      
      
      
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            
            this.setState({
                recipe: data
                
                
      
            }
            
        )
        }).catch(error => console.log(error))
            




    }
      

    render() {
       if (!sessionStorage.getItem('login')){
            

            return <Redirect to={'/allrecipes'} />
        }
        else if (this.state.redirect==='/userrecipes'){
            return <Redirect to={'/allrecipes'} />

            

            return <Redirect to={'/allrecipes'} />
        }

        else if(sessionStorage.getItem('login')){

        
        
        
        
            return (
                
               
            
                <div className="container-fluid">
                 <div className="row justify-content-center m-2">
                    <div className="col col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8">
              
                  <div className="card shadow-sm" id="radius">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src={this.state.recipe.photo }  className="img-fluid" />
                      <a href="#">
                       
                      </a>
                    </div>
                    <div >
                   
                    <img src="/images/screenshot_1.jpg" alt=""/><span className="card-number "> # {this.state.recipe.id}</span>
                    <span className="card-author subtle">{this.state.recipe.username}</span>
                    <h6>{this.state.recipe.likes} LIKES</h6>
                    {this.state.recipe.favourite_status == 0 ? 
                    (<a className="btn btn-outline" key={this.state.recipe.id} onClick={() => this.AddToFavourites(this.state.recipe.id)} data-bs-dismiss="modal"><i class="far fa-star" style={{'font-size':'27px','color':'blue'}}></i></a>)
                    :
                    (<a className="btn btn-outline" key={this.state.recipe.id} onClick={() => this.AddToFavourites(this.state.recipe.id)} data-bs-dismiss="modal"><i class="fas far fa-star" style={{'font-size':'27px','color':'blue'}}></i></a>)
                    }
                    
                    
                    <a className="nav-link" href={`/edit/${this.state.recipe.id}`}><h5 className="card-title text-center">{this.state.recipe.name}</h5></a>
                      
                      <p className="card-text">
                      {this.state.recipe.preparation}
                      </p>
                      {this.state.recipe.username == this.props.username ? 

                      (<><a href={`/edit1/${this.state.recipe.id}`} className="btn btn-primary">Edit</a> <button className="btn btn-danger" onClick={this.deleteRecipe} data-bs-target="#deleteModal">Delete</button></> )
                      :
                      ( this.state.recipe.likes_status == 0 ?  (<><a onClick={this.like} className="btn btn-outline " style={{'radius':'50%'}}><i class="fas fa-thumbs-up" style={{'font-size':'27px','color':'grey'}} ></i></a><h6>{this.state.recipe.likes} Likes</h6></>)
                       :
                        (<><a onClick={this.like} className="btn btn-outline " style={{'radius':'50%'}}><i class="fas fa-thumbs-up" style={{'font-size':'27px','color':'blue'}} ></i></a><h6>{this.state.recipe.likes} Likes</h6></>) 
                       
                      )}
                      
                     
                    </div>
                  </div>
                </div>
                 </div>
      <div className="row justify-content-center m-2">
        <div className="col col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xxs-8">
                <div className="card shadow-sm ">
                    <h5>Comments</h5>
                   
                
                {this.state.getcomments.map((comment)=>(

                    <div className="row m-1">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-xxs-2">
                            <img style={{height:'40px', width:'40px'}} src={comment.photo} id="image-user" alt=""/>
                        </div>
                        
                        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
                        <h5>{comment.user_name}</h5>
                         <div className="col"></div><><h6 >{comment.date_created}</h6></> 
                         <p>{comment.message}</p>
                         {comment.user_name == this.props.username ? (<button className="btn btn-danger" key={comment.id} onClick={() => this.deleteComment(comment.id)} data-bs-dismiss="modal"><i className="fas fa-trash-alt"></i></button> ):(<></>)}
                         <hr className="style10"></hr>

                      
                        </div>
                        
                        
                    </div>
                
                ))}
                <div className="row justify-content-center">
                
                    <div className="col col-xxl-8 col-sm-12 col-xxs-12">
                    <form onSubmit ={(e)=>this.createComment(e)}  className="form-detail" action="#" method="post" id="myform">
                                
                                <div className="mb-3 form-row">
                                <label for="comment" className="form-label"></label>
                               
                                </div>
                                {/* <input type="text" placeholder="Add message" name="username" id="comment" className="input-text"></input>
                                <input type="submit" name="Sign In" className="btn btn-outline-secondary input-text form-control" value="comment"></input> */}

                                <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Add a comment" id="comment"  aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                                <button  type="submit" className="btn btn-outline-secondary input-text " id="button-addon2">Button</button>
                                </div>           
                                
                            </form>    
                         

                    </div>
                    
                </div>
                           
                </div>  
            </div>         
      </div>  
 </div>
                  
      
            )}


        
    }
}









