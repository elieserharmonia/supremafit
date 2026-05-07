"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight, Dumbbell, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import { useAuth } from "./AuthProvider";
import { AppLogo } from "./AppLogo";

export function LoginForm() {
  const router = useRouter();
  const { login, loginAsDemo } = useAuth();
  const [email, setEmail] = useState("aluno@supremafit.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const result = await login({ email, password });
    if (!result.ok) {
      setError(result.message ?? "Não foi possível entrar.");
      return;
    }
    router.push("/");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand"><AppLogo /></div>
        <div className="auth-title-block">
          <span className="eyebrow">Acesso do aluno</span>
          <h1>Entre para evoluir hoje.</h1>
          <p>Teste o app com login local. Depois conectaremos Supabase para cadastro real, treinos premium e pagamentos.</p>
        </div>

        <div className="auth-demo-box">
          <ShieldCheck size={18} color="var(--orange)" />
          <div>
            <strong>Login de teste liberado</strong>
            <small>Aluno: aluno@supremafit.com / senha: 123456</small>
          </div>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            <span>E-mail</span>
            <div className="auth-input"><Mail size={18} /><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="seuemail@exemplo.com" /></div>
          </label>
          <label>
            <span>Senha</span>
            <div className="auth-input"><LockKeyhole size={18} /><input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Sua senha" /></div>
          </label>
          {error && <div className="auth-error">{error}</div>}
          <button className="primary-btn full" type="submit">Entrar no app <ArrowRight size={18} /></button>
        </form>

        <div className="auth-actions-grid">
          <button type="button" onClick={() => loginAsDemo("aluno")} className="method active"><UserRound size={17} /> Entrar como aluno</button>
          <button type="button" onClick={() => loginAsDemo("personal")} className="method"><Dumbbell size={17} /> Entrar como personal</button>
        </div>

        <p className="auth-footer-text">Ainda não tem conta? <Link href="/cadastro">Criar cadastro de teste</Link></p>
      </section>
    </main>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", objective: "Hipertrofia", frequency: "3x por semana" });
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const result = await register(form);
    if (!result.ok) {
      setError(result.message ?? "Não foi possível criar cadastro.");
      return;
    }
    router.push("/onboarding");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand"><AppLogo /></div>
        <div className="auth-title-block">
          <span className="eyebrow">Novo aluno</span>
          <h1>Crie seu acesso.</h1>
          <p>Este cadastro é local para o teste de hoje. Depois será substituído por autenticação real com banco de dados.</p>
        </div>
        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            <span>Nome</span>
            <div className="auth-input"><UserRound size={18} /><input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Nome do aluno" /></div>
          </label>
          <label>
            <span>E-mail</span>
            <div className="auth-input"><Mail size={18} /><input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} type="email" placeholder="email@exemplo.com" /></div>
          </label>
          <label>
            <span>Senha</span>
            <div className="auth-input"><LockKeyhole size={18} /><input value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} type="password" placeholder="Mínimo 6 caracteres" /></div>
          </label>
          <label>
            <span>Objetivo principal</span>
            <select className="field" value={form.objective} onChange={(event) => setForm({ ...form, objective: event.target.value })}>
              <option>Hipertrofia</option>
              <option>Emagrecimento urgente</option>
              <option>Saúde e qualidade de vida</option>
              <option>Condicionamento</option>
              <option>Força</option>
            </select>
          </label>
          <label>
            <span>Frequência semanal</span>
            <select className="field" value={form.frequency} onChange={(event) => setForm({ ...form, frequency: event.target.value })}>
              <option>2x por semana</option>
              <option>3x por semana</option>
              <option>4x por semana</option>
              <option>5x por semana</option>
              <option>6x por semana</option>
            </select>
          </label>
          {error && <div className="auth-error">{error}</div>}
          <button className="primary-btn full" type="submit">Criar conta <ArrowRight size={18} /></button>
        </form>
        <p className="auth-footer-text">Já tem conta? <Link href="/login">Entrar</Link></p>
      </section>
    </main>
  );
}
