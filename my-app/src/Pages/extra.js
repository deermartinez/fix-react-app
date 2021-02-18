import React, { Component } from 'react'
import {Comtainer, Row, Col} from 'reactstrap';





class extra extends Component {
    render() {
        return (
            <div>
                <container>
                    <row>
                        <col>
                        <iframe></iframe>
                        </col>

                        <col>
                        <p style={{
                                backGroundColor: "#bb0000",
                                color: "white",
                                fontSize: "55px",
                                marginRight: "10px"
                            }}>
                                <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.google.com" class="fa fa-google"></a>
                                <a href="https://www.linkedin.com" class="fa fa-linkedin"></a>
                                <a href="https://www.youtube.com" class="fa fa-youtube"></a>
                                <a href="https://www.instagram.com" class="fa fa-instagram"></a>
                            </p>
                        </col>
                    </row>
                </container>
                
            </div>
        )
    }
}


export default extra;




// const { Component } = require("react")


