import {Grid, Row} from 'react-native-easy-grid';

import AppBar from './AppBar';
import React from 'react';
import {Text} from 'react-native-paper';

const App = () => (
  <>
    <AppBar />
    <Grid>
      <Row>
        <Text>oi</Text>
      </Row>
    </Grid>
  </>
);

export default App;
