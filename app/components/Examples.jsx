var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Colombo'>Colombo, Sri Lanka</Link>
        </li>
        <li>
          <Link to='/?location=Kandy'>Kandy, Sri Lanka</Link>
        </li>
        <li>
          <Link to='/?location=Galle'>Galle, Sri Lanka</Link>
        </li>
        <li>
          <Link to='/?location=Gampaha'>Gampaha, Sri Lanka</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
