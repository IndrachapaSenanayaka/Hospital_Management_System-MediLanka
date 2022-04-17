import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';






export default function SearchDoc() {


    const [docs, setDocs] = useState([]);
    const [searchData, setSearchData] = useState("")
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
                    <div className="box">
                        <form>
                            <i className="fa fa-search fa-big-1" aria-hidden="true"></i>
                            <input type="search" className="form-control search" placeholder="Search by First Name, Last Name or NIC" onChange={(e) => { setSearchData(e.target.value); }} />

                        </form>
                    </div>

                    <table className="table table-striped table-hover table-condensed ">

                        <thead>
                            <tr>
                                <th className="cent" scope="col">Doctor&nbsp;Image</th>
                                <th className="cent" scope="col" >Title</th>
                                <th className="cent" scope="col">First&nbsp;Name</th>
                                <th className="cent" scope="col">Last&nbsp;Name</th>
                                <th className="cent" scope="col">View</th>

                            </tr>
                        </thead>
                        <tbody>
                            {docs.filter(val => {
                                if (searchData === '') {
                                    return val;
                                } else if (
                                    val.fname.toLowerCase().includes(searchData.toLowerCase()) || val.lname.toLowerCase().includes(searchData.toLowerCase()) || val.nic.toLowerCase().includes(searchData.toLowerCase())
                                ) {
                                    return val;
                                }

                            }).map((doc, key) => (
                                <tr key={key}>
                                    <td className="cent"><img src={'/images/' + doc.img} width="100"></img></td>
                                    <td className="cent">{doc.gender}</td>
                                    <td className="cent">{doc.fname}</td>
                                    <td className="cent">{doc.lname}</td>
                                    <td className="cent"><Link to={'/staff/admin/view-doc/' + doc._id}><i class='far fa-file-alt fa-big'></i></Link></td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>







    );

}
