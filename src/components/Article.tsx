import React from 'react';
import { useLocation } from 'react-router';
import articles from '../ArticleData';
import RoboTeacher from '../images/RoboTeacher2.jpg';
import TeacherProtest from '../images/TeacherProtest.jpg';
import Lecturer from '../images/Lecturer.png';
function titleToIndex(title: string): number {
  switch (title) {
    case 'Robotic teachers enter the classroom':
      return 0;
    case 'Teacher unions outraged':
      return 1;
    case 'Professor positive to robotic teachers':
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
    case 'Lecturer':
      n = Lecturer;
      break;
  }

  console.log(imageName);
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
