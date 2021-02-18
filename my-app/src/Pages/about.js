import React, {Component} from "react";
import Header from "../Components/header";


// //whenever coding a pae, always need a render before the return
// //return our page content on the DOM

class about extends Component {
    render(){
        return(
            <>
            <Header/>
        <h1> This is about my page{new Date}</h1>
            </>
        )
    }
}

export default about;