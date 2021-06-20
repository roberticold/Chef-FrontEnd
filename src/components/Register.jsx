import React, { Component } from 'react'
import './Register.css';
import { Redirect } from 'react-router-dom'


export default class Register extends Component {
    



    
    render() {
        if (this.props.isSignedIn){
            return <Redirect to="/" />
        
        }if (this.props.redirect=="/login"){
            return <Redirect to={this.props.redirect} />
        
        }
        return (
            <div>

                
                    
                    <div className="page-content">
                    <div className="form-v7-content">
                        <div className="form-left">
                        <img className='m-3'src="/images/signup.png" alt="form"></img>
                            
                        </div>
                        <form onSubmit ={(e)=>this.props.onCreateUser(e)}  className="form-detail" action="#" method="post" id="myform">
                            <div className="form-row">
                                <label for="username">USERNAME</label>
                                <input type="text" name="username" id="username" className="input-text"></input>
                            </div>
                            <div className="form-row">
                                <label for="your_email">E-MAIL</label>
                                <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"></input>
                            </div>
                            <div className="form-row">
                                <label for="password">PASSWORD</label>
                                <input type="password" name="password" id="password" className="input-text" required></input>
                            </div>
                            <div className="form-row">
                                <label for="comfirm_password">CONFIRM PASSWORD</label>
                                <input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required></input>
                            </div>
                            <div className="form-row-last">
                                <input type="submit" name="register" className="register" value="Sign Up"></input>
                                <p>Or<a href="/Login">Sign in</a></p>
                            </div>
                        </form>
                    </div>
                    

                        </div>
            </div>
        )
    }
}
