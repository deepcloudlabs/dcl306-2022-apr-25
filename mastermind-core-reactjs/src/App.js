import './App.css';
import {PureComponent} from "react";
import CardHeader from "./components/CardHeader";
import Badge from "./components/Badge";
import Move from "./model/Move";
// Components: i) Stateless       ii) Stateful : App
//                function App()      class App { }
//                Badge,CardHeader    function App(){ React Hooks }
// React Framework -> Functional Programming -> this.setState( nextState )
// State Management
//    i) Stateful Component
//   ii) Context
//  iii) Rest API (server), localStorage/sessionStorage (client)
//   iv) Redux Framework

// Routing
// Validation
// 2-way Binding: View Model -- {this.state...} --> View


class App extends PureComponent {
    constructor(context, props) {
        super(context);
        this.state = { // view model
            game: {
                secret: this.createSecret(3),
                gameLevel: 3,
                moves: [],
                lives: 3,
                numberOfMoves: 0,
                maxNumberOfMoves: this.getMaxNumberOfMoves(3),
                counter: this.getMaxCounter(3),
                guess: 123,
            },
            statistics: {
                wins: 0,
                loses: 0
            }
        };
    }

    handleInputChange = (e) => {
        let value = Number(e.target.value);
        let game = {...this.state.game}; // cloning the state
        game.guess = value; //
        this.setState({game}, () => {
            console.log(this.state.game.guess);
        }); // async
    }

    play = (e) => {
        let game = {...this.state.game}; // cloning the state
        //region change the state
        game.numberOfMoves++;
        if (game.guess === game.secret) {
            game.gameLevel++;
            if (game.gameLevel > 10) {
                //TODO: Player wins
            }
            this.initGame(game);
        } else {
            if (game.numberOfMoves >= game.maxNumberOfMoves) {
                game.lives--;
                if (game.lives === 0) {
                    //TODO: Player Loses
                } else {
                    this.initGame(game);
                }
            } else {
                game.moves.push(this.createMove(game.guess, game.secret));
            }
        }
        //endregion
        this.setState({game});
    }

    initGame = (game) => {
        game.secret = this.createSecret(game.gameLevel);
        game.moves = [];
        game.numberOfMoves = 0;
        game.counter = this.getMaxCounter(game.gameLevel);
        game.maxNumberOfMoves = this.getMaxNumberOfMoves(game.gameLevel);
    }

    createMove = (guess, secret) => {
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
        return new Move(guess,perfectMatch, partialMatch);
    }

    createDigit = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    createSecret = (level) => {
        let digits = [];
        digits.push(this.createDigit(1, 9));
        while (digits.length < level) {
            let digit = this.createDigit(0, 9);
            if (digits.includes(digit)) continue;
            digits.push(digit);
        }
        return digits.reduce((sum, n) => 10 * sum + n, 0);
    }

    //region get constraints
    getMaxNumberOfMoves = (level) => {
        return 10 + 5 * (level - 3);
    }

    getMaxCounter = (level) => {
        return 60 + 10 * (level - 3);
    }
    //endregion

    render = () => {
        return ( // view model <--> view (component-based)
            <div className="container">
                <div className="card">
                    <CardHeader title="Game Console"/>
                    <div className="card-body">
                        <Badge id="gamelevel"
                               label="Game Level"
                               value={this.state.game.gameLevel}></Badge>
                        <Badge id="tries"
                               label="Tries"
                               value={this.state.game.numberOfMoves}></Badge>
                        <Badge id="lives"
                               label="Lives"
                               value={this.state.game.lives}></Badge>
                        <div className="form-group">
                            <label htmlFor="guess">Guess:</label>
                            <input type="text"
                                   className="form-control"
                                   id="guess"
                                   name="guess"
                                   onChange={this.handleInputChange}
                                   value={this.state.game.guess}></input>
                            <button onClick={this.play}
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
                                this.state.game.moves.map((move, index) =>
                                    <tr key={move.guess + index.toString()}>
                                        <td>{index+1}</td>
                                        <td>{move.guess}</td>
                                        <td>{move.message}</td>
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
}

export default App;
