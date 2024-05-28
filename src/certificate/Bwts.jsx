import React from 'react';
import './Bwts.css'; // Make sure to import the CSS file

export default function Bwts() {
  return (
    <>
      <div className="a4-paper">
        <img src="StripesLogorbg.png" alt="Stripes Logo" className="logo" />
        <div className="content">
          <div className="header">
            <p><strong>Certificate No:</strong> Stripes/BWTSNK/00157</p>
            <p style={{ textAlign: 'left' }}>This is to certify that <strong>Nitin Balwani</strong>, holder of Seaman book/Passport number - <strong>CL75369</strong> has satisfactorily completed a 2-day training course in</p>
          </div>
          <div className="name">
            NK-O3 BALLAST WATER TREATMENT SYSTEM (BWTS)<br />OPERATION AND TROUBLESHOOTING
          </div>
          <div className="topics">
            <p className="head"><strong>This program consists of the following topics:</strong></p>
            <ol className="list">
              <li>Basic principles of NK-O3 BWTS in disinfecting ballast water.</li>
              <li>Function and working of the various components of the NK-O3 BWTS <br />system.</li>
              <li>Study of the P & I diagrams and familiarisation with the operation of the <br /> system.</li>
              <li>Likely faults and troubleshooting the problems that could occur with <br />the various components.</li>
              <li>Steps for logging data.</li>
            </ol>
          </div>
          <p className="date">held from <strong>15-Apr 2024 to 16-Apr 2024.</strong></p>
          <div className="photo-container">
            <img className="photo" src="photo.jpg" alt="Candidate Photo" />
          </div>
          <div className="footer">
            <div className="signature-section">
              <div className="signaturec">
                <p>Signature of Candidate</p>
              </div>
              <div className="signaturev">
                <p><strong>Capt. Vincent Fernandes</strong><br />Principal</p>
              </div>
            </div>
            <p className="footer-issued">Issued at Mumbai this <strong>Wednesday, 17-April 2024</strong></p>
            <p className="footer-big footer-italic">"This course was developed and delivered as per the specific requirement of Scorpio Ship <br /> Management and is valid only for vessels operated by them."</p>
            <p className="footer-small contact-info">
              Vinayalaya Compound, Near Guru Nanak High School / Sai Palace Hotel. Mahakali Caves Road, Andheri East, Mumbai 400093.
              <br />Tel.No.: +912247499225 Email: training@stripesacademy.net
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
