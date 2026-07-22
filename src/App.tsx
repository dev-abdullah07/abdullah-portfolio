import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AuroraBackground } from "./components/ui/AuroraBackground";
import { MouseGlow } from "./components/ui/MouseGlow";
import { ScrollProgressBar } from "./components/ui/ScrollProgressBar";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { AiAssistant } from "./components/chatbot/AiAssistant";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <HashRouter>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <AuroraBackground />
      <MouseGlow />
      <ScrollProgressBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <AiAssistant />
    </HashRouter>
  );
}

export default App;
