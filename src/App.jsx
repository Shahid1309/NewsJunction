import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<News key="General"  country="in" category="General" />} />
            <Route path='/business' element={<News key="Business"  country="in" category="Business" />} />
            <Route path='/entertainment' element={<News key="Entertainment"  country="in" category="Entertainment" />} />
            <Route path='/general' element={<News key="General"  country="in" category="General" />} />
            <Route path='/health' element={<News key="Health"  country="in" category="Health" />} />
            <Route path='/science' element={<News key="Science"  country="in" category="Science" />} />
            <Route path='/sport' element={<News key="Sport"  country="in" category="Sport" />} />
            <Route path='/technology' element={<News key="Technology"  country="in" category="Technology" />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
