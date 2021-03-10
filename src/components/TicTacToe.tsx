import React from 'react';
import { Alert, Button, View } from 'react-native';
import styles from '../styles';
import TicTacToeSquare from './TicTacToeSquare';
import { PlayerState, SquareState } from '../types/TicTacToeTypes';

type TicTacToeState = {
    player: PlayerState,
    grid: SquareState[];
};

function detectWinner(grid: SquareState[]): SquareState {
    let winner: SquareState = null;
    const checkRow = (row: number) => ((grid[row * 3] == grid[row * 3 + 1]) && (grid[row * 3 + 1] == grid[row * 3 + 2])) ? (winner = grid[row * 3]) : null;
    const checkCol = (col: number) => ((grid[col] == grid[col + 3]) && (grid[col + 3] == grid[col + 6])) ? (winner = grid[col + 3]) : null;
    if ((grid[0] == grid[4]) && (grid[4] == grid[8])) winner = grid[4];
    if ((grid[2] == grid[4]) && (grid[4] == grid[6])) winner = grid[4];
    for (let i = 0; i < 3 && !winner; i++) {
        checkRow(i);
        checkCol(i);
    }
    return winner;
}

const TicTacToe = () => {
    const [state, setState] = React.useState<TicTacToeState>({
        player: "CIRCLE",
        grid: new Array(9).fill(null)
    });

    const reset = () => {
        setState({
            player: "CIRCLE",
            grid: new Array(9).fill(null)
        });
    };

    const alertWinLoss = (text: string) => {
        Alert.alert(
            "Game ended",
            text,
            [
                {
                    text: "OK",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "New game", onPress: () => reset() }
            ],
            { cancelable: false }
        );
    };

    const takeTurn = (position: number) => {
        //console.log(`Taking turn pos ${position}`);
        //console.log(state.grid);
        if (!state.grid[position]) {
            state.grid[position] = state.player;
            setState({ grid: state.grid, player: state.player == "CIRCLE" ? "CROSS" : "CIRCLE" });
            let winner: SquareState = detectWinner(state.grid);
            if (winner) {
                alertWinLoss(`${winner} won`);
                //reset();
            }
        }
    };

    return (
        <View>
            <View style={styles.ticTacToeGrid}>
                <TicTacToeSquare position={0} value={state.grid[0]} style={[styles.gTop, styles.gLeft]} takeTurn={takeTurn} />
                <TicTacToeSquare position={1} value={state.grid[1]} style={[styles.gTop]} takeTurn={takeTurn} />
                <TicTacToeSquare position={2} value={state.grid[2]} style={[styles.gTop, styles.gRight]} takeTurn={takeTurn} />
                <TicTacToeSquare position={3} value={state.grid[3]} style={[styles.gLeft]} takeTurn={takeTurn} />
                <TicTacToeSquare position={4} value={state.grid[4]} takeTurn={takeTurn} />
                <TicTacToeSquare position={5} value={state.grid[5]} style={[styles.gRight]} takeTurn={takeTurn} />
                <TicTacToeSquare position={6} value={state.grid[6]} style={[styles.gBottom, styles.gLeft]} takeTurn={takeTurn} />
                <TicTacToeSquare position={7} value={state.grid[7]} style={[styles.gBottom]} takeTurn={takeTurn} />
                <TicTacToeSquare position={8} value={state.grid[8]} style={[styles.gBottom, styles.gRight]} takeTurn={takeTurn} />
            </View>
            <View style={styles.spacer} ></View>
            <Button title="Restart" onPress={reset} />
        </View>
    );
};

export default TicTacToe;