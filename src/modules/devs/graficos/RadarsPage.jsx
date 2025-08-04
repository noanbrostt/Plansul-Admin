import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Tooltip } from "@/components/CustomRecharts";

export default function RadarsPage() {
  // Dados para exemplo de habilidades técnicas
  const skillsData = [
    { subject: "React", A: 95, B: 85 },
    { subject: "TypeScript", A: 90, B: 80 },
    { subject: "Tailwind", A: 85, B: 90 },
    { subject: "Node.js", A: 80, B: 75 },
    { subject: "UI/UX", A: 75, B: 85 },
    { subject: "Testes", A: 85, B: 70 },
  ];

  // Dados para exemplo de desempenho de produto
  const productData = [
    { feature: "Velocidade", score: 90 },
    { feature: "Segurança", score: 95 },
    { feature: "Confiabilidade", score: 85 },
    { feature: "UX", score: 80 },
    { feature: "Documentação", score: 75 },
    { feature: "Suporte", score: 90 },
  ];

  // Dados para comparação de equipes
  const teamComparisonData = [
    { skill: "Frontend", EquipeA: 85, EquipeB: 75, EquipeC: 90 },
    { skill: "Backend", EquipeA: 80, EquipeB: 85, EquipeC: 70 },
    { skill: "DevOps", EquipeA: 70, EquipeB: 90, EquipeC: 80 },
    { skill: "QA", EquipeA: 75, EquipeB: 80, EquipeC: 85 },
    { skill: "UI/UX", EquipeA: 90, EquipeB: 75, EquipeC: 85 },
    { skill: "Gestão", EquipeA: 85, EquipeB: 85, EquipeC: 80 },
  ];

  const [hoverKey, setHoverKey] = useState(null);

  return (
    <div className="bg-base-100 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold h-10">
          Gráficos de Radar{" "}
          <FavoriteButton
            tela={{
              nome: "Gráficos de Radar",
              url: "devs/graficos/radar",
            }}
          />
        </h1>
        <div className="breadcrumbs text-sm text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Gráficos</li>
            <li className="text-primary font-medium">De Radar</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Básico */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Gráfico Básico
          </h2>
          <div className="w-full h-80 select-none">
            <ResponsiveContainer>
              <RadarChart outerRadius={120} data={productData}>
                <PolarGrid
                  stroke="var(--color-base-content)"
                  strokeOpacity={0.2}
                />
                <PolarAngleAxis
                  dataKey="feature"
                  tick={{ fill: "var(--color-base-content)" }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Produto X"
                  dataKey="score"
                  stroke="var(--color-primary)"
                  fill="var(--color-primary)"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="font-medium text-base-content/80 mt-4">Código:</p>
          <div>
            <CodeBlock
              code={`import { 
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import { Tooltip } from "@/components/CustomRecharts";

const productData = [
  { feature: "Velocidade", score: 90 },
  { feature: "Segurança", score: 95 },
  { feature: "Confiabilidade", score: 85 },
  { feature: "UX", score: 80 },
  { feature: "Documentação", score: 75 },
  { feature: "Suporte", score: 90 },
];

<div className="w-full h-80 select-none">
  <ResponsiveContainer>
    <RadarChart outerRadius={120} data={productData}>
      <PolarGrid
        stroke="var(--color-base-content)"
        strokeOpacity={0.2}
      />
      <PolarAngleAxis dataKey="feature" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="Produto X"
        dataKey="score"
        stroke="var(--color-primary)"
        fill="var(--color-primary)"
        fillOpacity={0.6}
      />
      <Tooltip />
    </RadarChart>
  </ResponsiveContainer>
</div>`}
            />
          </div>
        </div>

        {/* Múltiplas Séries */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Comparação de Habilidades
          </h2>
          <div className="w-full h-80 select-none">
            <ResponsiveContainer>
              <RadarChart outerRadius={120} data={skillsData}>
                <PolarGrid
                  stroke="var(--color-base-content)"
                  strokeOpacity={0.2}
                />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "var(--color-base-content)" }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Dev Sênior"
                  dataKey="A"
                  stroke="var(--color-primary)"
                  fill="var(--color-primary)"
                  fillOpacity={hoverKey === "B" ? 0.2 : 0.6}
                />
                <Radar
                  name="Dev Pleno"
                  dataKey="B"
                  stroke="var(--color-accent)"
                  fill="var(--color-accent)"
                  fillOpacity={hoverKey === "A" ? 0.2 : 0.6}
                />
                <Tooltip />
                <Legend
                  onMouseEnter={({ value }) =>
                    setHoverKey(value === "Dev Sênior" ? "A" : "B")
                  }
                  onMouseLeave={() => setHoverKey(null)}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="font-medium text-base-content/80 mt-4">Código:</p>
          <div>
            <CodeBlock
              code={`import { useState } from "react";
import { RadarChart,
PolarGrid,
PolarAngleAxis,
PolarRadiusAxis,
Radar,
Legend
} from "recharts";
import { Tooltip } from "@/components/CustomRecharts";

const [hoverKey, setHoverKey] = useState(null);

<div className="w-full h-80 select-none">
  <ResponsiveContainer>
    <RadarChart outerRadius={120} data={skillsData}>
      <PolarGrid
        stroke="var(--color-base-content)"
        strokeOpacity={0.2} 
      />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="Dev Sênior"
        dataKey="A"
        stroke="var(--color-primary)"
        fill="var(--color-primary)"
        fillOpacity={hoverKey === "B" ? 0.2 : 0.6}
      />
      <Radar
        name="Dev Pleno"
        dataKey="B"
        stroke="var(--color-accent)"
        fill="var(--color-accent)"
        fillOpacity={hoverKey === "A" ? 0.2 : 0.6}
      />
      <Tooltip />
      <Legend 
        onMouseEnter={( { value }) =>
          setHoverKey(value === "Dev Sênior" ? "A" : "B"
        )}
        onMouseLeave={() => setHoverKey(null)}
      />
    </RadarChart>
  </ResponsiveContainer>
</div>`}
            />
          </div>
        </div>
      </div>

      {/* Comparação de Equipes */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Comparação de Equipes
        </h2>
        <div className="w-full h-96 select-none">
          <ResponsiveContainer>
            <RadarChart outerRadius={140} data={teamComparisonData}>
              <PolarGrid
                stroke="var(--color-base-content)"
                strokeOpacity={0.2}
              />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: "var(--color-base-content)" }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Equipe A"
                dataKey="EquipeA"
                stroke="var(--color-primary)"
                fill="var(--color-primary)"
                fillOpacity={0.5}
              />
              <Radar
                name="Equipe B"
                dataKey="EquipeB"
                stroke="var(--color-accent)"
                fill="var(--color-accent)"
                fillOpacity={0.5}
              />
              <Radar
                name="Equipe C"
                dataKey="EquipeC"
                stroke="var(--color-secondary)"
                fill="var(--color-secondary)"
                fillOpacity={0.5}
              />
              <Tooltip />
              <Legend
                onMouseEnter={({ value }) => setHoverKey(value)}
                onMouseLeave={() => setHoverKey(null)}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div>
          <CodeBlock
            code={`import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import { Tooltip } from "@/components/CustomRecharts";

const teamComparisonData = [
  { skill: "Frontend", EquipeA: 85, EquipeB: 75, EquipeC: 90 },
  // ... outros dados
];

<div className="w-full h-96 select-none">
  <ResponsiveContainer>
    <RadarChart outerRadius={140} data={teamComparisonData}>
      <PolarGrid stroke="var(--color-base-content)" strokeOpacity={0.2} />
      <PolarAngleAxis dataKey="skill" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="Equipe A"
        dataKey="EquipeA"
        stroke="var(--color-primary)"
        fill="var(--color-primary)"
        fillOpacity={0.5}
      />
      <Radar
        name="Equipe B"
        dataKey="EquipeB"
        stroke="var(--color-accent)"
        fill="var(--color-accent)"
        fillOpacity={0.5}
      />
      <Radar
        name="Equipe C"
        dataKey="EquipeC"
        stroke="var(--color-secondary)"
        fill="var(--color-secondary)"
        fillOpacity={0.5}
      />
      <Tooltip />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
