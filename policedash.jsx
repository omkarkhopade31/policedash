import React, { useState, useEffect } from 'react';
import './policedash.css'; 

function Policedash() {
    const [rows, setRows] = useState([]);

    // Function to format date and time
    const formatDateTime = (date) => {
        return date.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
    };

    // Function to create initial rows with current date and time
    const createInitialRows = () => {
        const initialRows = [
            { id: 1, date: formatDateTime(new Date()), time: "12:00", location: "Thane", priority: "High", assigned: true },
            { id: 2, date: formatDateTime(new Date()), time: "12:00", location: "Mumbai", priority: "Low", assigned: false },
            { id: 3, date: formatDateTime(new Date()), time: "12:00", location: "Pune", priority: "Medium", assigned: true },
            { id: 4, date: formatDateTime(new Date()), time: "12:00", location: "Nagpur", priority: "High", assigned: false },
            { id: 5, date: formatDateTime(new Date()), time: "12:00", location: "Nashik", priority: "Low", assigned: true },
        ];
        setRows(initialRows);
    };

    useEffect(() => {
        createInitialRows(); // Call the function once when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once

    const toggleAssignment = (id) => {
        setRows(rows.map(row => {
            if (row.id === id) {
                return { ...row, assigned: !row.assigned };
            }
            return row;
        }));
    };

    const handleDateChange = (id, value) => {
        setRows(rows.map(row => {
            if (row.id === id) {
                return { ...row, date: value };
            }
            return row;
        }));
    };

    const handleTimeChange = (id, value) => {
        setRows(rows.map(row => {
            if (row.id === id) {
                return { ...row, time: value };
            }
            return row;
        }));
    };

    return (
        <>
            <div className='police_header'>
                <h1 className='police_heading'>Police Dashboard</h1>
            </div>
            <div className='police_content'>
                <div className='police_main'>
                    <h1 className='police'>Police: 20</h1>
                    <div className='police_table'>
                      <thead>
                        <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Priority</th>
                        <th>Assignment</th>
                        </tr>
                      </thead>
                    </div>

                    {rows.map(row => (
                        <div className='police_table' key={row.id}>
                            <p>02/05/24</p>
                            <p>18:55</p>
                            <p>{row.location}</p>
                            <p>{row.priority}</p>
                            <button className={row.assigned ? 'assigned_button' : 'assign_button'} onClick={() => toggleAssignment(row.id)}>
                                {row.assigned ? 'Assigned' : 'Assign'}
                            </button>
                        </div>
                        
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Policedash;
