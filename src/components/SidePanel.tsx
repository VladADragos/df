import React from 'react';
interface ShortStory {
  title: string;
  description: string;
}

const data: ShortStory[] = [
  {
    title: 'New Chinese law',
    description:
      'China announces new controversial internet law in the formerly independent territory of Taiwan.',
  },
  {
    title: 'Global Inflation at recond low levels',
    description: 'The world bank announces the lowest inflation figures ever',
  },
  {
    title: 'Enviromental terrorism',
    description: 'Environmental terrorist group threatens vulcanic winter',
  },
  {
    title: 'Colony on mars soon a reality',
    description:
      'The first colony mission from nasa is set to launch next month',
  },
  { title: 'Space mining', description: 'Space establishes mining divison' },
  {
    title: 'New virus found in China',
    description: 'Another virus has been found in china',
  },
  {
    title: 'Italy leaves the EU',
    description: 'Italys referendum on leaving the unions ends up with a Yes',
  },
  {
    title: 'New sactions on Russia',
    description:
      'The EU and the US has put additional sactions on Russia after its annexation of eastern Ukraine',
  },
  {
    title: 'First transgender person on the moon',
    description: 'Alex Jones is the first transgender astronaut on the moon',
  },
];

function SidePanel() {
  return (
    <aside className='Side-panel'>
      <h2>2035-09-21</h2>
      <br />
      {data.map(({ title, description }) => (
        <div className='short' key={title}>
          {' '}
          <h3 className='short-title'>{title}</h3>
          <p className='short-description'>{description}</p> <hr />
        </div>
      ))}
    </aside>
  );
}

export default SidePanel;
