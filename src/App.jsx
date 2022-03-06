import './App.scss';
import Stories from "./components/Stories";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";

const App = () => {
    const menuItems = [
        {label: "Top Stories", route: '/', component: <Stories type="top"/>, },
        {label: "New Stories", route: '/newstories', component: <Stories type="new"/>, },
        {label: "Best Stories", route: '/beststories', component: <Stories type="best"/>, },
        {label: "Jobs", route: '/jobstories', component: <Stories type="job"/>, },
    ];
    return (
        <div>
            <Router>
                <NavigationBar menuItems={menuItems}/>
                <Routes>
                    {
                        menuItems.map((item) => (
                            <Route exact path={item.route} key={item.label} element={item.component}>
                            </Route>
                        ))
                    }
                    <Route path="*" key="Not Found" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
