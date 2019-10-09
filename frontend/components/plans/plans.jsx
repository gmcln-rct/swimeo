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
                            <div className='plans-ourplans-plan-header-img fish-1'><FontAwesomeIcon icon="fish" /></div>
                            <div className='plans-ourplans-plan-header'>Anchovy Plan</div>
                            <div className='plans-ourplans-plan-pricing'>
                                5GB/week
                                <br />
                                250GB every year
                                Single user
                                $0.99/mo billed annually
                            </div>
                            <button className='plan-btn-1'>Get Basic</button>
                            <div className='plans-ourplans-plan-sub'>
                                <ul>
                                    <li>Player customization</li>
                                    <li>Privacy controls</li>
                                    <li>5 Water Balloons</li>
                                </ul>

                            </div>
                        </div>
                        <div className='plans-ourplans-tier1'>
                            <div className='plans-ourplans-plan-header-img fish-2'><FontAwesomeIcon icon="fish" /></div>
                            <div className='plans-ourplans-plan-header'>Anchovy Plan</div>
                            <div className='plans-ourplans-plan-pricing'>
                                5GB/week
                                <br />
                                250GB every year
                                Single user
                                $0.99/mo billed annually
                            </div>
                            <button className='plan-btn-2'>Get Plus</button>
                            <div className='plans-ourplans-plan-sub'>
                                <ul>
                                    <li>Player customization</li>
                                    <li>Privacy controls</li>
                                    <li>5 Water Balloons</li>
                                </ul>

                            </div>
                        </div>
                        <div className='plans-ourplans-tier1'>
                            <div className='plans-ourplans-plan-header-img fish-3'><FontAwesomeIcon icon="fish" /></div>
                            <div className='plans-ourplans-plan-header'>Anchovy Plan</div>
                            <div className='plans-ourplans-plan-pricing'>
                                5GB/week
                                <br />
                                250GB every year
                                Single user
                                $0.99/mo billed annually
                            </div>
                            <button className='plan-btn-3'>Get Premium</button>
                            <div className='plans-ourplans-plan-sub'>
                                <ul>
                                    <li>Player customization</li>
                                    <li>Privacy controls</li>
                                    <li>5 Water Balloons</li>
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
