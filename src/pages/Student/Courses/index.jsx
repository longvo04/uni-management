

const Courses = () => {
  return (
    <main class="container-lg py-5">
      <h3 class="pricing-header semi-bold-5">HỖ TRỢ GIẢNG DẠY VÀ HỌC TẬP</h3>
      <div class="row px-lg-3">
      </div>

      <div class="search-container">
        <input type="text" id="searchInput" placeholder="Tìm kiếm khóa học..."/>
        <ul id="courseList">
          <li>Khóa học 1</li>
        </ul>
      </div>
      <script>
        {
          document.addEventListener('DOMContentLoaded', function () {
            const searchInput = document.getElementById('searchInput');
            const courseList = document.getElementById('courseList');
            const courses = Array.from(courseList.getElementsByTagName('li'));

            searchInput.addEventListener('input', function (e) {
              const searchTerm = e.target.value.toLowerCase();

              courses.forEach(course => {
                const courseName = course.textContent.toLowerCase();

                if (courseName.includes(searchTerm)) {
                  course.style.display = 'block';
                } else {
                  course.style.display = 'none';
                }
              });
            });
          })
        }
      </script>
    </main>
  );
}

export default Courses;