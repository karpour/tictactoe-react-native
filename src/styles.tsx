import { StyleSheet } from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const borderwidth = 3;

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    ticTacToeGrid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        width: 250,
        height: 250,
    },
    gridCell: {
        width: '33.3%',
        height: '33.3%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: borderwidth,
    },
    gTop: {
        borderTopWidth: 0,
    },
    gBottom: {
        borderBottomWidth: 0,
    },
    gLeft: {
        borderLeftWidth: 0,
    },
    gRight: {
        borderRightWidth: 0,
    },
    spacer: {
        height: 20,
    }
});

export default styles;