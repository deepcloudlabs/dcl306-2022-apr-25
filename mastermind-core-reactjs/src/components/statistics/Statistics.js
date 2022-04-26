import CardHeader from "../bootstrap/CardHeader";
import CardBody from "../bootstrap/CardBody";
import Badge from "../bootstrap/Badge";
import Card from "../bootstrap/Card";

export default function Statistics(props){
    return(
        <Card>
            <CardHeader title="Statistics"/>
            <CardBody>
                <Badge id="wins"
                       label="Wins"
                       value={props.statistics.wins}></Badge>
                <Badge id="loses"
                       label="Loses"
                       value={props.statistics.loses}></Badge>
            </CardBody>
        </Card>
    );
}