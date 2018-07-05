import React from 'react';
import {AppBar, ToolbarGroup, FlatButton} from '@material-ui/core/'

// Defining a stateless, functional component, MyNavLinks.
// This component contains your navigation links.

const MyNavLinks = () => (
  <ToolbarGroup>
    <FlatButton label="Dashboard" containerElement={<Link to="dashboard"/>}/>
    <FlatButton label="Settings" containerElement={<Link to="settings" />}/>
    <FlatButton label="Profile" containerElement={<Link to="profile" />}/>
  </ToolbarGroup>
);


// Another stateless, functional component, MyAppBar.
// Here we are setting the iconElementRight property of Material UI's AppBar
// to the component defined above.

const NavBar = () => (
    <AppBar
      title="Brand"
      iconElementRight={<MyNavLinks />}
    />
);

export default NavBar;
