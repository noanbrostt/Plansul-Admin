import { useState } from "react";
import Textarea from "@/modules/devs/ui/Textarea/Textarea";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";

export default function TextareasPage() {
  const [note, setNote] = useState("Texto inicial...");
  const [comment, setComment] = useState("Msg curta");

  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Cores</h2>
        <div className="flex flex-wrap justify-center gap-4">
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
              placeholder={`${
                variant.charAt(0).toUpperCase() + variant.slice(1)
              }`}
              value=""
              onChange={() => {}}
              showCounter={false}
            />
          ))}
        </div>
      </div>

      {/* Textareas por Tamanhos */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">Tamanhos</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
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
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
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
            <div>
              <CodeBlock
                code={`import Textarea from "@/modules/devs/ui/Textarea/Textarea";

const [note, setNote] = useState('Texto inicial...')

<Textarea
  placeholder="Digite sua nota"
  value={note}
  onChange={v => {
    setNote(v)
    console.log('Nota:', v)
  }}
  showCounter={true} // Já vem "true" como padrão
/>`}
              />
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
            <div>
              <CodeBlock
                code={`import Textarea from "@/modules/devs/ui/Textarea/Textarea";

const [comment, setComment] = useState('Msg curta')

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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
