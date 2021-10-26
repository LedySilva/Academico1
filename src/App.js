import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Rotas from './Rotas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Container>
          <Rotas />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;