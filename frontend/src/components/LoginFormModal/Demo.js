import React from 'react';
import Typewriter from 'typewriter-effect';
// import { useDispatch } from 'react-redux';

function Demo() {
    return(
        <div>
            <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('demo@aa.io').pauseFor(2000).start()
            }}
            />
            <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('').pauseFor(2000).typeString('********').start()
            }}
            />
        </div>

    );

}

export default Demo;
