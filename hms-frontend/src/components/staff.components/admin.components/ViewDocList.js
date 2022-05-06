/*View doctors list code*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Link } from 'react-router-dom';







export default function ViewDocList() {
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

    const [docs, setDocs] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/staff/")
            .then(res => setDocs(res.data))
            .catch(error => console.log(error));
    });

    return (
        <div className="grid-container">
            <div className="grid-item-6 item-1">
                <div className="scroll-item-1">
                    <h1 style={{ textAlign: 'center' }}>Doctor List</h1>
                    <table className="table table-striped table-hover table-condensed " id="details">

                        <thead>
                            <tr>
                                <th className="cent" scope="col">Doctor&nbsp;Image</th>
                                <th className="cent" scope="col" >Title</th>
                                <th className="cent" scope="col">First&nbsp;Name</th>
                                <th className="cent" scope="col">Last&nbsp;Name</th>
                                <th className="cent" scope="col">View</th>
                                <th className="cent" scope="col">Modify</th>
                                <th className="cent" scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {docs.map((doc, key) => (
                                <tr key={key}>
                                    <td className="cent"><img src={'/images/' + doc.img} width="100"></img></td>
                                    <td className="cent">{doc.gender}</td>
                                    <td className="cent">{doc.fname}</td>
                                    <td className="cent">{doc.lname}</td>
                                    <td className="cent"><Link to={`/staff/admin/view-doc/${doc._id}`}><i class='far fa-file-alt fa-big'></i></Link></td>
                                    <td className="cent"><Link to={'/staff/admin/update-staff/' + doc._id}><i class='fas fa-edit fa-big fa-green'></i></Link></td>
                                    <td className="cent"><Link to={'/staff/admin/delete-staff/' + doc._id}><i class="fa-solid fa-trash-can fa-big fa-red" aria-hidden="true" ></i></Link></td>
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
