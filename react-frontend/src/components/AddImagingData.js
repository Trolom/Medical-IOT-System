import React, { useState } from "react";
import axios from "axios";

const AddImagingData = ({ onDataAdded }) => {
    const [formData, setFormData] = useState({
        tumor_size: "",
        biopsy_result: "",
        imaging_date: "",
        doctor_name: "",
        notes: ""
    });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://192.168.100.4:8000/imaging-data/add/", formData)
            .then((response) => {
                alert("Data submitted successfully!");
                onDataAdded(response.data); 
                setFormData({ tumor_size: "", biopsy_result: "", imaging_date: "", doctor_name: "", notes: "" });
            })
            .catch(error => console.error("Error submitting data:", error));
    };

    return (

        <section class="book_section layout_padding">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div>
                            <h4>Add Newest Data After <span>Recent Appointment</span></h4>
                            <form onSubmit={handleSubmit}>
                                <div class="form-row">
                                    <div class="form-group col-lg-4">
                                        <label for="inputTumorSize">Tumor Size</label>
                                        <input
                                            type="number"
                                            name="tumor_size"
                                            placeholder
                                            class="form-control"
                                            value={formData.tumor_size}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div class="form-group col-lg-4">
                                        <label for="inputDoctorName">Biopsy Results</label>
                                        <input
                                            name="biopsy_result"
                                            placeholder
                                            class="form-control"
                                            value={formData.biopsy_result}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div class="form-group col-lg-4">
                                        <label for="inputDate">Date</label>
                                        <div class="input-group date" id="inputDate" data-date-format="mm-dd-yyyy"></div>
                                        <input
                                            type="date"
                                            name="imaging_date"
                                            class="form-control"
                                            value={formData.imaging_date}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span class="input-group-addon date_icon">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-lg-4">
                                        <label for="inputDoctorName">Doctor's Name</label>
                                        <input
                                            name="doctor_name"
                                            placeholder
                                            class="form-control"
                                            value={formData.doctor_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div class="form-group col-lg-4">
                                        <label for="inputNotes">Notes</label>
                                        <input
                                            name="notes"
                                            placeholder
                                            class="form-control"
                                            value={formData.notes}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div class="form-group col-lg-4">
                                        <label for="inputButton">Click when all is completed!</label>
                                        <button type="submit" class="btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddImagingData;
