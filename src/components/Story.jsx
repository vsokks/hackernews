import {Col, Container, Row} from "react-bootstrap";
import {convertDateToString} from "../utils/DateUtils";

const Story = ({story}) => {
    return (
        <Container fluid="xs" className="card" style={{padding: "5px", marginTop: "8px", marginBottom: "8px", borderColor: "darkgrey"}}>
            <Row xs={12}>
                <Col>
                    <h6 className="card-title">
                        {story.url && <a href={story.url} target="_blank" rel="noreferrer">{story.title}</a>}
                        {!story.url && story.title}
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p className="card-text">
                        By <i>{story.by}</i> on {convertDateToString(story.time)}
                    </p>

                </Col>
            </Row>
        </Container>
    );
}
export default Story;