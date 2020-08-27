import React from 'react';
import { useHistory } from 'react-router-dom';
import RoboTeacher from '../images/RoboTeacher.jpg';
import TeacherProtest from '../images/TeacherProtest.jpg';
interface ArticlePreviewProps {
  title: string;
  imageName: string;
  body: string[];
  gridName: string;
  index: number;
}

function ArticlePreview({
  title,
  imageName,
  body,
  gridName,
  index,
}: ArticlePreviewProps) {
  if (gridName === 'side-area') {
    gridName += index;
  }

  let n = RoboTeacher;
  switch (imageName) {
    case 'RobotTeacher':
      n = RoboTeacher;
      break;
    case 'TeacherProtest':
      n = TeacherProtest;
      break;
  }
  // console.log(n);
  const history = useHistory();
  return (
    // <Link to='/test'>
    <article
      className={`Article ${gridName}`}
      onClick={() => history.push(`/article/${title}`)}>
      {}
      <img className='Article__img' src={n} alt='' />
      <h1 className='Article__title'>{title}</h1>
      <p className='Article__paragraph'>{body[0]}</p>
      <br />
      <hr />
    </article>
    // </Link>
  );
}

export default ArticlePreview;
