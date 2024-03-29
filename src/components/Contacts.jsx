import React, { Component } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom'


export default class Contacts extends Component {
    constructor(){
        super();

        this.state = {
            contacts: [],
            redirect: null
            
        }
    }

    componentDidMount(){
        
        
        fetch('https://chef-r.herokuapp.com/api/getcontacts',{
            method: "POST",
            headers: {
                
                "Content-Type": "application/json", 
                
            },
            body:JSON.stringify( {
      
      
                "username":sessionStorage.getItem("user_name"),
                
                
      
      
            })



        })
            .then(res => res.json())
            .then(data => {
                
                
                console.log(data)
                
                this.setState({
                    
                    contacts: data,

                   
                })

            }).catch((error) => {
                console.error(error);
                
            })
    }

    deleteContact= (id) => {
        
       
        fetch(`https://chef-r.herokuapp.com/api/contact/delete/${id}/${sessionStorage.getItem('user_name')}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                    
                contacts: data,

               
            })
        })
    }


    render() {
        if (!this.props.isSignedIn){
            return <Redirect to='/' />
        
        }return (

          
            <div className="row justify-content-center m-2">
            <div className="col col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-xxs-8">
                    <div className="card shadow-sm ">
                        <h5>Contacts</h5>
                       
                    
                    {this.state.contacts.map((comment)=>(
    
                        <div className="row m-1 mt-3">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 col-xxs-2">
                                <img style={{height:'40px', width:'40px'}} src={comment.photo} id="image-user" alt=""/>
                            </div>
                            
                            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 col-xxs-10">
                            <h5>{comment.username}</h5> <Link to={`/ChefsRecipes/${comment.id}`}><a className="btn btn-outline" ><i class="far fa-file"></i></a></Link>  <a className="btn btn-outline" key={comment.id} onClick={() => this.deleteComment(comment.id)} data-bs-dismiss="modal"><i class="fab fa-facebook-messenger"></i></a><a className="btn btn-outline" key={comment.id} onClick={() => this.deleteContact(comment.id)} data-bs-dismiss="modal"><i class="far fa-trash-alt"></i></a>
                             
                             
                             <hr class="style10"></hr>
    
                          
                            </div>
                            
                            
                        </div>
                    
                    ))}
                    <div className="row justify-content-center">
                    
                        
                        
                    </div>
                               
                    </div>  
                </div>         
          </div> 
            
            
            

            
              

             
        )
    }
}