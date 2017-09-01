import React, {Component} from 'react';

//Third Party Components
import {Grid, Row, Col} from 'react-bootstrap';

class DisplayScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <Grid className="display-screen">
                <Row>
                    <Col xs={12}>
                        <div className="history">
                            <div>
                                1+5 = 6
                            </div>
                            <div>
                                1+5 = 6
                            </div>
                            <div>
                                1+5 = 6
                            </div>
                        </div>
                        <div className="edit-screen">
                            1+2x3
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    };
}

export default DisplayScreen;
