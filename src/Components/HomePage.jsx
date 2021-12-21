import React, { useState, useEffect } from 'react'

function HomePage() {


    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        const response = await fetch('https://data.covid19india.org/data.json');
        const actualData = await response.json();
        console.log(actualData.statewise);
        setdata(actualData.statewise);

    }

    useEffect(() => {

        getCovidData();

    }, [])


    return (
        <>
            <h1 className='text-center mt-5'>  <span>INDIA</span>  Covid-19 Dashboard</h1>
            <div className='container-fluid mt-5' >
                <div className="row">
                    <div>
                        <table className='table table-striped table-light text-center' name="table">
                            <thead name="thead-dark">
                                <tr className='table-dark '>

                                    <th scope="col">STATE</th>
                                    <th scope="col">CONFIRMED</th>
                                    <th scope="col">RECOVERED</th>
                                    <th scope="col">DEATHS</th>
                                    <th scope="col">ACTIVE</th>
                                    <th scope="col">UPDATED</th>


                                </tr>
                            </thead>
                            <tbody >
                                {
                                    data.map((curElem, index) => {
                                        return (
                                            <tr key={curElem.id, curElem.index} className='table-striped'>
                                                <td >{curElem.state}</td>
                                                <td>{curElem.confirmed}</td>
                                                <td>{curElem.recovered}</td>
                                                <td>{curElem.deaths}</td>
                                                <td>{curElem.active}</td>
                                                <td>{curElem.lastupdatedtime}</td>
                                            </tr>
                                        )

                                    })
                                }

                            </tbody>
                        </table>


                    </div>
                </div>
            </div>



        </>
    )
}

export default HomePage
