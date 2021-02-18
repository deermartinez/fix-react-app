import React, {Component} from 'react';
import Navbar from "../Components/navbar"
import section from "../Components/section"



class home extends Component{
    render(){
        return(
            <>

            <Navbar />
            <h1
            style = {{
                textAlign:"center",
                
            }}>h1 in home page</h1>
            </>
        )
    }
}


export default home;