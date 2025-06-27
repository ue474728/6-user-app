import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UserFormComponent } from './UserFormComponent';

export const UserModalFormComponent = (props) => {
  const {
    show,
    users,
    handlerAddUser,
    OnInputChange,
    handlerVisibleForm,
  } = props;
  return (
    <Modal show={show} onHide={handlerVisibleForm}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserFormComponent
          users={users}
          handlerAddUser={handlerAddUser}
          OnInputChange={OnInputChange}
          handlerVisibleForm={handlerVisibleForm}
        />
      </Modal.Body>
    </Modal>
  );
};
