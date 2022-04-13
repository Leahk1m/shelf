import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import { Modal } from './context/Modal';
import ShowBusinesses from './components/ShowBusinesses';
import HomePage from './components/HomePage';
import NewBusinessFormPage from './components/NewBusinessFormPage';
import OneBusinessPage from './components/OneBusinessPage';

import * as businessActions from './store/business';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(businessActions.allUserBusinesses())
    // dispatch(businessActions.addNewBusiness())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <button onClick={() => setShowModal(true)}>Modal</button> */}
      {/* {showModal && (
        // <Modal onClose={() => setShowModal(false)}>
        //   <h1>Hello I am a Modal</h1>
        // </Modal>
      )} */}
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path='/signup'>
            <SignupFormPage />
          </Route>

          <Route exact path='/business'>
            <ShowBusinesses/>
          </Route>
          <Route path='/add-business'>
            <NewBusinessFormPage/>
          </Route>
          <Route path='/business/:businessId'>
            <OneBusinessPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
