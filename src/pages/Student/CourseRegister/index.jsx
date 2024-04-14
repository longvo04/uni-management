import Box from '@mui/material/Box';


const CourseRegister = () => {
  return (
    <Box>
      <main class="container mt-5" id="table1">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">Bảng Đăng ký</div>
              <div class="card-body">
                <table class="table table-bordered">
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
                    <tr onclick="showDetail('HE233_D1', 'Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024')">
                      <td>1</td>
                      <td>HE233_D1</td>
                      <td>Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024
                      </td>
                      <td>26/03/2024<br/>10:00</td>
                      <td>02/04/2024<br/>23:00</td>
                    </tr>
                    <tr
                      onclick="showDetail('AV232_D2_KQ', 'Kết quả đợt đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024')">
                      <td>2</td>
                      <td>AV232_D2_KQ</td>
                      <td>Kết quả đợt đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024
                      </td>
                      <td>27/03/2024<br/>08:00</td>
                      <td>27/03/2024<br/>08:00</td>
                    </tr>
                    <tr onclick="showDetail('AV232_D2', 'Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024')">
                      <td>3</td>
                      <td>AV232_D2</td>
                      <td>Đăng ký môn học Anh Văn theo yêu cầu khai giảng 08/04/2024
                      </td>
                      <td>19/03/2024<br/>10:00</td>
                      <td>26/03/2024<br/>15:00</td>
                    </tr>
                    <tr
                      onclick="showDetail('KQBS232', 'Kết quả Đăng ký các môn học LV,DA HK2/2023-2024 đợt cuối + Anh văn nhu cầu + Dự thính Đợt 2 LTr2	26/01/2024')">
                      <td>4</td>
                      <td>KQBS232</td>
                      <td>Kết quả Đăng ký các môn học LV,DA HK2/2023-2024 đợt cuối + Anh văn nhu cầu + Dự thính Đợt 2 LTr2
                        26/01/2024
                      </td>
                      <td>26/01/2024<br/>15:00</td>
                      <td>26/01/2024<br/>15:00</td>
                    </tr>
                    <tr
                      onclick="showDetail('DT232_D2', 'Đăng ký bổ sung Dự thính lộ trình 2 HK2/2023-2024 và Kết quả đợt 1')">
                      <td>5</td>
                      <td>DT232_D2</td>
                      <td>Đăng ký bổ sung Dự thính lộ trình 2 HK2/2023-2024 và Kết quả đợt 1
                      </td>
                      <td>22/01/2024<br/>10:00</td>
                      <td>25/01/2024<br/>15:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>


      <div class="container mt-5" id="table2" style={{ display: "none" }}>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header" id="table2Header"></div>
              <div class="card-body" id="table2Body"></div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <button class="btn btn-primary" onclick="backToTable1()">Trang chính</button>
            <button class="btn btn-primary" onclick="nextToTable3()">Đăng ký/Hiệu chỉnh</button>
          </div>
        </div>
      </div>

      <div class="container mt-5" id="table3" style={{ display: "none" }}>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <table class="table table-bordered" id="table3Body">
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
                    {/* <!-- Nội dung bảng 3 được tạo bằng JavaScript --> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <button class="btn btn-primary" onclick="backToTable2()">Trở về</button>
            {/* <!-- Các nút điều hướng khác --> */}
          </div>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </Box>
  )
}

export default CourseRegister;
