import React, { Component } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';
import './LeftPanel.css';

export default class LeftPanel extends Component {
    render() {
        return (

          
          <div class="wrapper">
    
    <nav id="sidebar">
        
        <div class="sidebar-header">
            <h3>Main Menu</h3>
        </div>

        <ul class="list-unstyled components">
            
            <li>
                <a href="/favourites">Favourites</a>
            </li>
            <li>
                <a href="/contacts">Contacts</a>
            </li>
            <li>
                <a href="/allchefs">All Chefs</a>
            </li>
        </ul>
    </nav>

</div>
            
            
            

            
              

             
        )
    }
}
