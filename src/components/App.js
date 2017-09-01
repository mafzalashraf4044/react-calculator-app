import React, {
    Component
} from 'react';

//Third Party Components
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Grid className="main-container" fluid={true}>
                <Row className="main-row">
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={4} mdOffset={4}>
                        <div className="calculator">

                        </div>
                    </Col>
                </Row>
            </Grid>

        );
    };
}