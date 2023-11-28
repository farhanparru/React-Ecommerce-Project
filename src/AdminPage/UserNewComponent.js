import React, { useContext } from 'react';
import { Data } from '../App';
import SideBar from './SideBar';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const UserNewComponent = () => {
  const { userData } = useContext(Data);

  return (
    <div className='d-flex bg-secondary container-fluid min-vh-100'>
      <div className='col-4 col-md-2 vh-100 bg-white' style={{ margin: '4px' }}>
        <SideBar />
      </div>
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {userData.map((user, index) => (
          <Card key={index} style={{ width: '16rem', margin: '10px' }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
              alt=""
              fluid
              style={{ height: '106px', width: '45%' }}
            />
            <Card.Body>
              <Card.Title>{user.userName}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>User Details</Card.Subtitle>
              <Card.Text>
                <strong>Password:</strong> {user.password}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {user.emailId}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserNewComponent;
