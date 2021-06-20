import React, { Component } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

export default class Profile extends Component {
    constructor(){
        super();

        this.state = {
            info: {},
            
            
        }
    }

    componentDidMount(){
        
        
        fetch(`https://chef-r.herokuapp.com/api/getprofile/${sessionStorage.getItem('user_name')}`



        )
            .then(res => res.json())
            .then(data => {
                
                
                console.log(data)
                
                this.setState({
                    
                    info: data,

                   
                })

            }).catch((error) => {
                console.error(error);
                
            })
    }


    
    


    

    render() {
        if (this.props.redirect==='/allrecipes'){
            return <Redirect to={'/allrecipes'} />

            

           
        }
        
        return (
            <div>
                <div className="row justify-content-center m-3">
                 <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <img style={{height:'50px', width:'50px'}} src={sessionStorage.getItem('profile_photo')} id="image-user" alt=""/>
                </div>  
                </div>
                <div className="row justify-content-center m-3">
                 <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <input type="file" onChange={(e)=>{this.props.uploadImageProfile(e.target.files)}}/>
                </div>  
                </div>  
                
                
                <div className="page-content">
                    <div className="form-v7-content">
                        
                        <form onSubmit ={(e)=>this.props.onUpdateUser(e)}  className="form-detail" action="#" method="post" id="myform">
                            <div className="form-row">
                                <label for="username">NEW USERNAME</label>
                                <input defaultValue={this.state.info.username }type="text" name="username" id="username" className="input-text"></input>
                            </div>
                            <div className="form-row">
                                <label for="your_email">NEW E-MAIL</label>
                                <input defaultValue={this.state.info.email } type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
                            </div>
                            <div className="form-row">
                                <label for="password">NEW PASSWORD</label>
                                <input defaultValue={this.state.info.password } type="password" name="password" id="password" className="input-text" required></input>
                            </div>
                            <div className="form-row">
                                <label for="comfirm_password">CONFIRM NEW PASSWORD</label>
                                <input defaultValue={this.state.info.password } type="password" name="comfirm_password" id="comfirm_password" className="input-text" required></input>
                            </div>
                            <div className="form-row-last">
                                <input type="submit" name="register" className="register" value="Update"></input>
                               
                            </div>
                            
                            
                        </form>
                        
                    </div>
                    

                        </div>
                
                
                <div className="page-content">
                    <div className="form-v7-content">
                        
                      
                           
                            <Link to={'/'}><a onClick={this.props.onDeleteAccount} className="btn btn-danger" >DELETE ACCOUNT</a></Link>
                    </div>
                    

                        </div>
               
                
                
                
                
                    
                    
                    
                    

                </div>         
                
        )
    }
}
