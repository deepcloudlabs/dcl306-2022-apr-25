import CardHeader from "./components/CardHeader";
import Badge from "./components/Badge";
import Move from "./model/Move";
import MoveEvaluation from "./components/MoveEvaluation";
import {useEffect, useState} from "react";

function App2(props) { // hooks -> stateful
    let initialGameState = {
        secret: createSecret(3),
        gameLevel: 3,
        moves: [],
        lives: 3,
        numberOfMoves: 0,
        maxNumberOfMoves: getMaxNumberOfMoves(3),
        counter: getMaxCounter(3),
        guess: 123,
    };
    let initialStatisticsState = {
        wins: 0,
        loses: 0
    }

    const [game, setGame] = useState(initialGameState);
    const [statistics, setStatistics] = useState(initialStatisticsState);

    useEffect(() => {
        let timerId = setInterval(countDown, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, [game, countDown]);

    function countDown() {
        let newGame = {...game};
        newGame.counter--;
        if (newGame.counter <= 0) {
            newGame.lives--;
            if (newGame.lives <= 0) {
                //TODO: Player loses
            } else {
                initGame(newGame);
            }
        }
        setGame(newGame);
    }

    function handleInputChange(e) {
        let value = Number(e.target.value);
        let newGame = {...game}; // cloning the state
        newGame.guess = value; //
        setGame(newGame);
    }

    function play() {
        let newGame = {...game}; // cloning the state
        //region change the state
        newGame.numberOfMoves++;
        if (newGame.guess === newGame.secret) {
            newGame.gameLevel++;
            if (newGame.gameLevel > 10) {
                //TODO: Player wins
            }
            initGame(newGame);
        } else {
            if (newGame.numberOfMoves >= newGame.maxNumberOfMoves) {
                newGame.lives--;
                if (newGame.lives <= 0) {
                    //TODO: Player loses
                } else {
                    initGame(newGame);
                }
            } else {
                newGame.moves.push(createMove(newGame.guess, newGame.secret));
            }
        }
        //endregion
        setGame(newGame);
    }

    function initGame(game) {
        game.secret = createSecret(game.gameLevel);
        game.moves = [];
        game.numberOfMoves = 0;
        game.counter = getMaxCounter(game.gameLevel);
        game.maxNumberOfMoves = getMaxNumberOfMoves(game.gameLevel);
    }

    function createMove(guess, secret) {
        let guessAsString = guess.toString();
        let secretAsString = secret.toString();
        let perfectMatch = 0;
        let partialMatch = 0;
        for (let i = 0; i < guessAsString.length; ++i) {
            let g = guessAsString.charAt(i);
            for (let j = 0; j < secretAsString.length; ++j) {
                let s = secretAsString.charAt(j);
                if (s === g) {
                    if (i === j) {
                        perfectMatch++;
                    } else {
                        partialMatch++;
                    }
                }
            }
        }
        return new Move(guess, perfectMatch, partialMatch);
    }

    function createDigit(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function createSecret(level) {
        let digits = [];
        digits.push(createDigit(1, 9));
        while (digits.length < level) {
            let digit = createDigit(0, 9);
            if (digits.includes(digit)) continue;
            digits.push(digit);
        }
        return digits.reduce((sum, n) => 10 * sum + n, 0);
    }

    //region get constraints
    function getMaxNumberOfMoves(level) {
        return 10 + 5 * (level - 3);
    }

    function getMaxCounter(level) {
        return 60 + 10 * (level - 3);
    }

    //endregion

    return ( // view model <--> view (component-based)
        <div className="container">
            <div className="card">
                <CardHeader title="Game Console"/>
                <div className="card-body">
                    <Badge id="gamelevel"
                           label="Game Level"
                           value={game.gameLevel}></Badge>
                    <Badge id="tries"
                           label="Tries"
                           value={game.numberOfMoves + " of " + game.maxNumberOfMoves}></Badge>
                    <Badge id="lives"
                           label="Lives"
                           value={game.lives}></Badge>
                    <Badge id="counter"
                           label="Counter"
                           value={game.counter}></Badge>
                    <div className="form-group">
                        <label htmlFor="guess">Guess:</label>
                        <input type="text"
                               className="form-control"
                               id="guess"
                               name="guess"
                               onChange={handleInputChange}
                               value={game.guess}></input>
                        <button onClick={play}
                                className="btn btn-success">Play
                        </button>
                    </div>
                </div>
            </div>
            <p></p>
            <div className="card">
                <CardHeader title="Moves"/>
                <div className="card-body">
                    <table className="table table-bordered table-responsive table-hover table-striped">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Guess</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            game.moves.map((move, index) =>
                                <tr key={move.guess + index.toString()}>
                                    <td>{index + 1}</td>
                                    <td>{move.guess}</td>
                                    <td><MoveEvaluation move={move}/></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App2;
