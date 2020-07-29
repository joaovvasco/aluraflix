import React from 'react';
import {Link} from 'react-router-dom';

function ButtonLink({href, className, children}) {
  // props => { className: "o que alguém passar", href: "/" }
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export default ButtonLink;