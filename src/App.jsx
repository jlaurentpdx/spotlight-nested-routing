import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import fetchHyrule from './services/hyrule';
import './App.css';
import { useState, useEffect } from 'react';

function Categories({ hyrule: data }) {
  const { url } = useRouteMatch();
  console.log(data);
  return (
    <>
      <div>
        <h1>Categories</h1>;
      </div>
      <div>
        {hyrule.map((item) => {
          <div key={item.id}>
            <Link to={`${url}/${id}`}>{item.name}</Link>;
          </div>;
        })}
      </div>
    </>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  const [hyrule, setHyrule] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHyrule();
      setHyrule(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    <h2>loading</h2>;
  }

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
          <Categories hyrule={hyrule} />
        </Route>
      </div>
    </Router>
  );
}
