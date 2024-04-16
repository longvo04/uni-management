import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const LecturerFooter = () => {
  return (
    <footer className="bg-secondary pt-4">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-3 col-12 align-left">
            <a className="navbar-brand" href="lecturer.html">
              <span className="text-light h5">DEF</span> <span className="text-light h5 semi-bold-600">Uni</span>
            </a>
          </div>

          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">Liên hệ</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <CallIcon fontSize="small" className="me-2" />
                <a className="text-decoration-none text-light py-1" href="tel:010-020-0340">sdt</a>
              </li>
              <li className="pb-2">
                <MailIcon fontSize="small" className="me-2" />
                <a className="text-decoration-none text-light py-1" href="mailto:info@company.com">mail@company.com</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">Hỗ trợ</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <CallIcon fontSize="small" className="me-2" />
                <a className="text-decoration-none text-light py-1" href="tel:010-020-0340">sdt</a>
              </li>
              <li className="pb-2">
                <MailIcon fontSize="small" className="me-2" />
                <a className="text-decoration-none text-light py-1" href="mailto:info@company.com">mail@company.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-100 bg-primary py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-start text-center text-light light-300">
                © Copyright 2021 Purple Buzz Company. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-end text-center text-light light-300">
                Designed by <a rel="sponsored" className="text-decoration-none text-light" href="https://templatemo.com/"
                  target="_blank"><strong>TemplateMo</strong></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LecturerFooter;
