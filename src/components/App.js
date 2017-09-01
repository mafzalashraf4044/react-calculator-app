import React, {
    Component
} from 'react';

import * as keys from '../constants/keypadConstants'; 

//Third Party Components
import { Grid, Row, Col } from 'react-bootstrap';

//Custom Components
import Keypad from './Keypad';
import DisplayScreen from './DisplayScreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: [
                keys.BACK_SPACE,
                keys.PERCENTAGE,
                keys.DIVIDE,
                keys.MULTIPLY,
                keys.SEVEN,
                keys.EIGHT,
                keys.NINE,
                keys.MINUS,
                keys.FOUR,
                keys.FIVE,
                keys.SIX,
                keys.PLUS,
                keys.ONE,
                keys.TWO,
                keys.THREE,
                keys.SQUARE_ROOT,
                keys.ZERO,
                keys.DECIMAL,
                keys.SIGN,
                keys.EVALUATE
            ]

        };
    }

    onKeyPress = (event) => {
        console.log("event", event.target)
    }

    render() {
        return (
            <Grid className="main-container" fluid={true}>
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={4} mdOffset={4}>
                        <div className="calculator">
                            <DisplayScreen />
                            <Keypad keys={this.state.keys} onKeyPress={this.onKeyPress}/>
                        </div>
                    </Col>
                </Row>
            </Grid>

        );
    };
}