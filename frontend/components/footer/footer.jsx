import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className='footer-container'>
                <div className='footer-left'>
                    <div className='footer-copyright'>
                        ©2019 Swimeo Inc. All Rights Reserved.
                    </div>

                    <ul className='footer-terms-conditions'>
                        <li>Terms &amp; Conditions </li>
                        <li>Privacy</li>
                        <li>Fishcakes(Cookies)</li>
                    </ul>
                    <div className='footer-made-with'>
                        Made with <FontAwesomeIcon icon="heart" style={{ color: '##879CAB' }} /> and <FontAwesomeIcon icon="fish" style={{ color: '##879CAB' }} /> in NYC
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-right-container'>
                        <span className='footer-right-1'>
                            Language: English
                        </span>
                        <span className='footer-right-2'>
                            Mature content filter: None
                        </span>
                    </div>
                </div>

            </section>
        )
    }

    
}

export default Footer;
