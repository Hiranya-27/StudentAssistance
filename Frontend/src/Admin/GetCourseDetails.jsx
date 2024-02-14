import { useState, useEffect } from 'react';
import { courseList } from '../service/user';
import Header from './Header';
import NavBar1 from '../NavBar1';

const GetCourseDetails = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    courseList()
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <header>
        <NavBar1 />
      </header>
      <div style={{ display: 'flex', flex: 1 }}>
        <div className="SideMenuAndPageContent" style={{ width: '250px', flexShrink: 0 }}>
          <Header />
        </div>
        <div className="user-details-container">
          <br />
          <br />
          <h1 className="user-list-title">Course Details</h1>
          <table className="user-table">
            <thead className='user-table-head'>
              <tr>
                <th className="user-id-header">User ID</th>
                <th className="email-header">Course name</th>
                <th className="role-header">Description</th>
                <th className="dur-header">Duration</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="user-row">
                  <td className="user-id">{user.id}</td>
                  <td className="email">{user.courseName}</td>
                  <td className="des">{user.description}</td>
                  <td className="dur">{user.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetCourseDetails;
