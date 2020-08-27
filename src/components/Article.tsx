import React from 'react';
import { useLocation } from 'react-router';

function Article() {
  const location = useLocation();
  const title = location.pathname.split('/')[2];
  return <div>{title}</div>;
}

export default Article;
