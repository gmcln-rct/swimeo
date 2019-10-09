import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Plans extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className='plans-page'>
                <div className='plans-header'>
                    <h1>Choose a plan</h1>
                    <h3>Try any plan risk free for 30 minutes.</h3>                
                </div>
                <div className='plans-ourplans'>
                    <div className='plans-ourplans-left'>Our Plans</div>
                    <div className='plans-ourplans-right'>
                        <div className='plans-ourplans-tier1'>
                            <div className='plans-ourplans-plan-header-img'><FontAwesomeIcon icon="fish" className="fish-1" /></div>
                            <div className='plans-ourplans-plan-header'>Anchovy Plan</div>
                            <div className='plans-ourplans-plan-pricing'>
                                1GB/week
                                <br />
                                5GB every year
                                Single user
                                $0.99/mo billed annually
                            </div>
                            <button className='plan-btn-1'>Get Anchovy</button>
                            <div className='plans-ourplans-plan-sub'>
                                <ul>
                                    <li>Player customization</li>
                                    <li>Privacy controls</li>
                                    <li>5 Water Balloons</li>
                                </ul>

                            </div>
                        </div>
                        <div className='plans-ourplans-tier1'>
                            <div className='plans-ourplans-plan-header-img'><FontAwesomeIcon icon="fish" className="fish-2" /></div>
                            <div className='plans-ourplans-plan-header'>Cod Plan</div>
                            <div className='plans-ourplans-plan-pricing'>
                                5GB/week
                                <br />
                                60B every year
                                Single user
                                $9.99/mo billed annually
                            </div>
                            <button className='plan-btn-2'>Get Cod</button>
                            <div className='plans-ourplans-plan-sub'>
                                <ul>
                                    <li>Review and approval</li>
                                    <li>Team projects</li>
                                    <li>Swimeo-branded boogie board</li>
                                </ul>

                            </div>
                        </div>
                        <div className='plans-ourplans-tier1'>
                            <div className='plans-ourplans-plan-header-img'><FontAwesomeIcon icon="fish" className="fish-3"/></div>
                            <div className='plans-ourplans-plan-header'>Bluefin Tuna Plan</div>
                            <div className='plans-ourplans-plan-pricing'>
                                1TB/minute
                                <br />
                                100PB every year
                                You, your family and your pet goldfish
                                $1,000,000/mo billed annually
                            </div>
                            <button className='plan-btn-3'>Get Bluefin</button>
                            <div className='plans-ourplans-plan-sub'>
                                <ul>
                                    <li>Live streaming</li>
                                    <li>Audience chat</li>
                                    <li>Nerf Super-Soaker</li>
                                </ul>

                            </div>
                        </div>



                    </div>


                </div>

            </section>


        )
    }
}

export default Plans;
