import { Fragment } from "react";
function ListGroup() {
  return (
    <Fragment>
      <div>
        <h1>Class</h1>
        <ul className="list-group">
          <li className="list-group-item">Class7</li>
          <li className="list-group-item">Class8</li>
          <li className="list-group-item">Class9</li>
          <li className="list-group-item">Class10</li>
          <li className="list-group-item">Class11</li>
          <li className="list-group-item">Class12</li>
        </ul>
      </div>
    </Fragment>
  );
}
export default ListGroup;
// i need to wrap the items. by div or fragment
// can import fragment or just use <> and do not need for fragment
