import React, { useEffect } from 'react';
import background from '../assets/images/background1.jpg'
import logo from '../assets/images/LocationG.png'
import home from '../assets/images/home.png'

function Dashboard() {
    console.log("Dashboard"); 
    useEffect(() => {
        document.body.style.backgroundImage = `url(${background})`;
        return () => {
            document.body.style.backgroundImage = 'none';
        };
    }, []);
    return (
        <div className="container-fluid">
            <div className='p-5'>
                <div className='container-fluid border-black rounded-3'>

                    {/* <img src={background} alt="backgroundImage" height={200} width={400}/> */}
                    <h2>Welcome Muthu </h2>
                    <div className="container-fluid p-3">
                        <div className="bg-transparent border border-secondary rounded-3 rounded-4 p-5 shadow ">
                            <div className="d-flex pt-5  pb-lg-5 mb-lg-5 ">

                                <img src={home} height={300} width={400}  alt="Home"/>

                                <div className="col-6 p-lg-3 border border-secondary rounded-3">
                                    <div className="d-flex pt-lg-5">
                                        <img  src={logo} alt="logo" width={35} height={60}/>
                                        <h2 className="fs-1 ps-5">LIESE</h2>
                                    </div>
                                    <div className="bg-light rounded-3 p-3">
                                        <h5 className="fs-5">Lorem ipsum dolor sit amet</h5> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec egestas ante. Etiam vel dignissim lectus. Cras in ultrices est. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
