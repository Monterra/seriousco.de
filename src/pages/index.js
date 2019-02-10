import React, {useState} from "react"
import {Link} from "gatsby"

const IndexPage = () => {
  const [name, setName] = useState('John');

  function onChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        Image
      </div>
      <h1>Hey {name}!</h1>
      <input type="text" value={name} onChange={onChange}/>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  );
};

export default IndexPage;