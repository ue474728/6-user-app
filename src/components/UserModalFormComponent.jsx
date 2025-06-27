import Modal from 'react-bootstrap/Modal';
import { UserFormComponent } from './UserFormComponent';
import PropTypes from 'prop-types';

export const UserModalFormComponent = (props) => {
  const { show, users, handlerAddUser, OnInputChange, handlerVisibleForm } =
    props;
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

UserModalFormComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  users: PropTypes.object.isRequired,
  handlerAddUser: PropTypes.func.isRequired,
  OnInputChange: PropTypes.func.isRequired,
  handlerVisibleForm: PropTypes.func.isRequired,
};
