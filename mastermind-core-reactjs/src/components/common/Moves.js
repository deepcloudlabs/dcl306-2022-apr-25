import CardHeader from "../bootstrap/CardHeader";
import CardBody from "../bootstrap/CardBody";
import Table from "../bootstrap/Table";
import MoveEvaluation from "./MoveEvaluation";
import Card from "../bootstrap/Card";

export default function Moves(props) {
    return (
        <Card>
            <CardHeader title="Moves"/>
            <CardBody>
                <Table headers="No,Guess,Message">
                    <tbody>
                    {
                        props.moves.map((move, index) =>
                            <tr key={move.guess + index.toString()}>
                                <td>{index + 1}</td>
                                <td>{move.guess}</td>
                                <td><MoveEvaluation move={move}/></td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
}