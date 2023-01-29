import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {  Container, Row, Col, Nav, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateClient from './components/CreateClient'
import EditClient from './components/EditClient';
import ClientList from './components/ClientList';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <Container className='contain'>
            <Nav className=' notch'>
              <Link to={'/'} ><Button variant='outline-light'>Home</Button></Link>
              <Link to={'/ClientList'} className='ms-3'><Button variant='outline-light'>List Of Clients</Button></Link>
              </Nav>
          </Container>
      </header>
      <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact
                   path="/" 
                   component={CreateClient}>
                  </Route>
                  <Route exact
                   path="/EditClient/:id" 
                   component={EditClient}>
                  </Route>
                  <Route exact
                   path="/ClientList" 
                   component={ClientList}>
                  </Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
         </Router>
  );
}

export default App;
