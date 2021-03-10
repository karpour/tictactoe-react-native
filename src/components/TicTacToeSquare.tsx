import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import styles from '../styles';
import TicTacToeCircle from './TicTacToeCircle';
import TicTacToeCross from './TicTacToeCross';
import { SquareState } from '../types/TicTacToeTypes';

type SquareProps = {
    position: number,
    style?: ViewStyle[],
    value: SquareState
    takeTurn: (position: number) => void;
};

const TicTacToeSquare = (props: SquareProps) => {
    const handleTouch = () => {
        if(!props.value) props.takeTurn(props.position);
    };
    return (
        <View style={[styles.gridCell, ...(props.style ?? [])]} onTouchEnd={handleTouch}>
            {props.value == "CROSS" && <TicTacToeCross />}
            {props.value == "CIRCLE" && <TicTacToeCircle />}
        </View>
    );
};

export default TicTacToeSquare;