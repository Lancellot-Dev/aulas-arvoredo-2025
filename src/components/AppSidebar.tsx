import { Download, LogOut, MonitorPlay, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppSidebarProps {
  currentLesson: number;
}

const lessons = [
  { number: 1, title: "Introdução ao Instituto Arvoredo", downloadUrl: "/slides-aula1.pdf", path: "/" },
  { number: 2, title: "História dos Computadores", downloadUrl: "/slides-aula2.pdf", path: "/aula2" },
  { number: 3, title: "Componentes Básicos do Computador", downloadUrl: "/slides-aula3.pdf", path: "/aula3" },
  { number: 4, title: "Dimensionamento de Peças", downloadUrl: "/slides-aula4.pdf", path: "/aula4" },
  { number: 5, title: "Software e Sistemas Operacionais", downloadUrl: "/slides-aula5.pdf", path: "/aula5" },
  { number: 6, title: "Redes de Computadores", downloadUrl: "/slides-aula6.pdf", path: "/aula6" },
  { number: 7, title: "Microsoft Word", downloadUrl: "/slides-aula7.pdf", path: "/aula7" },
];

export function AppSidebar({ currentLesson }: AppSidebarProps) {
  const currentLessonData = lessons.find(lesson => lesson.number === currentLesson);
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [userInitials, setUserInitials] = useState<string>("");

  useEffect(() => {
    async function getUserData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const userMetadata = user.user_metadata;
        const name = userMetadata?.name || user.email?.split('@')[0] || 'Usuário';
        setUserName(name);
        
        // Create initials from name (first letter of first and last name)
        const nameParts = name.split(' ');
        if (nameParts.length > 1) {
          setUserInitials(`${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`);
        } else {
          setUserInitials(name.substring(0, 2).toUpperCase());
        }
      }
    }
    
    getUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logout realizado com sucesso!");
      navigate("/auth");
    } catch (error) {
      toast.error("Erro ao fazer logout");
      console.error("Logout error:", error);
    }
  };

  return (
    <Sidebar className="bg-[#1e1b4b] text-white">
      <SidebarContent>
        <div className="p-4 flex flex-col items-center border-b border-white/10">
          <div className="flex items-center gap-3 mb-3 w-full">
            <Avatar className="h-10 w-10 bg-indigo-700 border-2 border-indigo-500">
              <AvatarFallback className="bg-indigo-800 text-white">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{userName}</span>
              <span className="text-xs text-white/60">Aluno</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold">Curso de Informática</h2>
          <p className="text-sm text-white/70">Instituto Arvoredo</p>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/70">Aulas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {lessons.map((lesson) => (
                <SidebarMenuItem key={lesson.number}>
                  <SidebarMenuButton
                    asChild
                    className={`text-white hover:bg-white/10 ${currentLesson === lesson.number ? 'bg-white/20' : ''}`}
                    tooltip={lesson.title}
                  >
                    <Link to={lesson.path}>
                      <MonitorPlay className="w-4 h-4" />
                      <span>Aula {lesson.number}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="absolute bottom-20 left-0 right-0 px-4">
          <a
            href={currentLessonData?.downloadUrl}
            download
            className="flex items-center gap-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Material da Aula {currentLesson}</span>
          </a>
        </div>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-md transition-colors text-white"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair</span>
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
