import { useState } from "react";
import { useDispatch } from "react-redux";
import { editArticle } from "../../store/actions/ArticlesActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditArticle = (props) => {
  const { item, toggler } = props;
  const [title, setTitle] = useState(item.title);
  const [description, setDesc] = useState(item.description);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      title: title,
      description: description,
      id: item.id,
    };

    dispatch(editArticle(editData));
    toggler(false);
    // setEditToggle(false);
  };

  return (
    <>
      <h3 className="text-center">Formulaire Edit</h3>
      <Form onSubmit={(e) => handleEdit(e)}>
        <Form.Control
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="text-center">
          <Button cla variant="outline-dark" type="submit">
            Valider Modification ?
          </Button>
        </div>
      </Form>
    </>
  );
};

export default EditArticle;