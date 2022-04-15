import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import Typewriter from 'typewriter-effect';
import Demo from './Demo';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(sessionActions.login({
        credential: 'demo@aa.io',
        password: 'password'
    }))

    }, 4000)
    return () => clearTimeout(timer);
  }, [showTypewriter])

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
