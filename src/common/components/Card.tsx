import Card from 'react-bootstrap/Card';
import {StatsCard} from "../../types/proptypes";

function StatsCard(props:StatsCard) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.quantity}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.label}</Card.Subtitle>
                </Card.Body>
            </Card>
        </>

    );
}

export default StatsCard;