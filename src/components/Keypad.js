import React, {Component} from 'react';

//constants
import {BACK_SPACE, SQUARE_ROOT} from '../constants/keypadConstants';

//helpers
import PropTypes from 'prop-types';

//Third Party Components
import {Grid, Row, Col} from 'react-bootstrap';

class Keypad extends Component{

    getIconImage = (key) => {

        if(key === BACK_SPACE){
            return (<img src="/images/ic_backspace_white_24px.svg" alt={key}/>);
        }else if(key === SQUARE_ROOT){
            return <img src="/images/icons8-square_root-48.png" alt={key}/>;
        }

    }

    render(){
        return (
            <Grid className="keypad">
                <Row>
                    <Col xs={12}>
                        {
                            this.props.keys.map((key, index) => {
                                return (
                                    <button type="button" className="key" id={key} key={index} onClick={this.props.onKeyPress}>
                                        {
                                            key !== BACK_SPACE && key !== SQUARE_ROOT ? key : this.getIconImage(key)
                                        }
                                    </button>
                                );
                            })
                        }
                        
                    </Col>
                </Row>
            </Grid>
        );
    };
}

Keypad.propTypes = {
    keys       : PropTypes.array.isRequired,
    onKeyPress : PropTypes.func.isRequired
}

export default Keypad;
