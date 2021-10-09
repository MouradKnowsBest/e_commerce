import React from 'react';

import useStyles from './styles';

const Footer = ( ) => {
    const classes = useStyles();


    return (
        <div classeName={classes.text}>
                    <p>
                        @2020 E-commerce. All rights reserved | website created by 
                        <a  style={{color: 'purple', fontSize: '15px', marginBottom: '10px'}}
                            href="https://portfolio-assirem-dev.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"> 

                         Assirem Dev 
                        
                        </a> 

                        <spin> | </spin>
                        
                        <a style={{color: 'purple', fontSize: '15px', marginBottom: '10px'}} 
                                className="contactez__nous" 
                                href="https://www.assiremdev.com/contact" 
                                target="_blank" 
                                rel="noopener noreferrer">

                         Contact Us 

                        </a>
                    </p>
        </div>
    )
}

export default Footer
