import React, { useState } from 'react';
import Box from '@mui/material/Box';
import '../../../assets/css/style.css';

const CourseRegister = () => {
  const [showTable1, setShowTable1] = useState(true);
  const [showTable2, setShowTable2] = useState(false);
  const [showTable3, setShowTable3] = useState(false);
  const [table2Header, setTable2Header] = useState('');
  const [table2Body, setTable2Body] = useState('');

  const showDetail = (dotDangKy, tenDotDangKy) => {
    setShowTable1(false);
    setTable2Header(tenDotDangKy);

    let bodyContent = '';

    switch (dotDangKy) {
      case 'HE233_D1':
        bodyContent = (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã môn</th>
                <th>Tên môn</th>
                <th>ĐVHT</th>
                <th>Ngôn ngữ</th>
                <th>Nhóm</th>
                <th>GV Lý thuyết</th>
                <th>GV Bài tập</th>
                <th>Đã đăng ký</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>abc</td>
                <td>ABC</td>
                <td>3</td>
                <td>EN</td>
                <td>A1</td>
                <td>GV1</td>
                <td>GV2</td>
                <td>20</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        );
        break;

      case 'AV232_D2_KQ':
        bodyContent = (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã môn</th>
                <th>Tên môn</th>
                <th>ĐVHT</th>
                <th>Ngôn ngữ</th>
                <th>Nhóm</th>
                <th>GV Lý thuyết</th>
                <th>GV Bài tập</th>
                <th>Đã đăng ký</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>xyz</td>
                <td>XYZ</td>
                <td>3</td>
                <td>EN</td>
                <td>A1</td>
                <td>GV3</td>
                <td>GV4</td>
                <td>15</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        );
        break;

      default:
        bodyContent = <p>Không có dữ liệu cho đợt đăng ký này.</p>;
        break;
    }

    setTable2Body(bodyContent);
    setShowTable2(true);
  };

  const backToTable1 = () => {
    setShowTable1(true);
    setShowTable2(false);
    setShowTable3(false);
  };

  const nextToTable3 = () => {
    setShowTable1(false);
    setShowTable2(false);
    setShowTable3(true);
  };

  const backToTable2 = () => {
    setShowTable1(false);
    setShowTable2(true);
    setShowTable3(false);
  };

  return (
    <Box>
      {showTable1 && (
        <main className="container mt-5" id="table1">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">Bảng Đăng ký</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Đợt Đăng ký</th>
                        <th></th>
                        <th>Thời gian đăng ký</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={() => showDetail('HE233_D1', 'Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024')}>
                        <td>1</td>
                        <td>HE233_D1</td>
                        <td>Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024</td>
                        <td>26/03/2024<br />10:00</td>
                        <td>02/04/2024<br />23:00</td>
                      </tr>
                      <tr onClick={() => showDetail('AV232_D2_KQ', 'Kết quả đợt đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024')}>
                        <td>2</td>
                        <td>AV232_D2_KQ</td>
                        <td>Kết quả đợt đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024</td>
                        <td>27/03/2024<br />08:00</td>
                        <td>27/03/2024<br />08:00</td>
                      </tr>
                      <tr onClick={() => showDetail('AV232_D2', 'Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024')}>
                        <td>3</td>
                        <td>AV232_D2</td>
                        <td>Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024</td>
                        <td>19/03/2024<br />10:00</td>
                        <td>26/03/2024<br />15:00</td>
                      </tr>
                      <tr onClick={() => showDetail('KQBS232', 'Kết quả Đăng ký các môn học LV,DA HK2/2023-2024 đợt cuối + Anh văn nhu cầu + Dự thính Đợt 2 LTr2	26/01/2024')}>
                        <td>4</td>
                        <td>KQBS232</td>
                        <td>Kết quả Đăng ký các môn học LV,DA HK2/2023-2024 đợt cuối + Anh văn nhu cầu + Dự thính Đợt 2 LTr2 26/01/2024</td>
                        <td>26/01/2024<br />15:00</td>
                        <td>26/01/2024<br />15:00</td>
                      </tr>
                      <tr onClick={() => showDetail('DT232_D2', 'Đăng ký bổ sung Dự thính lộ trình 2 HK2/2023-2024 và Kết quả đợt 1')}>
                        <td>5</td>
                        <td>DT232_D2</td>
                        <td>Đăng ký bổ sung Dự thính lộ trình 2 HK2/2023-2024 và Kết quả đợt 1</td>
                        <td>22/01/2024<br />10:00</td>
                        <td>25/01/2024<br />15:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {showTable2 && (
        <div className="container mt-5" id="table2">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header" id="table2Header">{table2Header}</div>
                <div className="card-body" id="table2Body">{table2Body}</div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <button className="btn btn-primary buttonSpacing" onClick={backToTable1}>Trang chính</button>
              <button className="btn btn-primary" onClick={nextToTable3}>Đăng ký/Hiệu chỉnh</button>
            </div>
          </div>
        </div>
      )}

      {showTable3 && (
        <div className="container mt-5" id="table3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <table className="table table-bordered" id="table3Body">
                    <thead>
                      <tr>
                        <th>Nhóm lớp</th>
                        <th>DK/ Sĩ số</th>
                        <th>Ngôn ngữ</th>
                        <th>Nhóm LT</th>
                        <th>Giảng viên</th>
                        <th>Nhóm BT</th>
                        <th>Giảng viên BT/TN</th>
                        <th>Sĩ số LT</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Nội dung bảng 3 được tạo bằng JavaScript */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <button className="btn btn-primary" onClick={backToTable2}>Trở về</button>
              {/* Các nút điều hướng khác */}
            </div>
          </div>
        </div>
      )}
      <div class="margin-bottom"></div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </Box>
  );
};

export default CourseRegister;
