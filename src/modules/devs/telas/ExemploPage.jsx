import FavoriteButton from "@/components/FavoriteButton";

import {
  FaChartPie,
  FaClock,
  FaUser,
  FaFileInvoiceDollar,
} from "react-icons/fa";

export default function ExemploPage() {
  return (
    <div className="bg-base-100 min-h-screen space-y-6">
      {/* Breadcrumbs / Título da Página */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Tela de Exemplo{" "}
          <FavoriteButton
            tela={{ nome: "Tela de Exemplo", url: "devs/telas/exemplo" }}
          />
        </h1>
        <div className="text-sm breadcrumbs text-gray-500">
          <ul className="pointer-events-none">
            <li>Devs</li>
            <li>Telas</li>
            <li>Tela de Exemplo</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Esquerda */}
        <div className="flex items-center rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <div className="flex-1/2 space-y-4 text-left pr-2">
            <div className="text-4xl">82%</div>
            <div className="pl-1">Esquerda</div>
          </div>
          <div className="flex justify-center flex-1/2">
            <FaChartPie fontSize={80} color={"var(--color-primary)"} />
          </div>
        </div>

        {/* Meio Esquerda */}
        <div className="flex items-center rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <div className="flex-1/2 space-y-4 text-left pr-2">
            <div className="text-4xl">04:32</div>
            <div className="pl-1">Meio Esquerda</div>
          </div>
          <div className="flex justify-center flex-1/2">
            <FaClock fontSize={80} color={"var(--color-secondary)"} />
          </div>
        </div>

        {/* Meio Direita */}
        <div className="flex items-center rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <div className="flex-1/2 space-y-4 text-left pr-2">
            <div className="text-4xl">231</div>
            <div className="pl-1">Meio Direita</div>
          </div>
          <div className="flex justify-center flex-1/2">
            <FaUser fontSize={80} color={"var(--color-accent)"} />
          </div>
        </div>

        {/* Direita */}
        <div className="flex items-center rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <div className="flex-1/2 space-y-4 text-left pr-2">
            <div className="text-4xl">213k</div>
            <div className="pl-1">Direita</div>
          </div>
          <div className="flex justify-center flex-1/2">
            <FaFileInvoiceDollar fontSize={80} color={"var(--color-info)"} />
          </div>
        </div>
      </div>

      <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
        <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
          Bloco de Exemplo
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Esquerda */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Bloco de Exemplo (Esquerda)
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quibusdam temporibus nam a rerum est maiores unde amet, possimus
              laboriosam velit laudantium mollitia ullam facere qui quos ut
              natus quo. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>

        {/* Direita */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Bloco de Exemplo (Direita)
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quibusdam temporibus nam a rerum est maiores unde amet, possimus
              laboriosam velit laudantium mollitia ullam facere qui quos ut
              natus quo. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Esquerda */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Bloco de Exemplo (Esquerda)
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quibusdam temporibus nam a rerum est maiores unde amet, possimus
              laboriosam velit laudantium mollitia ullam facere qui quos ut
              natus quo.
            </p>
          </div>
        </div>

        {/* Meio */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Bloco de Exemplo (Meio)
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quibusdam temporibus nam a rerum est maiores unde amet, possimus
              laboriosam velit laudantium mollitia ullam facere qui quos ut
              natus quo.
            </p>
          </div>
        </div>

        {/* Direita */}
        <div className="rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md">
          <h2 className="text-lg font-semibold border-b pb-3 mb-4.5">
            Bloco de Exemplo (Direita)
          </h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quibusdam temporibus nam a rerum est maiores unde amet, possimus
              laboriosam velit laudantium mollitia ullam facere qui quos ut
              natus quo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
