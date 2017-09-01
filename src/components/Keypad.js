import React, {Component} from 'react';

//helpers
import PropTypes from 'prop-types';

//Third Party Components
import {Grid, Row, Col} from 'react-bootstrap';

class Keypad extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Grid className="keypad">
                <Row>
                    <Col xs={12}>
                        {
                            this.props.keys.map((key, index) => {
                                return (
                                    <button type="button" className="key" key={index} onClick={this.props.onKeyPress}>{key}</button>
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
