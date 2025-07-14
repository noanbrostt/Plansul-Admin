import { useState } from "react";
import Textarea from "@/modules/devs/ui/Textarea/Textarea";
import FavoriteButton from "@/components/FavoriteButton";

export default function TextareasPage() {
  const [note, setNote] = useState("Texto inicial...");
  const [comment, setComment] = useState("Msg curta");

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex text-3xl font-bold text-base-content">
          Textareas
          <FavoriteButton
            tela={{ nome: "Textareas", url: "devs/ui/textareas" }}
          />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul>
            <li>Devs</li>
            <li>Elementos UI</li>
            <li>Textareas</li>
          </ul>
        </div>
      </div>

      {/* Textareas por Cores */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">Cores</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "padrão",
            "primary",
            "secondary",
            "accent",
            "info",
            "success",
            "warning",
            "error",
            "neutral",
            "ghost",
          ].map((variant) => (
            <Textarea
              key={variant}
              variant={variant}
              placeholder={`${variant.charAt(0).toUpperCase() + variant.slice(1)}`}
              value=""
              onChange={() => {}}
              showCounter={false}
            />
          ))}
        </div>
      </div>

      {/* Textareas por Tamanhos */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-4">
          Tamanhos
        </h2>
        <div className="flex flex-wrap gap-4">
            <Textarea
              variant="primary"
              size="xl"
              placeholder="Extra Large"
              value=""
              onChange={() => {}}
              showCounter={false}
            />
            <Textarea
              variant="primary"
              size="lg"
              placeholder="Large"
              value=""
              onChange={() => {}}
              showCounter={false}
            />
            <Textarea
              variant="primary"
              size="md"
              placeholder="Medium (Padrão)"
              value=""
              onChange={() => {}}
              showCounter={false}
            />
            <Textarea
              variant="primary"
              size="sm"
              placeholder="Small"
              value=""
              onChange={() => {}}
              showCounter={false}
            />
            <Textarea
              variant="primary"
              size="xs"
              placeholder="Extra Small"
              value=""
              onChange={() => {}}
              showCounter={false}
            />
        </div>
      </div>

      {/* --- Seção com Valores Iniciais para Textarea --- */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-base-content mb-6">
          Demonstração de Uso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Textarea controlado simples */}
          <div className="space-y-4 justify-items-center">
            <Textarea
              placeholder="Digite sua nota"
              value={note}
              onChange={(v) => {
                setNote(v);
                console.log("Nota:", v);
              }}
              showCounter={true}
            />
            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [note, setNote] = useState('Texto inicial...')

<Textarea
  placeholder="Digite sua nota"
  value={note}
  onChange={v => {
    setNote(v)
    console.log('Nota:', v)
  }}
  showCounter={true} // Já vem "true" como padrão
/>`}
              </pre>
            </div>
          </div>

          {/* Textarea com estado de erro */}
          <div className="space-y-4 justify-items-center">
            <Textarea
              placeholder="Sua mensagem"
              value={comment}
              onChange={(v) => {
                setComment(v);
                console.log("Comentário:", v);
              }}
              variant="primary"
              size="lg"
              maxLength="20"
              error={
                comment.length > 0 && comment.length < 10
                  ? "Mínimo 10 caracteres"
                  : undefined
              }
            />
            <div className="p-4 bg-base-300 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap">
                {`const [comment, setComment] = useState('Msg curta')

<Textarea
  placeholder="Sua mensagem"
  value={comment}
  onChange={v => {
    setComment(v)
    console.log('Comentário:', v)
  }}
  variant="primary"
  size="lg"
  maxLength="20"
  error={comment.length > 0 && comment.length < 10 
    ? 'Mínimo 10 caracteres' 
    : undefined}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
