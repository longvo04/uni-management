import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/bootstrap.css';
import '../../../assets/css/boxicon.min.css';
import '../../../assets/css/custom.css';
import '../../../assets/css/templatemo.css';
import '../../../assets/css/style.css';
import '../../../assets/js/bootstrap.bundle.min.js';
import '../../../assets/js/custom.js';
import '../../../assets/js/fslightbox.js';
// import '../../../assets/js/fullcalendar.js';
import '../../../assets/js/isotope.pkgd.js';
import '../../../assets/js/jquery-1.10.2.js';
import '../../../assets/js/jquery-ui.custom.min.js';
import '../../../assets/js/jquery.min.js';
import '../../../assets/js/templatemo.js';
import '../../../assets/js/templatemo.min.js';
import img1 from '../../../assets/img/recent-work-01.jpg';
import img2 from '../../../assets/img/recent-work-02.jpg';
import img3 from '../../../assets/img/recent-work-03.jpg';
import img4 from '../../../assets/img/recent-work-04.jpg';
import img5 from '../../../assets/img/recent-work-05.jpg';
import img6 from '../../../assets/img/recent-work-06.jpg';


const StudentHomePage = () => {
  return (
    <div>
      <div className="banner-wrapper bg-light">
        <div id="index_banner" className="banner-vertical-center-index container-fluid pt-5">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">

                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Hướng dẫn sử dụng
                    </h1>
                    <p className="banner-body text-muted py-3 mx-0 px-0">

                    </p>
                    <a className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" href="#" role="button">View
                      more</a>
                  </div>
                </div>

              </div>
              <div className="carousel-item">

                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                      Thông tin hoạt động sinh viên
                    </h1>
                    <p className="banner-body text-muted py-3">

                    </p>
                    <a className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" href="#" role="button">View
                      more</a>
                  </div>
                </div>

              </div>
              <div className="carousel-item">

                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                      Thông tin học vụ
                    </h1>
                    <p className="banner-body text-muted py-3">

                    </p>
                    <a className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" href="#" role="button">View
                      more</a>
                  </div>
                </div>

              </div>
            </div>
            <a className="carousel-control-prev text-decoration-none" href="#carouselExampleIndicators" role="button"
              data-bs-slide="prev">
              <i className='bx bx-chevron-left'></i>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next text-decoration-none" href="#carouselExampleIndicators" role="button"
              data-bs-slide="next">
              <i className='bx bx-chevron-right'></i>
              <span className="visually-hidden">Next</span>
            </a>
          </div>


        </div>
      </div>


      <section className="py-5 mb-5">
        <div className="container">
          <div className="recent-work-header row text-center pb-5">
            <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Thông báo chung</h2>
          </div>
          <div className="row gy-5 g-lg-5 mb-4">

            <div className="col-md-4 mb-3">
              <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                <img className="recent-work-img card-img" src={img1} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                  <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                    <h3 className="card-title light-300">Lịch ĐKMH HK233</h3>
                    <p className="card-text"></p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 mb-3">
              <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                <img className="recent-work-img card-img" src={img2} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                  <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                    <h3 className="card-title light-300">Đóng học phí HK232</h3>
                    <p className="card-text">Từ ngày 9/04/2024 đến 15h ngày 16/04/2024</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 mb-3">
              <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                <img className="recent-work-img card-img" src={img3} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                  <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                    <h3 className="card-title light-300">Thông báo gia hạn SHCD</h3>
                    <p className="card-text">Deadline quizz SHCD được dời đến 15h00 1/04/2024</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 mb-3">
              <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                <img className="recent-work-img card-img" src={img4} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                  <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                    <h3 className="card-title light-300">Các quy định học vụ thay đổi từ HK222</h3>
                    <p className="card-text"></p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 mb-3">
              <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                <img className="recent-work-img card-img" src={img5} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                  <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                    <h3 className="card-title light-300">Career Talk</h3>
                    <p className="card-text">Những kỹ năng mềm cần chuẩn bị trước khi ra trường</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 mb-3">
              <a href="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                <img className="recent-work-img card-img" src={img6} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                  <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                    <h3 className="card-title light-300">Thư khảo sát</h3>
                    <p className="card-text">"nâng cao nhận thức sức khỏe tinh thần trong sinh viên"</p>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentHomePage;
