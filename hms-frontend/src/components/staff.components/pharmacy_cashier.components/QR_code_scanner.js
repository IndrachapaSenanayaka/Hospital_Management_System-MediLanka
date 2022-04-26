import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import QrReader from 'react-qr-reader';
import './qrCodeScanner.css';
import axios from 'axios';


export default function QRcodeScanner(){


  return (
    <div>
      <center>
      <QrReader
        delay={300}
        style={{width: "200px"}}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        />
        {(!scanResultWebCam && <h4 className="blue-hedding mt-3">Scan QR code</h4>)}
        </center>
        
       
    

    </div>
  );
}


