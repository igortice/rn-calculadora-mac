import {Grid, Row} from 'react-native-easy-grid';

import React from 'react';
import {Text} from 'react-native-paper';

const App = () => {
  return (
    <Grid>
      <Row size={4} style={{backgroundColor: 'gray'}} />
      <Row size={96} style={{backgroundColor: 'green'}}>
        <Text>oi</Text>
      </Row>
    </Grid>
  );
};

export default App;
