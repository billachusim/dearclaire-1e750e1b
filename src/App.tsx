import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Diary from "./pages/Diary";
import HowItWorks from "./pages/HowItWorks";
import AlterEgoInfo from "./pages/AlterEgoInfo";
import Clairentation from "./pages/Clairentation";
import AlterEgoLogin from "./pages/AlterEgoLogin";
import AlterEgoDashboard from "./pages/AlterEgoDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/alter-ego-info" element={<AlterEgoInfo />} />
          <Route path="/clairentation" element={<Clairentation />} />
          <Route path="/alter-ego-login" element={<AlterEgoLogin />} />
          <Route path="/alter-ego-dashboard" element={<AlterEgoDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
