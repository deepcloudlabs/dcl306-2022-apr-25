import createSecret from "./random-digits";
import {getMaxCounter, getMaxNumberOfMoves} from "./constraints";

export const initialGameState = {
    secret: createSecret(3),
    gameLevel: 3,
    moves: [],
    lives: 3,
    numberOfMoves: 0,
    maxNumberOfMoves: getMaxNumberOfMoves(3),
    counter: getMaxCounter(3),
    guess: 123,
};

export const initialStatisticsState = {
    wins: 0,
    loses: 0
}