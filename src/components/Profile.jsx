import React, { Component } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {
    

    

    render() {
        if (this.props.redirect==='/allrecipes'){
            return <Redirect to={'/allrecipes'} />

            

           
        }
        return (
            <div className="container-fluid ">
                <div className="row justify-content-center mt-3">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img style={{height:'50px', width:'50px'}} src={sessionStorage.getItem('profile_photo')} id="image-user" alt=""/>
                </div>
                </div>
                <div className="row justify-content-center mt-3">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <input type="file" onChange={(e)=>{this.props.uploadImageProfile(e.target.files)}}/>
                </div>
                </div>
                <div className="row justify-content-center mt-3">
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div className="page-content">
                    <div className="form-v7-content">
                        
                        <form onSubmit ={(e)=>this.props.onUpdateUser(e)}  className="form-detail" action="#" method="post" id="myform">
                            <div className="form-row">
                                <label for="username">NEW USERNAME</label>
                                <input type="text" name="username" id="username" className="input-text"></input>
                            </div>
                            <div className="form-row">
                                <label for="your_email">NEW E-MAIL</label>
                                <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
                            </div>
                            <div className="form-row">
                                <label for="password">NEW PASSWORD</label>
                                <input type="password" name="password" id="password" className="input-text" required></input>
                            </div>
                            <div className="form-row">
                                <label for="comfirm_password">CONFIRM NEW PASSWORD</label>
                                <input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required></input>
                            </div>
                            <div className="form-row-last">
                                <input type="submit" name="register" className="register" value="Update"></input>
                               
                            </div>
                            
                            
                        </form>
                        
                    </div>
                    

                        </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div className="page-content">
                    <div className="form-v7-content">
                        
                        <form onSubmit ={(e)=>this.props.onUpdateUser(e)}  className="form-detail" action="#" method="post" id="myform">
                        <label for="comfirm_password">Delete Account</label>
                            <div className="form-row-last">
                                <input type="submit" name="register" className="register" value="Delete"></input>
                               
                            </div>
                        </form>
                    </div>
                    

                        </div>
                </div>
                
                </div>
                
                
                    
                    
                    
                    

                      
            </div>
        )
    }
}
