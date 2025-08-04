import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";

export default function BlocosPage() {
  return (
    <div className="bg-base-100 space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Blocos{" "}
          <FavoriteButton tela={{ nome: "Blocos", url: "devs/ui/blocos" }} />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul className="pointer-events-none">
            <li>Devs</li>
            <li>Elementos UI</li>
            <li className="text-primary font-medium">Blocos</li>
          </ul>
        </div>
      </div>

      {/* Pequeno */}
      <div className="rounded-box bg-base-200 p-3.5 pt-3 max-w-sm mx-auto shadow-md">
        <h2 className="text-md font-semibold border-b pb-2 mb-2.5">
          Bloco Pequeno
        </h2>
        <p>Ideal para conteúdos curtos ou agrupamentos pequenos.</p>
      </div>

      {/* Médio */}
      <div className="rounded-box bg-base-200 p-4.5 pt-4 max-w-2xl mx-auto shadow-md">
        <h2 className="text-lg font-semibold border-b pb-2 mb-3">
          Bloco Médio
        </h2>
        <div className="space-y-2">
          <p>
            Esse bloco tem um tamanho mediano, bom para seções de conteúdo como
            formulários ou grupos de botões.
          </p>
          <div className="flex gap-2 flex-wrap">
            <button className="btn btn-primary btn-sm">Botão 1</button>
            <button className="btn btn-secondary btn-sm">Botão 2</button>
          </div>
        </div>
      </div>

      {/* Grande */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Bloco Grande
        </h2>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            voluptates repellat iure molestias tempore sequi, laborum cupiditate
            architecto animi dignissimos illum laudantium eos neque mollitia
            facere nisi labore iusto commodi. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quis voluptates inventore accusantium
            iusto perspiciatis id reiciendis tempora, rem asperiores, animi eum
            et expedita officia fugit voluptatum debitis nihil repudiandae
            veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Rerum officiis incidunt consequatur doloremque nihil expedita dicta
            odio aliquam minus esse laborum libero ipsam, velit dolore
            consectetur consequuntur accusantium sed natus!
          </p>
        </div>
      </div>

      {/* Colunas */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Bloco com Colunas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-2">Coluna 1</p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              voluptates repellat iure molestias tempore sequi, laborum
              cupiditate architecto animi dignissimos illum laudantium eos neque
              mollitia facere nisi labore iusto commodi. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quis voluptates inventore
              accusantium iusto perspiciatis id reiciendis tempora, rem
              asperiores, animi eum et expedita officia fugit voluptatum debitis
              nihil repudiandae veniam! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Rerum officiis incidunt consequatur doloremque
              nihil expedita dicta odio aliquam minus esse laborum libero ipsam,
              velit dolore consectetur consequuntur accusantium sed natus!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="mb-2">Coluna 2</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit..</p>
            <input
              type="text"
              placeholder="Campo"
              className="input input-bordered w-full"
            />
            <button className="btn btn-success w-full">Confirmar</button>
          </div>
        </div>
      </div>

      {/* Responsivo com scroll horizontal */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md overflow-x-auto">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5 sticky left-0">
          Bloco com Scroll
        </h2>
        <div className="flex gap-4 w-[800px]">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-sm p-4 min-w-[120px] text-center"
            >
              <p>Item {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Seção de Demonstração --- */}
      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Demonstração de Uso (Bloco Grande)
        </h2>
        <div>
          <CodeBlock
            code={`<div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
  <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
    Bloco Grande
  </h2>
  <div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
      voluptates repellat iure molestias tempore sequi, laborum cupiditate
      architecto animi dignissimos illum laudantium eos neque mollitia
      facere nisi labore iusto commodi. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Quis voluptates inventore accusantium
      iusto perspiciatis id reiciendis tempora, rem asperiores, animi eum
      et expedita officia fugit voluptatum debitis nihil repudiandae
      veniam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Rerum officiis incidunt consequatur doloremque nihil expedita dicta
      odio aliquam minus esse laborum libero ipsam, velit dolore
      consectetur consequuntur accusantium sed natus!
    </p>
  </div>
</div>`}
          />
        </div>
      </div>
    </div>
  );
}
