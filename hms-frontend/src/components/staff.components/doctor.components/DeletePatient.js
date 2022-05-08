import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

export default function DeletePatient(){

    let {id} = useParams();

    useEffect(() => {
        axios
            .delete("http://localhost:8070/Admit/delete/"+id)
            .then(res => {alert("Patient Admit Details Succefully deleted")})
            .catch(error => {console.log(error)});
    });

    return(

        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <center>
				<br/>
                <h4>Patient Admit Details Succefully deleted"</h4>
            </center>
            
        </div>
    );

}    