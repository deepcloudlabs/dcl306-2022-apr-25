import {Link} from "react-router-dom";
import CardHeader from "../components/bootstrap/CardHeader";
import CardBody from "../components/bootstrap/CardBody";
import Card from "../components/bootstrap/Card";
import Container from "../components/bootstrap/Container";

export default function PlayerLoses(props) {
    return (
        <>
            <p></p>
            <Container>
                <Card>
                    <CardHeader title="You have lost the game!"/>
                    <CardBody>
                        <Link to="/">Would you like to play again?</Link>
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}