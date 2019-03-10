import {Helmet} from "react-helmet";

module.exports = () => (
  <div>
    <Helmet>
        <meta charset="UTF-8" />
        <title>Page Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1>Hello World</h1>
  </div>
)
