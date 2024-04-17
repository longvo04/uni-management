import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap.css';
import '../../assets/css/boxicon.min.css';
import '../../assets/css/custom.css';
import '../../assets/css/templatemo.css';
import '../../assets/css/style.css';
import logo from '../../assets/img/logo.jpg';


const StudentBar = () => {
  return (
    <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand h1" href="/student">
          <img src={logo} style={{ width: '25px' }} className="icon-head" />
          <span className="text-dark h4">DEF</span> <span className="text-primary h4">Uni</span>
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
          id="navbar-toggler-success">
          <div className="flex-fill mx-xl-5 mb-2">
            <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
              <li className="nav-item">
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="/student/home">Trang chủ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="/student/dashboard">Bảng điều khiển</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="/student/course-register">Đăng ký lớp học</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="/student/courses">Khóa học</a>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <a className="nav-link" href="#"><i className='bx bx-bell bx-sm bx-tada-hover text-primary'></i></a>
          </div>
          <div className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i className='bx bx-user-circle bx-sm text-primary'></i>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="infor.html">Thông tin cá nhân</a></li>
              <li><a className="dropdown-item" href="upfile.html">Tài liệu cá nhân</a></li>
              <li><a className="dropdown-item" href="#">Cài đặt</a></li>
              <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default StudentBar;