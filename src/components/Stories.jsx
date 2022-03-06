import {useEffect, useState} from "react";
import {getStoriesWithDetail} from "../services/StoryService";
import {Button, Col, Container, Row} from "react-bootstrap";
import Story from "./Story";
import {MAX_STORIES_COUNT} from "../constants";

const Stories = ({type}) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getStories = () => {
        setIsLoading(true);
        getStoriesWithDetail(type, pageNumber).then((items) => {
            (items.length > 0) && setStories(stories.concat(items));
            setIsLoading(false);
        });
    }

    useEffect(() => {
        console.log("Executing use effect");
        getStories();
    }, [pageNumber]);

    return (
        <Container fluid>
            {isLoading && stories.length == 0 && <h5>Loading... </h5>}
            {stories.map((story) => <Story story={story}/>)}
            {stories.length > 0
                && stories.length < MAX_STORIES_COUNT
                && <Container fluid>
                        <Row>
                            <Col xs={{ span: 4, offset: 4 }}>
                                <Button onClick={ () => setPageNumber(pageNumber+1)} style={{width: "100%"}}>
                                    {isLoading && "Loading More Stories..."}
                                    {!isLoading && "More Stories"}
                                </Button>
                            </Col>
                        </Row>
                    </Container>
            }
        </Container>
    );
}

export default Stories;