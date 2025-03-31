
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import Index from "./pages/Index";
import Aula2 from "./pages/Aula2";
import Aula3 from "./pages/Aula3";
import Aula4 from "./pages/Aula4";
import Aula5 from "./pages/Aula5";
import Aula6 from "./pages/Aula6";
import Aula7 from "./pages/Aula7";
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
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar currentLesson={1} />
                    <div className="flex-1 p-4">
                      <Index />
                    </div>
                  </div>
                </SidebarProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/aula2"
            element={
              <PrivateRoute>
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar currentLesson={2} />
                    <div className="flex-1 p-4">
                      <Aula2 />
                    </div>
                  </div>
                </SidebarProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/aula3"
            element={
              <PrivateRoute>
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar currentLesson={3} />
                    <div className="flex-1 p-4">
                      <Aula3 />
                    </div>
                  </div>
                </SidebarProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/aula4"
            element={
              <PrivateRoute>
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar currentLesson={4} />
                    <div className="flex-1 p-4">
                      <Aula4 />
                    </div>
                  </div>
                </SidebarProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/aula5"
            element={
              <PrivateRoute>
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar currentLesson={5} />
                    <div className="flex-1 p-4">
                      <Aula5 />
                    </div>
                  </div>
                </SidebarProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/aula6"
            element={
              <PrivateRoute>
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar currentLesson={6} />
                    <div className="flex-1 p-4">
                      <Aula6 />
                    </div>
                  </div>
                </SidebarProvider>
              </PrivateRoute>
            }
          />
          <Route
            path="/aula7"
            element={
              <PrivateRoute>
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar currentLesson={7} />
                    <div className="flex-1 p-4">
                      <Aula7 />
                    </div>
                  </div>
                </SidebarProvider>
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
