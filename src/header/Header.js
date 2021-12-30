import React from "react";
import { Header } from "grommet";
import "./Header.css"
import { grommet, Box, border, Image } from "grommet";


export const BrewReviewHeader = () => {
    return(
        <Box className="BrewReviewHeader"  border={{ color: '#481D24', size: 'small' }} pad='small' Label="Brew Review"
            border={{color: '#481D24', size: 'large'}} pad="small"> <h1 className="headerText">Brew Review</h1>
            <Image  width="150px" height="135" alignSelf="center"  src="https://cdn.pixabay.com/photo/2020/07/14/19/10/coffee-5405382_960_720.png"/> 
        </Box>
    )
}