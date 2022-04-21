import React from "react";
import './PageNotFound.css';
import { useHistory } from "react-router-dom";


function PageNotFound() {
    const history = useHistory();
    return(
        <div className="raccoon-404-div">
            <h2>Uh oh... The page that you requested does not exist</h2>
            <h4>Click on the raccoon to head back to our businesses!</h4>
            <img className="raccoon-gif"onClick={() => history.push('/')}src='https://github.com/Leahk1m/shelf_app/blob/last_changes/frontend/src/components/IconPics/raccoon.gif?raw=true' alt='raccoon'/>
        </div>
    );

}

export default PageNotFound;
