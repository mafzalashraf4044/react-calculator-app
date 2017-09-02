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
                keys.ANS,
                keys.EVALUATE
            ],
            expression: "",
            expressionCopy: "",
            errTxt: "",
            history: [],
            ansHistory: [],
            currentAnsHistoryIndex: 0,
        };
    }

    onKeyPress = (event) => {
        let id = event.currentTarget.id;

        console.log("id", id)

        if(id !== keys.BACK_SPACE && id !== keys.EVALUATE && id !== keys.ANS && id != keys.SQUARE_ROOT){
            this.setState((prevState, props) => ({
                errTxt: "",
                expression: prevState.expression+id,
                expressionCopy: prevState.expression+id,
                currentAnsHistoryIndex: prevState.ansHistory.length-1
            }));
        }else if(id === keys.BACK_SPACE){
            this.setState((prevState, props) => ({
                errTxt: "",
                expression: prevState.expression.slice(0, prevState.expression.length-1),
                expressionCopy: prevState.expression.slice(0, prevState.expression.length-1),
            }));            
        }else if(id === keys.EVALUATE || id === keys.SQUARE_ROOT){
            try {
                let result = eval(this.state.expression).toString();

                if(id === keys.SQUARE_ROOT){
                    result = Math.sqrt(result);
                }

                if (result.length > 12){
                    result = Number(result).toPrecision(12);
                }

                let expressionHistory = id === keys.SQUARE_ROOT ? '^/(' + this.state.expression + ') = ' + result : this.state.expression + ' = ' + result;

                this.setState((prevState, props) => ({
                    expression: result,
                    expressionCopy: result,
                    ansHistory: [...prevState.ansHistory, result],
                    history: [...prevState.history, expressionHistory],
                    currentAnsHistoryIndex: prevState.ansHistory.length,
                }));            
            } catch (error) {
                console.log("err", error);
                this.setState({errTxt: "Invalid Expression.", expression: ""});              
            }
        }else if(id === keys.ANS){

            this.setState((prevState, props) => ({
                currentAnsHistoryIndex: prevState.currentAnsHistoryIndex === 0 ? prevState.ansHistory.length - 1 : prevState.currentAnsHistoryIndex - 1,
                expression: prevState.expressionCopy + prevState.ansHistory[prevState.currentAnsHistoryIndex],
            }));
        }
    }

    render() {
        return (
            <Grid className="main-container" fluid={true}>
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
                        <div className="calculator">
                            <DisplayScreen expression={this.state.expression} errTxt={this.state.errTxt} history={this.state.history}/>
                            <Keypad keys={this.state.keys} onKeyPress={this.onKeyPress}/>
                        </div>
                    </Col>
                </Row>
            </Grid>

        );
    };
}