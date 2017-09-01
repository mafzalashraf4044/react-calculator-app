import React, {Component} from 'react';

//helpers
import PropTypes from 'prop-types';

//Third Party Components
import {Grid, Row, Col} from 'react-bootstrap';

class DisplayScreen extends Component{

    render(){
        return (
            <Grid className="display-screen">
                <Row>
                    <Col xs={12}>
                        <div className="history">
                            {
                                this.props.history.map((ele, index) => {
                                    return <div key={index}>{ele}</div>
                                })
                            }
                        </div>
                        <div className="edit-screen">
                            {this.props.expression}
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    };
}

DisplayScreen.propTypes = {
    history: PropTypes.array.isRequired,
    expression: PropTypes.string.isRequired
}

export default DisplayScreen;
