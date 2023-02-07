import React, { useState, useEffect } from 'react';
import { ReactPropTypes } from 'prop-types';
import '../app.css'

const Fader = ({text}) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if(fadeProp.fade === 'fade-in'){
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        },4000)

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <div>
        <h2 id='hero' className={fadeProp.fade}>{text}</h2>
        </div>
    )
}


Fader.defaultProps = {
    text: 'Rooster Grin'
}

export default Fader;