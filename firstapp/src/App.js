import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import { Container, Nav, Navbar } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react"
import { CategoryScreen } from './components/category/CategoryScreen';
import { SubcategoryScreen } from './components/subcategory/SubcategoryScreen';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <FeatherIcon icon="home"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">Categoria</Link>
            <Link to={"/subcategory"} className="nav-link">SubCategoria</Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path={"/"} element={<CategoryScreen/>}></Route>
          <Route path={"/subcategory"} element={<SubcategoryScreen/>}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default App;