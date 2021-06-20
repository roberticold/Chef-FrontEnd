import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    render() {
        if (this.props.isSignedIn){
            

            return <Redirect to={this.props.redirect} />
        }
        return (
            <div>
                
                <div className="row justify-content-center m-3">
                <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                        
                    
                    </div>
                </div>
                 <div className="page-content">
                 
                    <div className="form-v7-content">
                    
                        <div className="form-left">
                             
                            <img className='m-3'src="/images/signin.png" alt="form"></img>
                            
                            
                        </div>
                        
                        <form onSubmit ={(e)=>this.props.onLoginUser(e)}  className="form-detail" action="#" method="post" id="myform">
                            <div className="form-row">
                                
                                <label for="username">USERNAME</label>
                                <input type="text" name="username" id="username" className="input-text"></input>
                            </div>
                            
                            <div className="form-row">
                                <label for="password">PASSWORD</label>
                                <input type="password" name="password" id="password" className="input-text" required></input>
                            </div>
                            
                            <div className="form-row-last">
                                <input type="submit" name="Sign In" className="register" value="Sign In"></input>
                                <p>Or<a href="/Register">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                    

                        </div>
            </div>
                
            
        )
    }
}
