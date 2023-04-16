import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const App = () => {

  const [news, setNews] = useState([]);

  const getNews = async () => {

      const add = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-16&sortBy=publishedAt&apiKey=4d991139f4ef4bcc8dc6cff0c1b0a93d";

      try {
          const res = await axios.get(add)

          console.log("++++++++", res.data.articles)
          setNews(res.data.articles)

      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
      getNews()
  }, [])

  return (
      <Container>
          <Row>
              {news && news.map(n => (
                  <Col className={'mt-5'}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={n.urlToImage} />
                          <Card.Body>
                              <Card.Title>{`${n.title.slice(0, 20)}...`}</Card.Title>
                              <Card.Text>
                                  {`발행일 : ${n.publishedAt}`}
                              </Card.Text>
                              <Card.Text>
                                  {`${n.content.slice(0, 150)}...`}
                              </Card.Text>
                              <Button variant="primary" href={n.url}>go article</Button>
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Container>
  );
};

export default App;
