import { Route, Switch, Link } from 'react-router-dom';

import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path={'/'}>
          <h1>Library Catalog</h1>
          <Link to="/books">Book List</Link>
        </Route>
        <Route exact path={'/books'} component={BookList} />
        <Route exact path={'/books/:id'} component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;
