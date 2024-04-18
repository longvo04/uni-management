import React from 'react'

function StudentInfor() {
  return (
    <main>
        <div className="info-container">
          <h2>Student Information</h2>
          <div className="info-box">
            <div className="info-item">
              <span className="info-label">Full Name:</span>
              <span className="info-value">John Doe</span>
            </div>
            <div className="info-item">
              <span className="info-label">Student ID:</span>
              <span className="info-value">20210001</span>
            </div>
            <div className="info-item">
              <span className="info-label">Major:</span>
              <span className="info-value">Computer Science</span>
            </div>
            <div className="info-item">
              <span className="info-label">GPA:</span>
              <span className="info-value">3.8</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status:</span>
              <span className="info-value">Active</span>
            </div>
          </div>
        </div>
      </main>
  );
}

export default StudentInfor