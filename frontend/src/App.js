import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session';
import ShowBusinesses from './components/ShowBusinesses';
import HomePage from './components/HomePage';
import NewBusinessFormPage from './components/NewBusinessFormPage';
import OneBusinessPage from './components/OneBusinessPage';
import UpdateBusinessPage from './components/UpdateBusinessPage';
import ProfilePage from './components/ProfilePage';
import AddReviewFormPage from './components/AddReviewFormPage';
import EditReviewFormPage from './components/EditReviewFormPage';
import SearchPage from './components/SearchPage';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';


import * as businessActions from './store/business';
import * as reviewActions from './store/review';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(businessActions.allUserBusinesses());
    dispatch(reviewActions.allUserReviews());

  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {/* <button onClick={() => setShowModal(true)}>Modal</button> */}
      {/* {showModal && (
        // <Modal onClose={() => setShowModal(false)}>
        //   <h1>Hello I am a Modal</h1>
        // </Modal>
      )} */}
      {isLoaded && (
        <>
        <Switch>
          <Route exact path='/'>
            <HomePage isLoaded={isLoaded}/>
          </Route>
          <Route exact path='/search/:searchTerm'>
            <SearchPage isLoaded={isLoaded}/>
          </Route>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route exact path='/login'>
            <LoginFormPage />
          </Route>
          <Route exact path='/businesses'>
            <ShowBusinesses isLoaded={isLoaded}/>
          </Route>
          <Route exact path='/host'>
            <NewBusinessFormPage isLoaded={isLoaded}/>
          </Route>
          <Route exact path='/business/:businessId'>
            <OneBusinessPage isLoaded={isLoaded}/>
          </Route>
          <Route exact path='/business/edit/:businessId'>
            <UpdateBusinessPage isLoaded={isLoaded}/>
          </Route>
          <Route exact path='/profile'>
            <ProfilePage isLoaded={isLoaded} />
          </Route>
          <Route exact path='/business/reviews/:businessId'>
            <AddReviewFormPage isLoaded={isLoaded}/>
          </Route>
          <Route exact path='/business/reviews/edit/:reviewId'>
            <EditReviewFormPage isLoaded={isLoaded}/>
          </Route>
          <Route to='/'>
            <PageNotFound />
          </Route>
        </Switch>

        <footer>
          <Footer />
        </footer>
        </>
      )}
    </>
  );
}

export default App;
