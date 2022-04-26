import CardHeader from "../bootstrap/CardHeader";
import CardBody from "../bootstrap/CardBody";
import Card from "../bootstrap/Card";
import Badge from "../bootstrap/Badge";

export default function GameConsole(props) {
    return (
        <Card>
            <CardHeader title="Game Console"/>
            <CardBody>
                <Badge id="gamelevel"
                       label="Game Level"
                       value={props.game.gameLevel}></Badge>
                <Badge id="tries"
                       label="Tries"
                       value={props.game.numberOfMoves + " of " + props.game.maxNumberOfMoves}></Badge>
                <Badge id="lives"
                       label="Lives"
                       value={props.game.lives}></Badge>
                <Badge id="counter"
                       label="Counter"
                       value={props.game.counter}></Badge>
                <div className="form-group">
                    <label htmlFor="guess">Guess:</label>
                    <input type="text"
                           className="form-control"
                           id="guess"
                           name="guess"
                           onChange={props.onChange}
                           value={props.game.guess}></input>
                    <button onClick={props.onPlay}
                            className="btn btn-success">Play
                    </button>
                </div>
            </CardBody>
        </Card>
    );
}