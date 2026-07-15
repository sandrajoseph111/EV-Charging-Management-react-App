import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'



const Add = () => {


    const [input, changeInput] = useState(


        {
            bookingId: "",
            ownerName: "",
            email: "",
            phone: "",
            vehicleregistrationNumber: "",
            vehicleBrand: "",
            vehicleModel: "",
            batteryCapacity: "",
            connecterType: "",
            chargingDate: "",
            timeSlot: "",
            estimatedTimeUnit: "",
            chargingBayNumber: ""
        }

    )
    const inputHandeler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })

    }

    const readValue = () => {


        console.log(input)
        axios.post("http://localhost:3000/add-vehiclebooking", input).then(

            (response) => {

                console.log(response.data)
                alert("Project added suceessfully")
            }
        ).catch((error) => {
            console.log(error.response);
            console.log(error.response?.data);
            console.log(error.response?.status);
            alert("Failed to add Student");
        });


    }
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">



                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Booking ID</label>
                            <input type="text" className="form-control" name="bookingId" value={input.bookingId} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Owner Name</label>
                            <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email</label><br></br>
                            <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandeler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Vehicle Registration Number</label>
                            <input type="text" className="form-control" name="vehicleregistrationNumber" value={input.vehicleregistrationNumber} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Vehicle Brand</label>
                            <input type="text" className="form-control" name="vehicleBrand" value={input.vehicleBrand} onChange={inputHandeler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Vehicle Model</label>
                            <input type="text" className="form-control " name="vehicleModel" value={input.vehicleModel} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Battery Capacity </label>
                            <input type="text" className="form-control" name="batteryCapacity" value={input.batteryCapacity} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">connector Type</label>
                            <input type="text" className="form-control" name="connecterType" value={input.connecterType} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Charging Date</label>
                            <input type="text" className="form-control" name="chargingDate" value={input.chargingDate} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Time Slot</label>
                            <input type="text" className="form-control" name="timeSlot" value={input.timeSlot} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Estimated Time Unit</label>
                            <input type="text" className="form-control" name="estimatedTimeUnit" value={input.estimatedTimeUnit} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Charging Bay Number</label>
                            <input type="text" className="form-control" name="chargingBayNumber" value={input.chargingBayNumber} onChange={inputHandeler} />
                        </div>


                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>


        </div>
    )
}

export default Add