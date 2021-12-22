import React from "react";
import { Header } from "grommet";
import "./Header.css"
import { grommet, Box, border, Image } from "grommet";


export const BrewReviewHeader = () => {
    return(
        <Box className="BrewReviewHeader"  border={{ color: '#481D24', size: 'small' }} pad='small' Label="Brew Review"
            border={{color: '#481D24', size: 'large'}} pad="small"> <h1 className="headerText">Brew Review</h1>
            <Image  width="150px" height="135" alignSelf="center"  src="https://pixabay.com/get/g8b1fc29f466ad9309770d94b45fc9cc406f12a80531c8f9ed021a036f73ad3ade4214160d0160d3a76e7c37a510e7113e3f2761e9cf84ad6679ad853c135216b4991b1c8f5b7897a4a39960e3b592fb5_640.png"/> 
        </Box>
        
    )
}