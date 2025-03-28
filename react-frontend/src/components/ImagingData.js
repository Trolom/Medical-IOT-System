import React, { useState, useEffect } from "react";
import axios from "axios";
import AddImagingData from "./AddImagingData";

const ImagingData = () => {
    const [imagingData, setImagingData] = useState([]);
    
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    useEffect(() => {
        const fetchImagingData = async () => {
            try {
                const response = await axios.get("http://192.168.100.4:8000/imaging-data/list/");
                setImagingData(response.data);
            } catch (error) {
                console.error("Error fetching imaging data:", error);
            }
        };

        fetchImagingData();
    }, []);

    const handleDataAdded = (newData) => {
        setImagingData((prevData) => [newData, ...prevData]); 
    };

    return (
        <section className="book_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <h4>Imaging <span>Data Table</span></h4>
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Tumor Size</th>
                                        <th>Biopsy Result</th>
                                        <th>Imaging Date</th>
                                        <th>Doctor Name</th>
                                        <th>Notes</th>
                                        <th>Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {imagingData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.tumor_size}</td>
                                            <td>{data.biopsy_result}</td>
                                            <td>{data.imaging_date}</td>
                                            <td>{data.doctor_name}</td>
                                            <td>{data.notes}</td>
                                            <td>{formatTimestamp(data.timestamp)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImagingData;
/*
<div className="row mt-4">
                    <div className="col">
                        <AddImagingData onDataAdded={handleDataAdded} />
                    </div>
                </div>
                */