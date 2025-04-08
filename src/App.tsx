
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Index from "./pages/Index";
import Aula2 from "./pages/Aula2";
import Aula3 from "./pages/Aula3";
import Aula4 from "./pages/Aula4";
import Aula5 from "./pages/Aula5";
import Aula6 from "./pages/Aula6";
import Aula7 from "./pages/Aula7";
import Aula8 from "./pages/Aula8";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />
          <Route
            path="/aula2"
            element={
              <PrivateRoute>
                <Aula2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/aula3"
            element={
              <PrivateRoute>
                <Aula3 />
              </PrivateRoute>
            }
          />
          <Route
            path="/aula4"
            element={
              <PrivateRoute>
                <Aula4 />
              </PrivateRoute>
            }
          />
          <Route
            path="/aula5"
            element={
              <PrivateRoute>
                <Aula5 />
              </PrivateRoute>
            }
          />
          <Route
            path="/aula6"
            element={
              <PrivateRoute>
                <Aula6 />
              </PrivateRoute>
            }
          />
          <Route
            path="/aula7"
            element={
              <PrivateRoute>
                <Aula7 />
              </PrivateRoute>
            }
          />
          <Route
            path="/aula8"
            element={
              <PrivateRoute>
                <Aula8 />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
