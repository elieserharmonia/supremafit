"use client";

import { useState } from "react";
import Link from "next/link";
import { generateInitialTrainingPlan, StudentProfile } from "../lib/workouts";

const emptyProfile: StudentProfile = {
  name: "",
  age: "",
  height: "",
  weight: "",
  objective: "Hipertrofia",
  frequency: "3x por semana",
  level: "Iniciante",
  restriction: "Não",
  restrictionDetails: "",
  preference: "Musculação",
  time: "Manhã",
  duration: "60 min"
};

export function OnboardingForm() {
  const [profile, setProfile] = useState<StudentProfile>(emptyProfile);
  const [plan, setPlan] = useState<string[]>([]);

  function update<K extends keyof StudentProfile>(key: K, value: StudentProfile[K]) {
    setProfile((current) => ({ ...current, [key]: value }));
  }

  function submit() {
    const suggested = generateInitialTrainingPlan(profile);
    setPlan(suggested);
    localStorage.setItem("supremaStudentProfile", JSON.stringify(profile));
  }

  return (
    <div className="onboarding-card card">
      <span className="eyebrow">Primeiro acesso</span>
      <h1 className="page-title">Vamos montar seu plano inicial</h1>
      <p className="muted">Responda o questionário para o app entender seu objetivo, frequência, nível e preferência de treino.</p>
      <div className="form-grid" style={{ marginTop: 18 }}>
        <label className="field-label">Nome<input className="field" value={profile.name} onChange={(e) => update("name", e.target.value)} placeholder="João Pedro" /></label>
        <label className="field-label">Idade<input className="field" value={profile.age} onChange={(e) => update("age", e.target.value)} placeholder="28" /></label>
        <label className="field-label">Altura<input className="field" value={profile.height} onChange={(e) => update("height", e.target.value)} placeholder="1,78 m" /></label>
        <label className="field-label">Peso<input className="field" value={profile.weight} onChange={(e) => update("weight", e.target.value)} placeholder="82 kg" /></label>
        <label className="field-label">Objetivo principal
          <select className="select-field" value={profile.objective} onChange={(e) => update("objective", e.target.value)}>
            {['Hipertrofia','Emagrecimento','Condicionamento','Saúde','Força','Qualidade de vida'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="field-label">Frequência semanal
          <select className="select-field" value={profile.frequency} onChange={(e) => update("frequency", e.target.value)}>
            {['2x por semana','3x por semana','4x por semana','5x por semana','6x por semana'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="field-label">Nível
          <select className="select-field" value={profile.level} onChange={(e) => update("level", e.target.value)}>
            {['Iniciante','Intermediário','Avançado'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="field-label">Possui dor, lesão ou restrição?
          <select className="select-field" value={profile.restriction} onChange={(e) => update("restriction", e.target.value)}>
            {['Não','Sim'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="field-label form-full">Se sim, qual?<textarea className="field" value={profile.restrictionDetails} onChange={(e) => update("restrictionDetails", e.target.value)} placeholder="Ex: dor lombar, joelho, ombro..." /></label>
        <label className="field-label">Preferência de treino
          <select className="select-field" value={profile.preference} onChange={(e) => update("preference", e.target.value)}>
            {['Musculação','Cardio','Funcional','Misto'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="field-label">Horário preferido<input className="field" value={profile.time} onChange={(e) => update("time", e.target.value)} placeholder="Manhã, tarde ou noite" /></label>
        <label className="field-label form-full">Tempo disponível por treino
          <select className="select-field" value={profile.duration} onChange={(e) => update("duration", e.target.value)}>
            {['30 min','45 min','60 min','90 min'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
        <button className="primary-btn" onClick={submit}>Gerar plano inicial</button>
        <Link className="secondary-btn" href="/treinos">Ir para treinos</Link>
      </div>
      {plan.length > 0 && (
        <div className="suggested-plan">
          <h3>Plano sugerido para {profile.objective}</h3>
          {profile.restriction === "Sim" && <p className="orange">Atenção: valide os exercícios com um profissional por causa da restrição informada.</p>}
          <ul>
            {plan.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
