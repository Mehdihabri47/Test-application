import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibrary from '@material-ui/icons/VideoLibrary';

import NotAvailable from './Pages/NotAvailable';
import Home from './Pages/Home';
import VideoListContainer from './Pages/VideoList/VideoList.container';
import { colors } from './muiColors';

// import { ROLES } from './models/User/User.constants'; used to restrict menu access

const nodeEnv = process.env.REACT_APP_ENVIRONMENT;

// This file is used to construct the side menu and the router
// REQUIRED object keys :
// - name (string) : the name of the menu entry - it ill be used as a translation key for the sidemenu.text.js file
// - path (string) : the path of the component route for react-router-dom
// - icon (react component) : an icon that will be displayed on on the left side of the name
// - component (function returning a react component) : the component to be displayed on the given path
// OPTIONNAL object keys :
// - skipDisplay : does not display the menu entry for this element
// - subitems : an array of a objects with above keys that will create subroutes
// - homePage : - displayButton (boolean): menu that appears on the home page
//              - buttonColor : cardMenu background color
//              - icon : MUI icon component (use fontSize="inherit" on it)

const MENU_ENTRIES = [
  {
    name: 'home',
    path: '/home',
    icon: <HomeIcon />,
    component: () => <Home />,
  },
  {
    name: 'sampleMenu',
    path: '/videos',
    icon: <VideoLibrary />,
    component: () => <VideoListContainer />,
    homePage: {
      displayButton: true,
      buttonColor: colors.blue,
      icon: <VideoLibrary fontSize="inherit" />,
    },

    subItems: [
      {
        name: 'Create',
        path: '/new',
        component: () => <NotAvailable />,
      },
      {
        name: 'Edit',
        path: '/:videoId/edit',
        component: () => <NotAvailable />,
      },
    ],
  },
];

export default MENU_ENTRIES;
