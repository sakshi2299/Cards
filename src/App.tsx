import React from 'react';
import ReusableComponent from './components/ReusableComponents';
import { people } from './helpers/utils';
const App: React.FC = () => {

  return (
    <div>
      <ReusableComponent title="Meet our founding team" people={people} />
    </div>
  );
};

export default App;

