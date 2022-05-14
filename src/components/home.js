import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div><center>
    <h1>Welcome to our home page!</h1>
    	<Link to='/login'>Login</Link>
    	<br/>
      <Link to='/Register'>Register</Link>
      </center>
      </div>
  );
}

export default Home;