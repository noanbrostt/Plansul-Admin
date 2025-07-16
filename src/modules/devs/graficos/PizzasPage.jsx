import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Sector,
} from "recharts";

const data01 = [
  { name: "Grupo A", value: 400 },
  { name: "Grupo B", value: 300 },
  { name: "Grupo C", value: 300 },
  { name: "Grupo D", value: 200 },
];

const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

// Paleta de cores usando variáveis CSS
const COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-neutral)",
  "var(--color-info)",
  "var(--color-success)",
  "var(--color-warning)",
  "var(--color-error)",
];

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="var(--color-base-content)"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="var(--color-base-content)"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="var(--color-base-content)"
      >
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
console.log("const renderActiveShape = " + renderActiveShape);

export default function PizzasPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex text-3xl font-bold h-10">
          Gráficos de Pizza{" "}
          <FavoriteButton
            tela={{ nome: "Gráficos de Pizza", url: "devs/graficos/pizza" }}
          />
        </h1>
        <div className="breadcrumbs text-sm text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Gráficos</li>
            <li>De Pizza</li>
          </ul>
        </div>
      </div>

      {/* Básica */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">Pizza Básica + Label Personalizado</h2>
        <div className="w-full h-64 select-none">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                labelLine={false}
                label={({
                  percent,
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius =
                    innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="central"
                      style={{ fontSize: 12 }}
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="var(--color-base-200)"
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Grupo A", value: 400 },
  { name: "Grupo B", value: 300 },
  { name: "Grupo C", value: 300 },
  { name: "Grupo D", value: 200 },
];

const COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-neutral)",
];

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <PieChart>
      <Pie
        data={data01}
        cx="50%"
        cy="50%"
        outerRadius={80}
        dataKey="value"
        labelLine={false}
        label={({
          name,
          percent,
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
        }) => {
          const RADIAN = Math.PI / 180;
          const radius =
            innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="white"
              textAnchor="middle"
              dominantBaseline="central"
              style={{ fontSize: 12 }}
            >
              {\`\${(percent * 100).toFixed(0)}%\`}
            </text>
          );
        }}
      >
        {data01.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[index % COLORS.length]}
            stroke="var(--color-base-200)"
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>`}
            </pre>
          </div>
        </div>
      </div>

      {/* Donut Chart com interatividade avançada */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">Donut Interativo Avançado</h2>
        <div className="w-full h-78 select-none bg-base-200 rounded-lg p-4">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                activeShape={renderActiveShape}
                data={data01}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                wrapperStyle={{
                  marginBottom: "40px",
                }}
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="var(--color-base-200)"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Sector } from "recharts";

const data01 = [
  { name: "Grupo A", value: 400 },
  { name: "Grupo B", value: 300 },
  { name: "Grupo C", value: 300 },
  { name: "Grupo D", value: 200 },
];

const COLORS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-neutral)",
];

const renderActiveShape =... // Ta lá no console.log

<div className="w-full h-78 select-none bg-base-200 rounded-lg p-4">
  <ResponsiveContainer>
    <PieChart>
      <Pie
        activeShape={renderActiveShape}
        data={data01}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        wrapperStyle={{
          marginBottom: "40px",
        }}
      >
        {data01.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[index % COLORS.length]}
            stroke="var(--color-base-200)"
            strokeWidth={2}
          />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>`}
            </pre>
          </div>
        </div>
      </div>

      {/* Pizza Dupla */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold">Pizza Dupla</h2>
        <div className="w-full h-64 select-none">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="var(--color-base-200)"
                  />
                ))}
              </Pie>
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data02.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[(index + 4) % COLORS.length]}
                    opacity={activeIndex === index ? 1 : 0.7}
                    stroke="var(--color-base-200)"
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="font-medium text-base-content/80 mt-4">Código:</p>
        <div className="justify-items-center">
          <div className="p-4 bg-base-300 rounded-lg overflow-auto">
            <pre className="text-sm">
              {`import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const [activeIndex, setActiveIndex] = useState(null);

const onPieEnter = (_, index) => {
  setActiveIndex(index);
};

const onPieLeave = () => {
  setActiveIndex(null);
};

<div className="w-full h-64 select-none">
  <ResponsiveContainer>
    <PieChart>
      <Pie
        data={data01}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={60}
      >
        {data01.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[index % COLORS.length]}
            stroke="var(--color-base-200)"
          />
        ))}
      </Pie>
      <Pie
        data={data02}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={90}
        label={({ name, percent }) => \`\${name}: \${(percent * 100).toFixed(0)}%\`}
        onMouseEnter={onPieEnter}
        onMouseLeave={onPieLeave}
      >
        {data02.map((entry, index) => (
          <Cell
            key={\`cell-\${index}\`}
            fill={COLORS[(index + 4) % COLORS.length]}
            opacity={activeIndex === index ? 1 : 0.7}
            stroke="var(--color-base-200)"
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
