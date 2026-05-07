"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type SupremaUserRole = "aluno" | "personal" | "admin";

export type SupremaUser = {
  id: string;
  name: string;
  email: string;
  role: SupremaUserRole;
  initials: string;
  objective: string;
  frequency: string;
  plan: "free" | "premium";
  avatar?: string;
};

type LoginInput = { email: string; password: string };
type RegisterInput = { name: string; email: string; password: string; objective: string; frequency: string };

type AuthContextValue = {
  user: SupremaUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (input: LoginInput) => Promise<{ ok: boolean; message?: string }>;
  loginAsDemo: (role?: SupremaUserRole) => void;
  register: (input: RegisterInput) => Promise<{ ok: boolean; message?: string }>;
  logout: () => void;
};

const STORAGE_KEY = "suprema_fit_auth_v1";

const demoUsers: Array<SupremaUser & { password: string }> = [
  { id: "student-demo", name: "João Pedro", email: "aluno@supremafit.com", password: "123456", role: "aluno", initials: "JP", objective: "Hipertrofia", frequency: "5x por semana", plan: "free" },
  { id: "coach-demo", name: "Coach Suprema", email: "personal@supremafit.com", password: "123456", role: "personal", initials: "CS", objective: "Gestão de alunos", frequency: "Diário", plan: "premium" }
];

const publicRoutes = ["/login", "/cadastro"];
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function initialsFromName(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "SF";
}

function saveUser(user: SupremaUser) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function readSavedUser(): SupremaUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SupremaUser;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SupremaUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setUser(readSavedUser());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const isPublic = publicRoutes.some((route) => pathname?.startsWith(route));
    if (!user && !isPublic) router.replace("/login");
    if (user && isPublic) router.replace("/");
  }, [isLoading, pathname, router, user]);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isAuthenticated: Boolean(user),
    isLoading,
    async login(input) {
      const found = demoUsers.find((demo) => demo.email.toLowerCase() === input.email.trim().toLowerCase() && demo.password === input.password);
      if (!found) return { ok: false, message: "E-mail ou senha inválidos. Para teste, use aluno@supremafit.com e senha 123456." };
      const { password: _password, ...cleanUser } = found;
      saveUser(cleanUser);
      setUser(cleanUser);
      return { ok: true };
    },
    loginAsDemo(role = "aluno") {
      const found = demoUsers.find((demo) => demo.role === role) ?? demoUsers[0];
      const { password: _password, ...cleanUser } = found;
      saveUser(cleanUser);
      setUser(cleanUser);
      router.push("/");
    },
    async register(input) {
      if (!input.name.trim()) return { ok: false, message: "Informe o nome do aluno." };
      if (!input.email.includes("@")) return { ok: false, message: "Informe um e-mail válido." };
      if (input.password.length < 6) return { ok: false, message: "A senha precisa ter no mínimo 6 caracteres." };
      const newUser: SupremaUser = {
        id: `student-${Date.now()}`,
        name: input.name.trim(),
        email: input.email.trim().toLowerCase(),
        role: "aluno",
        initials: initialsFromName(input.name),
        objective: input.objective,
        frequency: input.frequency,
        plan: "free"
      };
      saveUser(newUser);
      setUser(newUser);
      return { ok: true };
    },
    logout() {
      localStorage.removeItem(STORAGE_KEY);
      setUser(null);
      router.push("/login");
    }
  }), [isLoading, router, user]);

  const isPublic = publicRoutes.some((route) => pathname?.startsWith(route));
  const shouldBlock = isLoading || (!user && !isPublic);

  return (
    <AuthContext.Provider value={value}>
      {shouldBlock ? (
        <main className="auth-loading">
          <div className="auth-loading-card">
            <img src="/suprema-logo.png" alt="SUPREMA FIT" />
            <strong>SUPREMA FIT</strong>
            <span>Carregando app...</span>
          </div>
        </main>
      ) : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
