import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Stocks } from './components/Stocks';
import { Articles } from './components/Articles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Article from './components/Article';

const data = {
  title: 'Cogress approves large scale use of robotic teachers from Robo Corp',
  imageName: 'RoboTeacher',
  body: [
    'Robotic teachers from the Google spin off e-learning company Robot corp have gained the approval of the united states congress.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, corporis sunt odit repellendus molestias nostrum incidunt illum numquam aliquam nisi expedita facere amet iste placeat tempore dicta deleniti pariatur rem.',
    'second11111111111111111',
  ],
};
const data2 = {
  title: 'Teacher unions outraged',
  imageName: 'RoboTeacher',
  body: [
    'Robotic teachers from the Google spin off e-learning company Robot corp have gained the approval of the united states congress.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, corporis sunt odit repellendus molestias nostrum incidunt illum numquam aliquam nisi expedita facere amet iste placeat tempore dicta deleniti pariatur rem.',
    'second11111111111111111',
  ],
};
const data3 = {
  title: 'Some teachers positive',
  imageName: 'RoboTeacher',
  body: [
    'Robotic teachers from the Google spin off e-learning company Robot corp have gained the approval of the united states congress.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, corporis sunt odit repellendus molestias nostrum incidunt illum numquam aliquam nisi expedita facere amet iste placeat tempore dicta deleniti pariatur rem.',
    'second11111111111111111',
  ],
};

const articles = [data, data2, data3];

interface ShortStory {
  title: string;
  description: string;
}

function Aside() {
  const data: ShortStory[] = [
    {
      title: 'New Chinese law',
      description:
        'China announces new controversial internet law in the formerly independent territory of Taiwan.',
    },
    {
      title: 'Global Inflation at recond low levels',
      description:
        'The world bank announces the lowest inflation figures this century',
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
    { title: 'Space establishes mining divison', description: 'description' },
    {
      title: 'New virus found in China',
      description: 'Another virus has been found in china',
    },
    { title: 'Africa Polio free anniversary', description: 'description' },
    { title: 'Italy leaves the EU', description: 'description' },
    { title: 'The Founding of the Intermarium', description: 'description' },
    { title: 'Assasination attempt caught', description: 'description' },
    { title: 'Amsterdam swallowed by sea', description: 'description' },
    {
      title: 'First transgender person on the moon',
      description: 'description',
    },
  ];

  return (
    <aside className='Side-panel'>
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

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Stocks width={window.innerWidth - 6} height={20} />
        <Switch>
          <Route exact path='/'>
            <div className='Landing-container'>
              <main className='Main'>
                <Articles articles={articles} />
              </main>
              <Aside />
            </div>
          </Route>
          <Route path='/article/:articleName'>
            <Article />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
