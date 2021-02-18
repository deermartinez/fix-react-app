import React from 'react';
// import "../Styles/header.css";


function header(){
    return(
        <header className = "header" 
        style ={{
        backgroundColor: "blue",
        height: 50,
        textAlign: "center",

        }}>
            <h1> HEADER ONE</h1> 
            <h2>HEADER TWO</h2>


            </header>
    )
}

export default header;