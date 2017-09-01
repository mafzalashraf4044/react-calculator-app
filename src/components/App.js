import React, {
    Component
} from 'react';

//constants
import * as keys from '../constants/keypadConstants'; 

//helpers
// import update from 'immutability-helper';

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
            ],
            expression: "",
            history: [],
        };
    }

    onKeyPress = (event) => {
        let id = event.target.id;

        if(id !== keys.BACK_SPACE && id !== keys.EVALUATE && id !== keys.SIGN && id != keys.SQUARE_ROOT){
            this.setState((prevState, props) => ({
                expression: prevState.expression+id
            }));
        }else if(id === keys.BACK_SPACE){
            this.setState((prevState, props) => ({
                expression: prevState.expression.slice(0, prevState.expression.length-1)
            }));            
        }else if(id === keys.EVALUATE){
            try {
                let result = eval(this.state.expression);
                let expressionHistory = this.state.expression + ' = ' + result;
                this.setState((prevState, props) => ({
                    history: [...prevState.history, expressionHistory]
                }));            
            } catch (error) {
                console.log("invalid expression");                
            }
        }
    }

    render() {
        return (
            <Grid className="main-container" fluid={true}>
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={4} mdOffset={4}>
                        <div className="calculator">
                            <DisplayScreen expression={this.state.expression} history={this.state.history}/>
                            <Keypad keys={this.state.keys} onKeyPress={this.onKeyPress}/>
                        </div>
                    </Col>
                </Row>
            </Grid>

        );
    };
}