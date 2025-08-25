import { Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './components/pages/StartPage.jsx';
import UserInfoPage from './components/pages/UserInfoPage.jsx';
import AddressPage from './components/pages/AddressPage.jsx';
import FamilyInfoPage from './components/pages/FamilyInfoPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import MyPage from './components/pages/MyPage.jsx';
import WelfarePage from './components/pages/WelfarePage.jsx';
import ChatbotPage from "./components/pages/ChatbotPage.jsx";
import PolicyDetailPage from "./components/pages/PolicyDetailPage.jsx";
import './styles/components.css';

function App() {
    return (
        <div className="app-container">
            {/* 기존 라우팅 */}
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/info" element={<UserInfoPage />} />
                <Route path="/address" element={<AddressPage />} />
                <Route path="/family" element={<FamilyInfoPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/my" element={<MyPage />} />
                <Route path="/welfare" element={<WelfarePage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/policy/:id" element={<PolicyDetailPage />} />  {/* :id 가능 */}
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    );
}

export default App;
