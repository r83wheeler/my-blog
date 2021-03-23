/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Header(props) {

  return (
    <ul className="nav nav-pills">
      {
        props.pages.map((item, index) => {
          return (
            <li className="nav-item">
              <a
                //href={item.url}
                onClick={() => props.setPage(index)}
                className={"nav-link " + (props.currentPage === 0 ? 'active' : '')}
                >
                {item.readableName}
              </a>
            </li>
          )
        })
      }
      <div className="btn btn-secondary">
        {props.children}
        </div>
    </ul>
  )
}

export default Header;