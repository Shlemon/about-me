import {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';


export default function ApiGenerator(props) {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    useEffect(
        () => {
            axios.get(props.data.url)
            .then(
                (response) => {
                    setPost(response.data);
                }
            )
            .catch(
                (error) => {
                    setError(error);
                    console.log(error);
                }
            )
        }
    , []
    );

    if (!post) {
        console.log(`Error code: ${error}`);
        return <h6 className='text-danger'>Axios error code: {error}</h6>;
    }

    console.log(typeof(post));
    console.log(Object.keys(post));
    return(
        <Row className='bg-primary'>
            <Col lg={12}>
                <h6>API's available: {post['count']}</h6>
                <h6>API:0 name: {post['entries'][0]['API']}</h6>
            </Col>
        </Row>
    );
}