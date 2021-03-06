/*View reception staff list code*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Link } from 'react-router-dom';





export default function ViewReceptionistList() {
    let genPDF = () => {
        const doc = new jsPDF()
        doc.setFontSize(20);
        doc.text("Doctors details report", 70, 10)

        doc.autoTable({
            html: '#details'
        })
        doc.save("StaffReport.pdf");

        toast.info("Report generated!!!", {
            position: toast.POSITION.TOP_CENTER
        });

    }

    const [receptionists, setReceptionists] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/receptionist/viewRec")
            .then(res => setReceptionists(res.data))
            .catch(error => console.log(error));
    });

    return (


        <div className="grid-container">
            <div className="grid-item-6 item-1">
                <div className="scroll-item-1">

                    <h1 style={{ textAlign: 'center' }}>Reception Staff List</h1>
                    <table className="table table-striped table-hover table-condensed" id="details">
                        <thead>
                            <tr>
                                <th scope="col" className="cent">Receptionist Image</th>
                                <th scope="col" className="cent">Title</th>
                                <th scope="col" className="cent">First&nbsp;Name</th>
                                <th scope="col" className="cent">Last&nbsp;Name</th>
                                <th scope="col" className="cent">View</th>
                                <th scope="col" className="cent">Modify</th>
                                <th scope="col" className="cent">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receptionists.map((receptionist, key) => (
                                <tr key={key}>
                                    <td className="cent"><img src={'/images/' + receptionist.img} width="100"></img></td>
                                    <td className="cent">{receptionist.gender}</td>
                                    <td className="cent">{receptionist.fname}</td>
                                    <td>{receptionist.lname}</td>
                                    <td className="cent"><Link to={'/staff/admin/view-receptionist/' + receptionist._id}><i class='far fa-file-alt fa-big'></i></Link></td>
                                    <td className="cent"><Link to={'/staff/admin/update-receptionist/' + receptionist._id}><i class='fas fa-edit fa-big fa-green'></i></Link></td>
                                    <td className="cent"><Link to={'/staff/admin/delete-receptionist/' + receptionist._id}><i class="fa-solid fa-trash-can fa-big fa-red"></i></Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <button type="submit" className="button-71" onClick={(genPDF)} role="button"><i className="fa fa-file-pdf"></i> Download as PDF</button>
            </div>
        </div>









    );

}