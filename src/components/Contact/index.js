import React, { useState, useEffect } from 'react';
import data from '../Profile';

const Contact = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        setInfo(data.info);
    }, []);

    return ( 
        <>
            <h2>Contact Us</h2>
            {
                info !== null &&
                <div>
                    <p>Please contact me for any issues...</p>
                    <p>
                        Email - {info.email} <br />
                        Phone No - {info.phone_no} <br />
                    </p>
                </div>
            }
        </>
     );
}
 
export default Contact;