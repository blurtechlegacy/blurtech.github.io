import React from 'react'
import {Link} from "@reach/router";

export default () => (
  <div className="index">
    <h1>
        blurred <br/>
      technologies
    </h1>
      <nav>
          <Link to="/projects">/projects</Link>
          <Link to="/team">/team</Link>
          <Link to="/blog">/blog</Link>
          <Link to="/about">/about</Link>
      </nav>
  </div>
)
