
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRecovery, setIsRecovery] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
            },
          },
        });
        if (error) throw error;
        toast({
          title: "Cadastro realizado!",
          description: "Verifique seu email para confirmar o cadastro.",
        });
        setIsLogin(true);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth`,
      });
      
      if (error) throw error;
      
      toast({
        title: "Email enviado!",
        description: "Verifique seu email para recuperar sua senha.",
      });
      setIsRecovery(false);
      setIsLogin(true);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // Password Recovery Form
  if (isRecovery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Recuperar senha
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Digite seu email para receber um link de recuperação de senha
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePasswordRecovery}>
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-400" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar link de recuperação"}
            </Button>
          </form>
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsRecovery(false);
                setIsLogin(true);
              }}
              className="flex items-center justify-center text-sm text-blue-600 hover:text-blue-800 mx-auto"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar para o login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Login/Register Form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? "Login" : "Cadastro"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin
              ? "Entre com sua conta para acessar os slides"
              : "Crie sua conta para acessar os slides"}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
          {!isLogin && (
            <div className="flex items-center space-x-2">
              <User className="text-gray-400" />
              <Input
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
              />
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Mail className="text-gray-400" />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="text-gray-400" />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading
              ? "Carregando..."
              : isLogin
              ? "Entrar"
              : "Criar conta"}
          </Button>
        </form>
        <div className="text-center space-y-2">
          {isLogin && (
            <button
              type="button"
              onClick={() => setIsRecovery(true)}
              className="text-sm text-blue-600 hover:text-blue-800 block w-full"
            >
              Esqueceu sua senha?
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {isLogin
              ? "Não tem uma conta? Cadastre-se"
              : "Já tem uma conta? Entre"}
          </button>
        </div>
      </div>
    </div>
  );
}
