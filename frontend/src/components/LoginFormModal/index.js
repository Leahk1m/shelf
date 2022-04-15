import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import Typewriter from 'typewriter-effect';
import Demo from './Demo';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => [setShowModal(false), setShowTypewriter(false)]}>
          {showTypewriter ?
          <Demo/>
        :
          <LoginForm />
        }
      <button onClick={() => setShowTypewriter(true)}>Demo User Type</button>
        {/* {showTypewriter ?
            <Demo />
        : ''} */}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
