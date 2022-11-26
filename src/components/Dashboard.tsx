import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export function Dashboard() {

    const navigate = useNavigate();

    return <Container>
        <ButtonGroup vertical>
            <Button type="button" onClick={() => navigate('/user')}>Restarents List</Button>
            <Button type="button" onClick={() => navigate('/client')}>Hotel Owner</Button>
            <Button type="button" onClick={() => navigate('/admin')}>Admin: JayaRaj(+91: 9666069366)</Button>
      </ButtonGroup>
    </Container>
}