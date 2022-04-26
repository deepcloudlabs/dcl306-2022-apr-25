import {Link} from "react-router-dom";
import Container from "../components/bootstrap/Container";
import Card from "../components/bootstrap/Card";
import CardHeader from "../components/bootstrap/CardHeader";
import CardBody from "../components/bootstrap/CardBody";

export default function PlayerWins(props) {
    return (
        <>
            <p></p>
            <Container>
                <Card>
                    <CardHeader title="Good Game!"/>
                    <CardBody>
                        <Link to="/">Would you like to play again?</Link>
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}