import { Route, Switch } from 'react-router-dom';

import BookList from './components/book/BookList';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path={'/'}>
          <h1>Library Catalog</h1>
        </Route>
        <Route exact path={'/books'} component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
