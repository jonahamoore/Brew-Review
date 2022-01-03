import React from 'react';
import { Anchor, Box, Header, Menu, Nav, ResponsiveContext } from 'grommet';
import { Link } from 'react-router-dom';

export const CollapsableNav = () => (
  
  <Header  background="#646E78" pad="medium">
    <Box className='NavBarBox' direction="row" align="center" gap="small" >
      <h3> Welcome to Brew Review!  I hope your time here makes sense. </h3>
    </Box>
    <ResponsiveContext.Consumer>
      {(responsive) =>
        responsive === 'small' ? (
          <Menu
           label="Click me"
            items={[
              { label: 'This is', onClick: () => {} },
              { label: 'The Menu', onClick: () => {} }
            ]}
          />
        ) : (
         <Nav direction="row" pad="small" className="navBar">
            <Anchor href="coffee"  label="Coffee Reviews" />
            <Anchor href="coffeeQuiz" label="Take the Coffee quiz here" />
         </Nav>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
);


