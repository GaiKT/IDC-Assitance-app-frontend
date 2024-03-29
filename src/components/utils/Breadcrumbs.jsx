// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="text-sm breadcrumbs">
        <ul>
            <li><Link to="/">Home</Link></li> 
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                <li key={name}>
                    {isLast ? (
                    <span>{name}</span>
                    ) : (
                    <Link to={routeTo}> {name} </Link>
                    )}
                </li>
                );
            })}
        </ul>
    </div>
  );
};

export default Breadcrumbs;
