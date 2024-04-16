import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function LecturerBar() {
  return (
    <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand h1" href="lecturer.html">
          <img src="/logo.jpg" className="icon-head" />
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
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="lecturer.html">Trang chủ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="fullcalendar.html">Bảng điều khiển</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="registerforclass.html">Đăng ký nhận
                  lớp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-primary rounded-pill px-3" href="course.html">Khóa học</a>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <a className="nav-link" href="#"><NotificationsNoneIcon color="primary" fontSize="small" /></a>
          </div>
          <div className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
              aria-expanded="false">
              <AccountCircleIcon color="primary" fontSize="small" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a className="dropdown-item" href="infor.html">Thông tin cá nhân</a></li>
              <li><a className="dropdown-item" href="#">Cài đặt</a></li>
              <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LecturerBar;