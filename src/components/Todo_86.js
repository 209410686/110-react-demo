import { useState } from 'react';
import Backdrop_86 from './Backdrop_86';
import Modal_86 from './Modal_86';

function Todo_86(props) {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Delete
          </button>
        </div>
        {showModal && <Backdrop_86 onClick={closeModalHandler} />}
        {showModal && (
          <Modal_86 text='Are you sure?' onClose={closeModalHandler} />
        )}
      </div>
    </div>
  );
}

export default Todo_86;


