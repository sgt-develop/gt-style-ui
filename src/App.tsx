import React from 'react';

import { ThemeProvider } from 'styled-components';
import ThemeDefault from './config/themes/themeDefault';
import { GlobalStyles } from './config/globalStyles/globalStyles';

import  Stack  from './components/stack/stack';
//import  Card  from './components/card/card';
//import  Grid  from './components/grid/grid';
import  Button  from './components/button/button';
import  Typography  from './components/typography/typography';
import  Icon  from './components/icon/icon';
//import Divider from './components/divider/divider';
import AppBar from './components/appbar/appbar';
import Container from './components/container/container';
// flex-direction: row | row-reverse | column | column-reverse; 
// justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
// flex-wrap: nowrap | wrap | wrap-reverse;
// align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;

{/* <Grid variant="container" direction="row" gap="5" spacing="0" justify='space-around'>
<Grid variant="item" order="1" xs="12" sm="12" md="6" lg="3">
  <Card backgroundcolor="green" color="fff" height='250'>Card 1</Card>
</Grid>
<Grid variant="item" order="2" xs="12" sm="12" md="6" lg="3">
  <Card backgroundcolor="red" color="fff" height='250'>Card 2</Card>
</Grid>
<Grid variant="item" order="3" xs="12" sm="12" md="12" lg="3">
  <Card backgroundcolor="yellow" color="fff" height='250'>Card 3</Card>
</Grid>
<Grid variant="item" order="4" xs="12" sm="12" md="12" lg="3">
  <Card backgroundcolor="blue" color="fff" height='250'>Card 4</Card>
</Grid>
<Grid variant="item" order="5" xs="12" sm="12" md="12" lg="3">
  <Card backgroundcolor="purple" color="fff" height='250'>Card 5</Card>
</Grid>
<Grid variant="item" order="6" xs="12" sm="12" md="12" lg="3">
  <Card backgroundcolor="orange" color="fff" height='250'>Card 6</Card>
</Grid>
</Grid> 

      <Typography variant='headline_1' color='black'>Headline 1</Typography>
      <Typography variant='headline_2' color='black'>Headline 2</Typography>
      <Typography variant='headline_3' color='black'>Headline 3</Typography>
      <Typography variant='headline_4' color='black'>Headline 4</Typography>
      <Typography variant='headline_5' color='black'>Headline 5</Typography>
      <Typography variant='headline_6' color='black'>Headline 6</Typography>
      <Typography variant='subtitle_1' color='black'>Subtitle 1</Typography>
      <Typography variant='subtitle_2' color='black'>Subtitle 2</Typography>
      <Typography variant='body_1' color='black'>Body 1</Typography>
      <Typography variant='body_2' color='black'>Body 2</Typography>
      <Typography variant='caption' color='black'>Caption</Typography>
      <Typography variant='overline' color='black'>Overline</Typography>
      <br></br>
      <Icon size='normal' color='black' icon='coffee'></Icon>

      <Card backgroundcolor="fff"height='250'>
        <Typography variant='headline_6' color='black'>Headline 6</Typography>
        <Divider variant="list" type="subheader" subheader="subheader"></Divider>
        <br></br>
        <Typography variant='headline_6' color='black'>Headline 6</Typography>
        <Divider variant="vertical"></Divider>
        <Typography variant='headline_6' color='black'>Headline 6</Typography>
      </Card>
*/}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyles />
      <AppBar variant='regular' color="red">
        <Stack direction="row" spacing="4" xs="12" sm="12" md="12" lg="12" alignItems="center">
          <Icon icon="coffee" size="mini"></Icon>
          <Typography>AppBar</Typography>
          <Button>Hello</Button>
        </Stack>
      </AppBar>
      <Container>
        <Stack direction="row" spacing="10" xs="12" sm="12" md="12" lg="12">
          <Button>Hello</Button>
          <Button>Hello</Button>
          <Button>Hello</Button>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
