import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useState } from "react";
import { Language } from "@shared/content";

function Router({ language, onLanguageChange }: { language: Language; onLanguageChange: (lang: Language) => void }) {
  return (
    <Switch>
      <Route path={"/"}>
        <Home language={language} onLanguageChange={onLanguageChange} />
      </Route>
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>("pt");

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("toca-language", lang);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router language={language} onLanguageChange={handleLanguageChange} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
