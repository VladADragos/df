import React from 'react';
import ArticlePreview from './ArticlePreview';
import articles from '../ArticleData';

export function Articles() {
  let gridName: string = 'main-area';
  gridName = 'side-area';

  return (
    <>
      {' '}
      {articles.map(({ title, imageName, body }, index) => (
        <ArticlePreview
          key={index}
          gridName={index === 0 ? 'main-area' : gridName}
          imageName={imageName}
          title={title}
          index={index}
          body={body}
        />
      ))}
    </>
  );
}
