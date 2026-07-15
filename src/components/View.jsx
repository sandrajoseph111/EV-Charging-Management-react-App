import axios from 'axios'
import React, { useEffect, useState } from 'react'




const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-allbooking").then(
            (response) => {
                
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )


    return (
        <div>
            
          
            
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Booking ID</th>
                        <th scope="col">Owner Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Vehicle Registration Number</th>
                        <th scope="col">Vehicle Brand</th>
                        <th scope="col">Vehicle Model</th>
                        <th scope="col">Battery Capacity</th>
                        <th scope="col">Connecter Type</th>
                        <th scope="col">Charging Date</th>
                        <th scope="col">Time Slot</th>
                        <th scope="col">Estimated Unit</th>
                        <th scope="col">Charging Bay Number</th>


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.bookingId}</td>
                                    <td>{data.ownerName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.vehicleRegistrationNumber}</td>
                                    <td>{data.vehicleBrand}</td>
                                    <td>{data.vehicleModel}</td>
                                    <td>{data.batteryCapacity}</td>
                                    <td>{data.connecterType}</td>
                                    <td>{data.chargingDate}</td>
                                    <td>{data.timeSlot}</td>
                                    <td>{data.estimatedUnit}</td>
                                    <td>{data.chargingBayNumber}</td>


                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>

        </div>
    )
}

export default View