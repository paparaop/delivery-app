import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { User} from './components/User'
import { Client} from './components/Client'
import { Admin} from './components/Admin'
import { Dashboard } from './components/Dashboard';

function App() {
  return (
  <Container>
      <Routes>
      <Route path='/' element={<Dashboard />} />
        <Route path='/user' element={<User />} />
        <Route path='/client' element={<Client />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
  </Container>
  )
}

export default App;
