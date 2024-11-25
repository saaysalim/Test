import { BrowserRouter as Router, Route, Link, Switch }
    from "react-router-dom";
 
// Import the pages
 
import HomePage from "./Pages/Home";
 
// Import css
import "./app.css"
 
function Route() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" element={<h1>HomePage</h1>} />
                    <Route exact path="HomePage" element={<HomePage />} />
                    <Route exact path="page2" element={<Page2 />} />
                    <Route exact path="page3" element={<Page3 />} />
                </Switch>
                <div className="list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="page1">HomePage</Link></li>
                        <li><Link to="page2">Page 2</Link></li>
                        <li><Link to="page3">Page 3</Link></li>
                    </ul>
                </div>
            </Router>
        </div>
    );
}
export default Route;