import React from 'react';
import { Button } from "framework7-react"
import UserContainer from '../../Components/User/UserContainer';

export default ({user_id}) => {
  return(<UserContainer userId={user_id}/>);
}