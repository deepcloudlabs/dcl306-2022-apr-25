import Move from "./model/Move";
import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import createSecret from "./utils/random-digits";
import {getMaxCounter, getMaxNumberOfMoves} from "./utils/constraints";
import Container from "./components/bootstrap/Container";
import Statistics from "./components/statistics/Statistics";
import Moves from "./components/common/Moves";
import GameConsole from "./components/common/GameConsole";
import {initialGameState, initialStatisticsState} from "./utils/initials";

function AppWithHooks() { // hooks -> stateful
    const [game, setGame] = useState(initialGameState);
    const [statistics, setStatistics] = useState(initialStatisticsState);
    const navigate = useNavigate();

    const countDown = useCallback(() => {
        let newGame = {...game};
        let newStatistics = {...statistics};
        newGame.counter--;
        if (newGame.counter <= 0) {
            newGame.lives--;
            newStatistics.loses++;
            if (newGame.lives <= 0) {
                navigate("/loses");
            } else {
                initGame(newGame);
            }
        }
        setGame(newGame);
        setStatistics(newStatistics);
    }, [game, statistics, navigate]);

    useEffect(() => {
        let timerId = setInterval(countDown, 1000);
        return () => {
            clearInterval(timerId);
        }
    });

    function handleInputChange(e) {
        let value = Number(e.target.value);
        let newGame = {...game};
        newGame.guess = value;
        setGame(newGame);
    }

    function play() {
        // clone the states
        let newGame = {...game};
        let newStatistics = {...statistics};
        //region update the new states
        newGame.numberOfMoves++;
        if (newGame.guess === newGame.secret) {
            newGame.gameLevel++;
            newStatistics.wins++;
            if (newGame.gameLevel > 10) {
                navigate("/wins");
            } else {
                initGame(newGame);
            }
        } else {
            if (newGame.numberOfMoves >= newGame.maxNumberOfMoves) {
                newGame.lives--;
                newStatistics.loses++;
                if (newGame.lives <= 0) {
                    navigate("/loses");
                } else {
                    initGame(newGame);
                }
            } else {
                newGame.moves.push(new Move(newGame.guess, newGame.secret));
            }
        }
        //endregion
        setGame(newGame);
        setStatistics(newStatistics);
    }

    function initGame(gameState) {
        gameState.secret = createSecret(gameState.gameLevel);
        gameState.moves = [];
        gameState.numberOfMoves = 0;
        gameState.counter = getMaxCounter(gameState.gameLevel);
        gameState.maxNumberOfMoves = getMaxNumberOfMoves(gameState.gameLevel);
    }

    return ( // view model <--> view (component-based)
        <>
            <p></p>
            <Container>
                <GameConsole game={game} onChange={handleInputChange} onPlay={play}/>
                <p></p>
                <Statistics statistics={statistics}></Statistics>
                <p></p>
                <Moves moves={game.moves}/>
            </Container>
        </>
    );
}

export default AppWithHooks;
