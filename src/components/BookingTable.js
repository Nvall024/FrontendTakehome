import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import moment from 'moment';

 

function BookingTable() {
     

    const [data, setData] = useState([])

    // Using moment.js to format the dates for me
    const myDates = data.map(function (e) {

        let currentDate;
        currentDate = moment(e.datetime).format('MMMM Do YYYY, h:mm:ss a');
        return currentDate;
    });

    console.log(myDates);

    const columns = [

        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Address", field: "address" },
        { title: "Booking Type", field: "bookingtype" },
        { title: "Booking Date/Time", field: "datetime" }
    ]


    useEffect(() => {
        let url = "https://bookingapi-b86e.restdb.io/rest/bookings";
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-apikey": "5d03eb2a27bc5b75bfeb7c7a"
            }
        })
            .then(resp => resp.json())
            .then(resp => {
                setData(resp)
            })
    }, [])


    // function to sort my data in ascending order by date
    data.sort(function compare(a, b) {
        var dateA = new Date(a.datetime);
        var dateB = new Date(b.datetime);
        return dateA - dateB;
    });

    return (
        <div className="BookingTable">
            <MaterialTable
                title="Bookings"
                options={{ search: false, }}
                data={data}
                columns={columns} 
            />
        </div>
    );
}

export default BookingTable;



































