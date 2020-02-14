import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';
import { FaUserCircle } from 'react-icons/fa';


const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/profile`}>
          {/* <div className="user-item__image"> */}
            <p style={{fontSize: "1.7rem", marginRight: "4vw"}}><FaUserCircle /></p>
          {/* </div> */}
          <div className="user-item__info">
            <h2>{props.name}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
