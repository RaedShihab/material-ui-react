import React from 'react';
import {Paper, Tabs} from '@material-ui/core';
// import {Tab} from '@material-ui/Tab';
import Tab from '@material-ui/core/Tab';
export default props => <div>
    <Paper square>
  <Tabs centered variant='fullWidth' indicatorColor="primary"
     textColor="primary" >
    <Tab label="Active" />
    <Tab label="Disabled" disabled />
    <Tab label="Active" />
    
  </Tabs>
</Paper>
</div>