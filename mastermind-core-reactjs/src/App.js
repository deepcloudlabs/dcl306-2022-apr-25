import './App.css';
import {PureComponent} from "react";
import CardHeader from "./components/CardHeader";
import Badge from "./components/Badge";
// Components: i) Stateless       ii) Stateful : App
//                function App()      class App { }
//                Badge,CardHeader    function App(){ React Hooks }

// State Management
//    i) Stateful Component
//   ii) Context
//  iii) Rest API (server), localStorage/sessionStorage (client)
//   iv) Redux Framework

// Routing
// Validation
// 2-way Binding: View Model -- {this.state...} --> View

class App extends PureComponent {
    constructor(context,props) {
        super(context);
        this.state = { // view model
            game: {
                gameLevel: 3,
                numberOfMoves: 0,
                moves: [],
                lives: 3,
                maxNumberOfMoves: this.getMaxNumberOfMoves(3),
                counter: this.getMaxCounter(3),
                guess : 123
            },
            statistics : {
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

    }

    //region get constraints
    getMaxNumberOfMoves = (level) => {
        return 10 + 5 * (level -3);
    }

    getMaxCounter = (level) => {
        return 60 + 10 * (level -3);
    }
    //endregion

    render = () => {
        return ( // view model <--> view (component-based)
            <div className="container">
                <div className="card">
                    <CardHeader title="---Game Console---" />
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
                                    className="btn btn-success">Play</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
