import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Createrecipe from './components/Createrecipe';
import Userrecipes from './components/Userrecipes';
import Allrecipes from './components/Allrecipes';
import { Redirect } from 'react-router-dom'
import Editrecipe from './components/Editrecipe'
import RecipeEdit from './components/RecipeEdit'
import 'bootstrap/dist/css/bootstrap.css';
import { StickyContainer, Sticky } from 'react-sticky';
import {BrowserRouter as Router} from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile';
import AllChefs from './components/AllChefs';
import Contacts from './components/Contacts';
import Favourites from './components/Favourites';
import ChefsRecipes from './components/ChefsRecipes';




export default class App extends Component {
  constructor(){
    
    
    super();

    this.state={

      isSignedIn:sessionStorage.getItem('login'),
      redirect: sessionStorage.getItem('redirect'),
      userId:sessionStorage.getItem('user_id'),
      username:sessionStorage.getItem('user_name'),
      profile_photo:sessionStorage.getItem('profile_photo'),
      recipe_photo:"https://res.cloudinary.com/personal-cloud/image/upload/v1622477313/Sportify%20Images/recipies2_j6srie.jpg"



    }


  }
  
  
  


  createUser = (e)=>{
    e.preventDefault();
    let username = e.target.username.value;
    let email = e.target.your_email.value;
    let password = e.target.password.value;
    let password_confirmed = e.target.comfirm_password.value;

    if(password==password_confirmed){
      fetch('https://chef-r.herokuapp.com/api/users',{
        method: "POST",
        headers: {
            
            "Content-Type": "application/json", 
            
        },
        body:JSON.stringify( {


            "username":username,
            "email":email,
            "password":password


        })



    }).then(res => res.json())
    .then(data => {
        
        this.setState({
            redirect: '/login'
            

        }
        
    )
    }).catch(error => console.log(error))
    

    }else{
      toast.error('It seems like your passwords does not match. Try again')
    }
    
    

    


}    


createRecipie = (e)=>{
  e.preventDefault();
  let name = e.target.name.value;
  let preparation = e.target.preparation.value;
  let user_id = sessionStorage.getItem('user_id');
  let user_name=sessionStorage.getItem('user_name')
  
  
  fetch('https://chef-r.herokuapp.com/api/recipie',{
      method: "POST",
      headers: {
          
          "Content-Type": "application/json", 
          
      },
      body:JSON.stringify( {


          "name":name,
          "preparation":preparation,
          "user_id":user_id,
          "user_name":user_name,
          "recipe_photo":this.state.recipe_photo


      })



  }).then(res => res.json())
  .then(data => {
      
      this.setState({
          redirect: '/userrecipes'
          
          

      }
      
  )
  }).catch(error => console.log(error))
  

}



loginUser = (e)=>{
  e.preventDefault();
  let username = e.target.username.value;
  let password = e.target.password.value;
  
  
  
  fetch('https://chef-r.herokuapp.com/api/login',{
      method: "POST",
      headers: {
          
          "Content-Type": "application/json",
          
          
      },
      body:JSON.stringify( {


          "username":username,
          "password":password,
          


      })



  }).then(res => res.json())
  .then(data => {
    if(data.username){
    console.log(data.photo)
    toast.success('You are now Logged In!!')
    console.log('user created')
    sessionStorage.setItem('login',true)
    sessionStorage.setItem('user_id', data.id)
    sessionStorage.setItem('user_name', data.username)
    sessionStorage.setItem('redirect', '/')
    sessionStorage.setItem('profile_photo',data.photo)

    }else{
      toast.error('Sorry, try again')
    }
    
    
    
      this.setState({
          redirect: '/',
          isSignedIn:sessionStorage.getItem('login')
          
            
         
      }
      
      
  )
  }).catch(error => console.log(error))
  
  


}    

LogOut = () =>{
  sessionStorage.clear()
  this.setState({
    
    isSignedIn:false
    
      


}

)
  
  

}

uploadImageProfile=(files)=>{
  const formData= new FormData()
  formData.append("file",files[0])
  formData.append('upload_preset','amcilv8mprofile')
  fetch('https://api.cloudinary.com/v1_1/personal-cloud/image/upload', {
    method: "POST",
    body:formData
     
    
})
    .then(res => res.json())
    .then(data => {
      
      console.log(data.url)
      sessionStorage.setItem('profile_photo',data.url)
        this.setState({
          
    
          profile_photo:data.url
  
      
      })
      fetch('https://chef-r.herokuapp.com/api/profile_photo_change', {
        method: "PUT",
        headers: {
              
          "Content-Type": "application/json", 
          
      },
      body:JSON.stringify( {
    
          "user_name":sessionStorage.getItem('user_name'),
          "photo":this.state.profile_photo
          
      })
        
    })
        .then(res => res.json())
        .then(data => {
          console.log(data)
            
        })
        
    })

    

}


uploadImageRecipe=(files)=>{
  const formData= new FormData()
  formData.append("file",files[0])
  formData.append('upload_preset','sgrdc6ai')
  fetch('https://api.cloudinary.com/v1_1/personal-cloud/image/upload', {
    method: "POST",
    body:formData
     
    
})
    .then(res => res.json())
    .then(data => {
     
        this.setState({
          recipe_photo:data.url
      }) 
    })
}


updateUser = (e)=>{
  e.preventDefault();
  let old_user=sessionStorage.getItem("user_name")
  let username = e.target.username.value;
  let email = e.target.your_email.value;
  let password = e.target.password.value;
  let password_confirmed = e.target.comfirm_password.value;

  if(password==password_confirmed){
    fetch('https://chef-r.herokuapp.com/api/profile_info',{
      method: "PUT",
      headers: {
          
          "Content-Type": "application/json", 
          
      },
      body:JSON.stringify( {

          "old_user":old_user,
          "username":username,
          "email":email,
          "password":password


      })



  }).then(res => res.json())
  .then(data => {
      toast.success('Your contact information has been succesfully changed!!')
      sessionStorage.setItem('login',true)
      sessionStorage.setItem('user_id', data.id)
      sessionStorage.setItem('user_name', data.username)
      sessionStorage.setItem('redirect', '/')
      sessionStorage.setItem('profile_photo',data.photo)

      
      this.setState({
          redirect: '/allrecipes'
          

      }
      
  )
  }).catch(error => console.log(error))
  

  }else{
    toast.error('It seems like your passwords does not match. Try again')
  }
 
}  


deleteAccount= () => {
        
       
  fetch(`https://chef-r.herokuapp.com/api/account/delete/${sessionStorage.getItem('user_name')}`, {
      method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    this.LogOut()

    
      
      
  })
}





  render() {

  

    
    
    
    return (
      
      
      
      <React.Fragment>
        <Navbar isSignedIn={this.state.isSignedIn} profile_photo1={this.state.profile_photo} onLogOut={this.LogOut} /> 
        <Router>

          
          
          <ToastContainer/>
         


          <div className="container-fluid ">
                <div className="row justify-content-center">
                
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    
                    <Switch>
                    
                      <Route exact path='/register'>
                      <Register onCreateUser={this.createUser} redirect={this.state.redirect} isSignedIn={this.state.isSignedIn}/>
                      </Route>

                      <Route exact path='/login'>
                      <Login  onLoginUser={this.loginUser} redirect={this.state.redirect} isSignedIn={this.state.isSignedIn}/>
                      </Route>

                      <Route exact path='/createrecipe'>
                      <Createrecipe isSignedIn={this.state.isSignedIn} recipe_photo={this.state.recipe_photo} uploadImageRecipe={this.uploadImageRecipe} onCreateRecipie={this.createRecipie} user={this.state.userID} redirect={this.state.redirect}/>
                      </Route>
                      <Route exact path='/userrecipes'>
                      <Userrecipes />
                      </Route>
                      <Route exact path='/allrecipes' >
                      <Allrecipes username={this.state.username}/>
                      </Route>
                      <Route exact path='/allchefs' >
                      <AllChefs />
                      </Route>
                      <Route exact path='/contacts' >
                      <Contacts />
                      </Route>
                      <Route exact path='/favourites' >
                      <Favourites />
                      </Route>
                      <Route exact path='/profile' >
                      <Profile onDeleteAccount={this.deleteAccount} onUpdateUser={this.updateUser} uploadImageProfile={this.uploadImageProfile} redirect={this.state.redirect}/>
                      

                      </Route>
                      <Route exact path='/ChefsRecipes/:id' render={({ match }) => <ChefsRecipes match={match} />} />

                      <Route exact path='/edit/:id' render={({ match }) => <Editrecipe match={match} username={this.state.username} />} />
                      <Route exact path='/edit1/:id' render={({ match }) => <RecipeEdit match={match} uploadImageRecipe={this.uploadImageRecipe} recipe_photo={this.state.recipe_photo} username={this.state.username}/>} />   
                    
                    </Switch>
                     
                    </div>
                   
                    

                  </div>
                </div>
         
            
        </Router>
      </React.Fragment>     
        
        
    
      
    )
  }
  
}

