import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import MobileAuth from './components/MobileAuth';
import ReadWord from './components/ReadWord';
import WriteWord from './components/WriteWord';
import Points from './components/Points';
import Leaderboard from './components/Leaderboard';
import Achievements from './components/Achievements';
import Animation from './components/Animation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/mobile-auth" element={<MobileAuth />} />
        <Route path="/read" element={<ReadWord />} />
        <Route path="/write" element={<WriteWord />} />
        <Route path="/points" element={<Points />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
    </Router>
  );
};

export default App;
