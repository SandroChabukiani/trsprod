import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(!open1);
  };const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(!open2);
  };const [open3, setOpen3] = React.useState(false);

  const handleOpen3 = () => {
    setOpen3(!open3);
  };const [open4, setOpen4] = React.useState(false);

  const handleOpen4 = () => {
    setOpen4(!open4);
  };
  const [open5, setOpen5] = React.useState(false);

  const handleOpen5 = () => {
    setOpen5(!open5);
  };


  const showSubnav = () => setSubnav(!subnav);
  return (
   <>
      <div style={{ alignItems: 'center'}}>
        <h1>მთავარი</h1>
        <div className="dropdown">
          <button onClick={handleOpen}>
            Dropdown
            <span style={{ marginLeft: '5px', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
          </button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <button onClick={showSidebar}>Menu 1</button>
              </li>
              <li className="menu-item">
                <button>Menu 2</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="dropdown">
          <button onClick={handleOpen1}>Dropdown</button>
          {open1 ? (
            <ul className="menu">
              <li className="menu-item">
                <button>Menu 1</button>
              </li>
              <li className="menu-item">
                <button>Menu 2</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="dropdown">
          <button onClick={handleOpen2}>Dropdown</button>
          {open2 ? (
            <ul className="menu">
              <li className="menu-item">
                <button>Menu 1</button>
              </li>
              <li className="menu-item">
                <button>Menu 2</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="dropdown">
          <button onClick={handleOpen3}>Dropdown</button>
          {open3 ? (
            <ul className="menu">
              <li className="menu-item">
                <button>Menu 1</button>
              </li>
              <li className="menu-item">
                <button>Menu 2</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="dropdown">
          <button onClick={handleOpen5}>Dropdown</button>
          {open5 ? (
            <ul className="menu">
              <li className="menu-item">
                <button>Menu 1</button>
              </li>
              <li className="menu-item">
                <button>Menu 2</button>
              </li>
            </ul>
          ) : null}
        </div>
        <h1>ჩვენს შესახებ</h1>
      </div>
   </>
  );
};

export default SubMenu;