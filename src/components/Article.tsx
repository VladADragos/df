import React from 'react';
import { useLocation } from 'react-router';
import articles from '../ArticleData';
import RoboTeacher from '../images/RoboTeacher.jpg';
import TeacherProtest from '../images/TeacherProtest.jpg';

function titleToIndex(title: string): number {
  switch (title) {
    case 'Minerva Technologies launches nationwide use of robotic teachers':
      return 0;
    case 'Teacher unions outraged':
      return 1;
    case 'Professor positive to robotic teacher':
      return 2;
    default:
      return 0;
  }
}
function Article() {
  const location = useLocation();
  const url = location.pathname.split('/')[2];
  const article = articles[titleToIndex(url)];
  const { title, imageName, body } = article;
  let n = RoboTeacher;
  switch (imageName) {
    case 'RobotTeacher':
      n = RoboTeacher;
      break;
    case 'TeacherProtest':
      n = TeacherProtest;
      break;
  }
  return (
    <article className='ArticleBig'>
      {' '}
      <img src={n} alt='' className='ArticleBig__img' />
      <h2 className='ArticleBig__title'>{title} </h2>{' '}
      {body.map((p) => (
        <p className='ArticleBig__paragraph'> {p} </p>
      ))}
    </article>
  );
}

export default Article;
