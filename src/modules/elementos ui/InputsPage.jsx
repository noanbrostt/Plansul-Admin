// src/pages/InputsPage.tsx

import React, { useState } from 'react';
import Input from './components/Input'; 

import { 
  FiMail, 
  FiUser, 
  FiLock, 
  FiSearch, 
  FiPhone,
  FiCalendar,
  FiDollarSign,
  FiHash,
  FiGlobe,
  FiAlertCircle,
  FiMapPin // Novo ícone para exemplo "Path"
} from "react-icons/fi"; 

export default function InputsPage() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [pathValue, setPathValue] = useState('');

  return (
    <div className="p-6 bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-base-content">Inputs</h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li><a>Home</a></li>
            <li>Elements</li>
            <li>Inputs</li>
          </ul>
        </div>
      </div>

      {/* --- Seção de Inputs Padrão e Variações de Cor (borda) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Inputs Padrão e Cores de Borda</h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input placeholder="Nome Completo (Padrão)" inputClassName="w-64" /> 
          <Input variant="primary" placeholder="Email (Borda Primary)" type="email" inputClassName="w-64" />
          <Input variant="secondary" placeholder="Telefone (Borda Secondary)" type="tel" inputClassName="w-64" />
          <Input variant="accent" placeholder="URL (Borda Accent)" type="url" inputClassName="w-64" />
          <Input variant="info" placeholder="Info Input (Borda Info)" inputClassName="w-64" />
          <Input variant="success" placeholder="Sucesso! (Borda Success)" inputClassName="w-64" />
          <Input variant="warning" placeholder="Atenção! (Borda Warning)" inputClassName="w-64" />
          <Input variant="error" placeholder="Erro! (Borda Error)" icon={<FiAlertCircle />} inputClassName="w-64" />
          <Input variant="ghost" placeholder="Ghost Input (sem borda)" bordered={false} inputClassName="w-64" /> 
        </div>
      </div>

      {/* --- Seção de Inputs com Ícones --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Inputs com Ícones</h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input 
            type="email" 
            placeholder="Seu Email" 
            icon={<FiMail />} 
            value={emailValue} 
            onChange={(e) => setEmailValue(e.target.value)} 
            variant="primary"
            inputClassName="w-72" // Exemplo de largura customizada
          />
          <Input 
            type="password" 
            placeholder="Senha" 
            icon={<FiLock />} 
            iconPosition="right" 
            value={passwordValue} 
            onChange={(e) => setPasswordValue(e.target.value)} 
            variant="secondary"
            inputClassName="w-72"
          />
          <Input 
            type="search" 
            placeholder="Buscar..." 
            icon={<FiSearch />} 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)} 
            variant="ghost" 
            bordered={false}
            inputClassName="w-80"
          />
          <Input 
            type="tel" 
            placeholder="(XX) XXXXX-XXXX" 
            icon={<FiPhone />} 
            iconPosition="left" 
            variant="info"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
            inputClassName="w-64"
          />
        </div>
      </div>

      {/* --- Seção de Inputs com Larguras Variadas --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Larguras de Inputs</h2>
        <p className="text-sm text-gray-500 mb-4">Use `inputClassName="w-..."` ou `wrapperClassName="w-..."` para controlar a largura.</p>
        <div className="flex flex-wrap items-end gap-4">
          <Input placeholder="w-32" inputClassName="w-32" />
          <Input placeholder="w-48" inputClassName="w-48" />
          <Input placeholder="w-64" inputClassName="w-64" />
          <Input placeholder="max-w-xs" inputClassName="max-w-xs" /> {/* 20rem ou 320px */}
          <Input placeholder="max-w-md" inputClassName="max-w-md" /> {/* 28rem ou 448px */}
          <Input placeholder="w-full (default)" inputClassName="w-full" wrapperClassName="w-80" /> {/* wrap w-full em um container de 80 */}
        </div>
      </div>

      {/* --- Seção de Inputs de Tamanhos (re-estilizado) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Tamanhos de Inputs</h2>
        <div className="flex flex-col gap-4">
          <Input size="lg" placeholder="Input Grande (lg)" />
          <Input size="md" placeholder="Input Médio (md)" /> {/* Padrão */}
          <Input size="sm" placeholder="Input Pequeno (sm)" />
          <Input size="xs" placeholder="Input Extra Pequeno (xs)" />
        </div>
      </div>

      {/* --- Seção de Inputs Desabilitados e Somente Leitura --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Inputs Desabilitados / Somente Leitura</h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input placeholder="Input Desabilitado" disabled />
          <Input placeholder="Input Somente Leitura" readOnly value="Texto pré-definido" />
          <Input variant="primary" placeholder="Desabilitado com Borda Primary" disabled />
          <Input variant="error" placeholder="Erro Desabilitado" disabled />
        </div>
      </div>

      {/* --- Seção de Input com Badge Opcional --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Input com "Opcional" Badge</h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input 
            icon={<FiMapPin />} 
            optionalBadge 
            optionalBadgeText="Opcional" // Você pode mudar o texto aqui
            placeholder="src/app/" 
            value={pathValue}
            onChange={(e) => setPathValue(e.target.value)}
            inputClassName="w-80" // Largura fixa para este exemplo
          />

          {/* Outro exemplo com badge, sem ícone e com texto customizado */}
          <Input 
            optionalBadge 
            optionalBadgeText="Apenas Leitura" 
            placeholder="Campo de Observação"
            readOnly
            value="Este campo é apenas para visualização."
            inputClassName="max-w-md"
          >
            Observações
          </Input>
        </div>
      </div>

      {/* --- Seção de Inputs de Tipos Específicos (HTML5) --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Tipos de Inputs HTML5</h2>
        <div className="flex flex-wrap items-end gap-4">
          <Input type="number" placeholder="Número" icon={<FiHash />} variant="accent" inputClassName="w-32" />
          <Input type="date" icon={<FiCalendar />} variant="success" inputClassName="w-48" />
          <Input type="color" defaultValue="#4a90e2" className="h-10 w-24" /> 
          <Input type="url" placeholder="Sua URL" icon={<FiGlobe />} variant="info" inputClassName="w-64" />
          <Input type="email" placeholder="email@exemplo.com" icon={<FiMail />} variant="warning" inputClassName="w-64" />
          <Input type="password" placeholder="Sua Senha" icon={<FiLock />} variant="error" inputClassName="w-64" />
        </div>
      </div>

    </div>
  );
}