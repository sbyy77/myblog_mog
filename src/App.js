import "./App.css";
import ContextProvider from "./components/common/context/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MogPost from "./pages/mogPost";
import MogUserInfo from "./pages/mogUserInfo";
import MogLogin from "./pages/mogLogin";
import MogMain from "./pages/mogMain";
import MogPublish from "./pages/mogPublish";

function App() {
    return (
        <>
            <ContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MogLogin />} />
                        <Route path="/mogmain" element={<MogMain />} />
                        <Route path="/mogpost" element={<MogPost />} />
                        <Route path="/mogpublish" element={<MogPublish />} />
                        <Route path="/moguserinfo" element={<MogUserInfo />} />
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
        </>
    );
}

export default App;
