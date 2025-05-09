import React from 'react';
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className="channel-list__sidebar">
      <div className="channel-list___sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="30"/>
        </div>
      </div>
      <div className="channel-list___sidebar__icon2">
        <div className="icon1__inner">
          <img src={LogoutIcon} alt="Logout" width="30"/>
        </div>
      </div>
    </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p classNamme="channel-list__header__text">Hospital Chat Group</p>
  </div>
)
const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
      </div>
    </>
  )
}

export default ChannelListContainer;