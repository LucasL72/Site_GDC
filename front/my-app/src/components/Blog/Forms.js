import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createArticle,
  getArticles,
} from "../../store/actions/ArticlesActions";

const Forms = () => {
    const [title, setTitle] = useState("")
  const [description, setDesc] = useState(0)
  const dispatch = useDispatch()

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault()

    console.log('submit form create article')

    if (title && description) {
      await dispatch(createArticle({ title, description }))
      setTitle("")
      setDesc("")
      await dispatch(getArticles())
    }
  }

  return (
    <>
      <h2 className="text-center text-decoration-underline">Mon formulaire de création d'articles</h2>
      <Form onSubmit={(e) => handleForm(e)}>
        <Row>
          <Col sm={12}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>title</Form.Label>
              <Form.Control type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
          </Col>
        </Row>
        <Col sm={12}>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Example description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDesc(e.target.value)} />
          </Form.Group>
        </Col>

        <Col sm={12}>
          <div className="text-center">
            <Button cla variant="outline-dark" type="submit">
              Submit
            </Button>
          </div>
        </Col>
      </Form>
    </>
  );
};

export default Forms;