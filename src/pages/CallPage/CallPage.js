import React from 'react';
import { useNavigate, useParams,  } from 'react-router-dom';
import users from '../../data';
import Style from './CallPage.module.scss'
import CancelIcon from '../../components/Icons/CancelIcon';
import MuteIcon from '../../components/Icons/MuteIcon';
import CallIcon from '../../components/Icons/CallIcon';

const CallPage = () => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === parseInt(userId, 10));
const navigate = useNavigate();

  return (
    <div className={Style.call_page}>
      <div className={Style.call_info}>
        <img src={user.image} alt={`image of ${user.name}`} />
        <h2>{user.name}</h2>
      </div>
      <div className={Style.call_buttons}>
        <button style={{backgroundColor: '#FB0D0D'}} onClick={()=> navigate(-1)}><CancelIcon /></button>
        <button style={{backgroundColor: '#10FF80'}}><CallIcon /></button>
        <button style={{backgroundColor: '#FFEF00'}}><MuteIcon /></button>
      </div>
    </div>
  );
};

export default CallPage;
