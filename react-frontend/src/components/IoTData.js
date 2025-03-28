import React, { useState, useEffect } from "react";
import axios from "axios";

const IoTData = () => {
    const [latestData, setLatestData] = useState(null);

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

    useEffect(() => {
        const fetchLatestIoTData = async () => {
            try {
                const response = await axios.get("http://192.168.100.4:8000/iot-data/list/");
                const data = response.data;
                if (data.length > 0) {
                    setLatestData(data[0]); 
                }
            } catch (error) {
                console.error("Error fetching IoT data:", error);
            }
        };

        fetchLatestIoTData();

        const interval = setInterval(() => {
            fetchLatestIoTData();
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <section className="book_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Latest IoT <span>Data Readings</span></h4>
                        {latestData ? (
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Temperature</th>
                                        <th>Heart Rate</th>
                                        <th>Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{latestData.temperature}</td>
                                        <td>{latestData.heart_rate}</td>
                                        <td>{formatTimestamp(latestData.timestamp)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            <p>Loading latest IoT data...</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IoTData;
