import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../../assets/css/style.css';
import { db } from "../../../firebase/client.js";
import { collection, query, where, getDocs, count, doc, getDocFromServer } from "firebase/firestore";
import { updateDoc, arrayUnion } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, listAll, deleteObject } from "firebase/storage";

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTermClass, setSearchTermClass] = useState('');
  const [searchTermStudent, setSearchTermStudent] = useState('');
  const [file, setFile] = useState(null);
  const [classList, setClassList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [user, setUser] = useState(null);
  const [countClass, setCountClass] = useState(0);
  const [countStudent, setCountStudent] = useState(0);
  const storage = getStorage();

  useEffect(() => {
    const fetchData = async () => {
      const uid = JSON.parse(localStorage.getItem('uid'));
      const userDocRef = doc(db, "users", uid);
      const userDocSnap = await getDocFromServer(userDocRef);

      if (userDocSnap.exists()) {
        setUser(userDocSnap.data());

        const majorRef = collection(db, "courses");
        const querySnapshot = await getDocs(query(majorRef, where("courseName", "==", userDocSnap.data().major)));

        const tempClassList = [];
        const tempStudentList = [];
        const tempFileList = [];
        const promises = []; // Mảng chứa các Promise

        querySnapshot.forEach(doc => {
          const classListData = doc.data().classList;
          if (Array.isArray(classListData)) {
            tempClassList.push(...classListData);
            // Thêm Promise để lấy dữ liệu sinh viên từ mỗi lớp
            promises.push(getClassData(doc.data().classList));
          } else {
            console.error("classList is not an array:", classListData);
          }
        });

        // Sử dụng Promise.all để chờ cho tất cả các hoạt động hoàn thành
        await Promise.all(promises);

        setClassList(tempClassList);

        // Function để lấy dữ liệu sinh viên từ mỗi lớp
        async function getClassData(classList) {
          const studentPromises = classList.map(async className => {
            const classDocRef = doc(db, "class", className);
            const classDocSnap = await getDocFromServer(classDocRef);
            if (classDocSnap.exists()) {
              const classData = classDocSnap.data();
              if (classData && classData.studentList && Array.isArray(classData.studentList)) {
                tempStudentList.push(classData.studentList);
              } else {
                console.error("Invalid studentList data:", classData);
              }
            } else {
              console.log("No such class document for", className);
            }
          });
          await Promise.all(studentPromises);
        }

        // Lấy danh sách file cho từng lớp
        const filePromises = tempClassList.map(async className => {
          const classFolderRef = ref(storage, className);
          const files = await listAll(classFolderRef);
          const fileList = files.items.map(item => item.name);
          return fileList;
        });

        // Sử dụng Promise.all để chờ cho tất cả các hoạt động lấy danh sách file hoàn thành
        const fileResults = await Promise.all(filePromises);

        setStudentList(tempStudentList);
        // Sau khi tất cả các danh sách file đã được lấy, cập nhật state fileList
        setFileList(fileResults);
      } else {
        console.log("No such user document!");
      }
    };

    fetchData();
  }, []);

  const handleDeleteFile = async (className, fileName) => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, `${className}/${fileName}`);

      // Xóa file từ Firebase Storage
      await deleteObject(fileRef);

      // Cập nhật danh sách file trên giao diện bằng cách loại bỏ file đã xóa
      setFileList(prevFileList => {
        const updatedFileList = [...prevFileList];
        const classIndex = updatedFileList.findIndex(item => item === className);
        if (classIndex !== -1) {
          updatedFileList[classIndex] = updatedFileList[classIndex].filter(item => item !== fileName);
        }
        return updatedFileList;
      });

      console.log("File deleted successfully!");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const filterClassData = (className, searchTerm) => {
    return className.filter(detail => detail && detail.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filterStudentData = (studentList, searchTerm) => {
    return studentList.filter(student =>
      student.fullnName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.mssv.includes(searchTerm)
    );
  };

  const calculateFinalGrade = (student) => {
    const quizGrade = student.quiz * 0.05;
    const bonusGrade = student.bonus * 0.05;
    const homeworkGrade = student.homework * 0.2;
    const midTermGrade = student.midTerm * 0.3;
    const finalTermGrade = student.finalTerm * 0.4;

    return (quizGrade + bonusGrade + homeworkGrade + midTermGrade + finalTermGrade).toFixed(1);
  };

  const displayStudentDetails = (classDetail, index) => {
    setSelectedClass(classDetail);
    setCountClass(index);
  };

  const displayStudentGrades = (student, index) => {
    setSelectedStudent(student);
    setCountStudent(index);
  };

  const handleBackToClass = () => {
    setSelectedClass(null);
    setSelectedStudent(null);
    setSearchTermClass('');
  };

  const handleBackToStudent = () => {
    setSelectedStudent(null);
    setSearchTermStudent('');
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file && selectedClass) {
      try {
        // Tạo tham chiếu đến vị trí lưu trữ trên Firebase Storage
        const storage = getStorage();
        const classFolderRef = ref(storage, `${selectedClass}/${file.name}`);

        // Tải file lên Firebase
        const uploadTask = uploadBytesResumable(classFolderRef, file);

        uploadTask.on('state_changed',
          (snapshot) => {
            // Thực hiện theo dõi tiến trình tải lên nếu cần
          },
          (error) => {
            // Xử lý lỗi khi tải lên
            console.error("Error uploading file:", error);
          },
          () => {
            // Xử lý khi tải lên hoàn thành
            console.log("Upload complete!");
            // Thêm xử lý hoặc thông báo thành công ở đây
          }
        );
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert('Vui lòng chọn một file trước khi tải lên.');
    }
  };

  const updateBonus = async (newValue) => {
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
      try {
        const classDocRef = doc(db, "class", classList[countClass]);
        const classDocSnap = await getDocFromServer(classDocRef);

        if (classDocSnap.exists()) {
          const studentListData = classDocSnap.data().studentList;
          const updatedStudentList = [...studentListData];
          updatedStudentList[countStudent].bonus = newValue;

          await updateDoc(classDocRef, {
            studentList: updatedStudentList
          });

          // Sau khi cập nhật thành công, gửi lại truy vấn để lấy dữ liệu mới từ Firebase
          const updatedClassDocSnap = await getDocFromServer(classDocRef);
          if (updatedClassDocSnap.exists()) {
            const updatedStudentListData = updatedClassDocSnap.data().studentList;
            // Cập nhật state và selectedStudent với dữ liệu mới nhất từ Firebase
            setStudentList(updatedStudentListData);
            setSelectedStudent({ ...selectedStudent, bonus: newValue });
          } else {
            console.error("No such class document!");
          }
        } else {
          console.error("No such class document!");
        }
      } catch (error) {
        console.error("Error updating bonus:", error);
      }
    } else {
      console.error("Invalid bonus value!");
    }
  };

  return (
    <Box sx={{ width: '100%', minHeight: '400px', backgroundColor: '#efefefef' }}>
      <Box sx={{ height: '80px' }}></Box>
      {selectedClass === null && (
        <Box className="search-container" sx={{ backgroundColor: 'white' }}>
          <input
            id="searchInput"
            type="text"
            placeholder="Tìm kiếm lớp học..."
            className="form-control"
            value={searchTermClass}
            onChange={(e) => setSearchTermClass(e.target.value)}
          />
          <h4>Giảng viên: {user ? user.fullnName : ''}</h4>
          <ul id="courseList">
            {filterClassData(classList.map((count) => count), searchTermClass).map((detail, index) => (
              <li key={detail} onClick={() => displayStudentDetails(detail, index)}>
                {`${detail} - Sĩ số: ${studentList[index] && studentList[index].length}`}
              </li>
            ))}
          </ul>

        </Box>
      )}

      {selectedClass !== null && selectedStudent === null && (
        <Box className="search-container" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', paddingTop: '16px', gap: 2 }}>
          <input
            id="searchInput"
            type="text"
            placeholder="Tìm kiếm sinh viên..."
            className="form-control"
            value={searchTermStudent}
            onChange={(e) => setSearchTermStudent(e.target.value)}
          />

          <h4>{selectedClass}</h4>

          <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '16px', gap: 2, border: '1px solid #e0e0e0' }}>
            <Box className="file-upload-container">
              <Typography variant="h5" mb={2}>Tải lên file</Typography>
              <input type="file" onChange={handleFileChange} style={{ marginBottom: '20px' }} />
              <Button variant="contained" color="primary" onClick={handleUpload}>Tải lên</Button>
            </Box>
            {selectedClass !== null && (
              <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '16px', gap: 2 }}>
                <h4>Danh sách file đã tải</h4>
                <ul id="courseList">
                  {fileList[countClass] && fileList[countClass].map((file, index) => (
                    <li key={index}>
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ display: 'flex', width: '500px', justifyContent: 'flex-start' }}>
                          <a href={`https://firebasestorage.googleapis.com/v0/b/def-uni-management.appspot.com/o/${selectedClass}%2F${encodeURIComponent(file)}?alt=media`} target="_blank">{file}</a>
                        </Box>
                        <Button variant="contained" color="secondary" onClick={() => handleDeleteFile(selectedClass, file)}>Xóa</Button>
                      </Box>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '16px', gap: 2, border: '1px solid #e0e0e0' }}>
            <ul id="courseList">
              <h4>Danh sách học sinh</h4>
              {filterStudentData(studentList[countClass].map((detail, index) => ({ ...detail, key: index })), searchTermStudent).map((student, index) => (
                <li key={index} onClick={() => displayStudentGrades(student, index)}>
                  {`${student.fullnName}, ${student.mssv}`}
                </li>
              ))}
            </ul>
          </Box>

          <Button variant="contained" color="primary" onClick={handleBackToClass}>Trở về</Button>
        </Box>
      )}

      {selectedStudent !== null && studentList[countClass] && studentList[countClass][countStudent] && (
        <Box className="search-container" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
          <h4>Điểm của {studentList[countClass][countStudent].fullnName}</h4>
          <ul id="courseList">
            <li>
              {`Điểm kiểm tra: ${studentList[countClass][countStudent].quiz}; thay đổi thành: `}
              <input
                type="number"
                value={studentList[countClass][countStudent].quiz}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
                    updateBonus(newValue);
                  } else {
                    console.error("Invalid bonus value!");
                  }
                }}
              />
            </li>
            <li>
              {`Điểm bonus: ${studentList[countClass][countStudent].bonus}; thay đổi thành: `}
              <input
                type="number"
                value={studentList[countClass][countStudent].bonus}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
                    updateBonus(newValue);
                  } else {
                    console.error("Invalid bonus value!");
                  }
                }}
              />
            </li>
            <li>
              {`Điểm bài tập: ${studentList[countClass][countStudent].homework}; thay đổi thành: `}
              <input
                type="number"
                value={studentList[countClass][countStudent].homework}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
                    updateBonus(newValue);
                  } else {
                    console.error("Invalid bonus value!");
                  }
                }}
              />
            </li>
            <li>
              {`Điểm giữa kỳ: ${studentList[countClass][countStudent].midTerm}; thay đổi thành: `}
              <input
                type="number"
                value={studentList[countClass][countStudent].midTerm}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
                    updateBonus(newValue);
                  } else {
                    console.error("Invalid bonus value!");
                  }
                }}
              />
            </li>
            <li>
              {`Điểm cuối kỳ: ${studentList[countClass][countStudent].finalTerm}; thay đổi thành: `}
              <input
                type="number"
                value={studentList[countClass][countStudent].finalTerm}
                min="0"
                max="10"
                style={{ marginLeft: '10px', width: '50px' }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
                    updateBonus(newValue);
                  } else {
                    console.error("Invalid bonus value!");
                  }
                }}
              />
            </li>
            <li>
              <Box>
                {`Điểm tổng kết: ${calculateFinalGrade(studentList[countClass][countStudent])}`}
              </Box>
            </li>
          </ul>
          <Button variant="contained" color="primary" onClick={handleBackToStudent}>Trở về</Button>
        </Box>
      )}

      <Box sx={{ height: '80px' }}></Box>
    </Box>
  );
};

export default Courses;
