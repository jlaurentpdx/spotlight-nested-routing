import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import fetchHyrule from './services/hyrule';
import './App.css';

function Categories() {
  return <h1>Categories</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  fetchHyrule();
  return (
    <Router>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </div>
    </Router>
  );
}
