import React from "react";
import PropTypes from "prop-types";
import { View, Views, Toolbar, Link } from 'framework7-react';
import { faHome, faStar, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TabbarLabel from '../Components/TabbarLabel'
import styled from "styled-components"

const ToolbarLink = styled(Link)`
  padding-top: 10px !important;
`

const LoggedInLayout = () => (
  <Views tabs>
    <Toolbar tabbar position='bottom' className="tabbar-labels">
      <ToolbarLink tabLink="#tab-main" tabLinkActive> <FontAwesomeIcon icon={faHome}/><TabbarLabel text='추천'/></ToolbarLink>
      <ToolbarLink tabLink="#tab-1"> <FontAwesomeIcon icon={faStar}/><TabbarLabel text='평가'/></ToolbarLink>
      <ToolbarLink tabLink="#tab-2"><FontAwesomeIcon icon={faBell}/><TabbarLabel text='알림'/></ToolbarLink>
      <ToolbarLink tabLink="#tab-mypage"><FontAwesomeIcon icon={faUser}/><TabbarLabel text='마이페이지'/></ToolbarLink>
    </Toolbar>
    <View url="/" id="tab-main" tab tabActive main className="safe-areas" />
    <View url="/rating/" id="tab-1" tab/>
    <View url="/notification" id="tab-2" tab/>
    <View id="tab-mypage" tab/>
  </Views>
  )
const LoggedOutLayout = () => (
  <View url="/" main className="safe-areas" />
)

const Layout = ({ isLoggedIn }) => 
  isLoggedIn ? <LoggedInLayout /> : <LoggedOutLayout />;

Layout.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default Layout;


