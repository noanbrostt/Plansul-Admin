import { useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import CodeBlock from "@/components/CodeBlock";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendarOverrides.css";
import {
  FiCalendar,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiX,
  FiUser,
  FiMapPin,
  FiInfo,
} from "react-icons/fi";

// Configuração do calendário
const locales = { "pt-BR": ptBR };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
// Gera uma Date a partir de hoje + offset de dias e horas/minutos
function getDateOffset(daysOffset, hour = 0, minute = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  d.setHours(hour, minute, 0, 0);
  return d;
}

export default function CalendarioPage() {
  // Eventos iniciais espalhados nas próximas duas semanas
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Reunião de Equipe",
      start: getDateOffset(1, 10, 0),
      end: getDateOffset(1, 11, 30),
      description: "Reunião semanal para alinhamento das atividades",
      location: "Sala de Reuniões 1",
      participants: ["Ana Silva", "Carlos Mendes"],
      color: "#3b82f6",
    },
    {
      id: 2,
      title: "Almoço com Cliente",
      start: getDateOffset(4, 12, 0),
      end: getDateOffset(4, 14, 0),
      description: "Almoço de negócios com representantes da empresa XYZ",
      location: "Restaurante Bella Vista",
      participants: ["Beatriz Costa", "Daniel Oliveira"],
      color: "#10b981",
    },
    {
      id: 3,
      title: "Entrega de Projeto",
      start: getDateOffset(9, 15, 0),
      end: getDateOffset(9, 16, 0),
      description: "Apresentação final do projeto para o cliente",
      location: "Sala de Conferências",
      participants: ["Eduarda Santos", "Fernando Almeida"],
      color: "#ef4444",
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    description: "",
    location: "",
    participants: [],
    color: "#3b82f6",
  });
  const [participantsInput, setParticipantsInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  // Seleciona um evento para ver detalhes
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setEditingId(null);
    setShowModal(true);
  };

  // Cria novo evento a partir de seleção de slot
  const handleSelectSlot = (slotInfo) => {
    setSelectedEvent(null);
    setEditingId(null);
    setNewEvent({
      title: "",
      start: slotInfo.start,
      end: slotInfo.end || moment(slotInfo.start).add(1, "hours").toDate(),
      description: "",
      location: "",
      participants: [],
      color: "#3b82f6",
    });
    setParticipantsInput("");
    setShowModal(true);
  };

  // Salva evento novo ou edição
  const handleSaveEvent = () => {
    const parsed = participantsInput
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p);
    const eventToSave = { ...newEvent, participants: parsed };

    if (editingId != null) {
      setEvents((evts) =>
        evts.map((ev) =>
          ev.id === editingId ? { ...eventToSave, id: editingId } : ev
        )
      );
    } else {
      setEvents((evts) => [...evts, { ...eventToSave, id: evts.length + 1 }]);
    }

    // reset geral
    setShowModal(false);
    setSelectedEvent(null);
    setEditingId(null);
    setParticipantsInput("");
    setNewEvent({
      title: "",
      start: new Date(),
      end: new Date(),
      description: "",
      location: "",
      participants: [],
      color: "#3b82f6",
    });
  };

  // Exclui evento
  const handleDeleteEvent = () => {
    setEvents((evts) => evts.filter((ev) => ev.id !== selectedEvent.id));
    setShowModal(false);
    setSelectedEvent(null);
  };

  // Aplica cor ao evento no calendário
  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.color,
      border: "none",
      borderRadius: "4px",
      color: "#fff",
      padding: "2px 5px",
    },
  });

  return (
    <div className="bg-base-100 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          Calendário
          <FavoriteButton
            tela={{ nome: "Calendário", url: "devs/telas/calendario" }}
          />
        </h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Devs</li>
            <li>Telas</li>
            <li className="text-primary font-medium">Calendário</li>
          </ul>
        </div>
      </div>

      <div className="bg-base-200 rounded-box shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              setSelectedEvent(null);
              setEditingId(null);
              setParticipantsInput("");
              setShowModal(true);
            }}
          >
            <FiPlus className="mr-1" /> Novo Evento
          </button>
        </div>

        <Calendar
          localizer={localizer}
          culture="pt-BR"
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          eventPropGetter={eventStyleGetter}
          messages={{
            // toolbar
            next: "Próximo",
            previous: "Anterior",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            agenda: "Agenda",
            // agenda view
            date: "Data",
            time: "Hora",
            event: "Evento",
            allDay: "Dia inteiro",
            noEventsInRange: "Sem eventos neste intervalo",
          }}
          formats={{
            weekdayFormat: "EEE",
            monthHeaderFormat: "MMMM yyyy",
            dayFormat: "d",
            agendaDateFormat: "dd/MM/yyyy",
            agendaTimeHeaderFormat: "HH:mm",
          }}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-base-100 rounded-box w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {editingId != null
                    ? "Editar Evento"
                    : selectedEvent
                    ? "Detalhes do Evento"
                    : "Novo Evento"}
                </h2>
                <button
                  className="btn btn-sm btn-circle btn-ghost"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedEvent(null);
                    setEditingId(null);
                  }}
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {editingId != null || selectedEvent === null ? (
                <>
                  {/* FORMULÁRIO */}
                  <div className="space-y-4">
                    {/* Título */}
                    <div>
                      <label className="label">
                        <span className="label-text">Título</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={newEvent.title}
                        onChange={(e) =>
                          setNewEvent({ ...newEvent, title: e.target.value })
                        }
                      />
                    </div>

                    {/* Início / Fim */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="label">
                          <span className="label-text">Início</span>
                        </label>
                        <input
                          type="datetime-local"
                          className="input input-bordered w-full"
                          value={moment(newEvent.start).format(
                            "YYYY-MM-DDTHH:mm"
                          )}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              start: new Date(e.target.value),
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text">Fim</span>
                        </label>
                        <input
                          type="datetime-local"
                          className="input input-bordered w-full"
                          value={moment(newEvent.end).format(
                            "YYYY-MM-DDTHH:mm"
                          )}
                          onChange={(e) =>
                            setNewEvent({
                              ...newEvent,
                              end: new Date(e.target.value),
                            })
                          }
                        />
                      </div>
                    </div>

                    {/* Descrição */}
                    <div>
                      <label className="label">
                        <span className="label-text">Descrição</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered w-full"
                        value={newEvent.description}
                        onChange={(e) =>
                          setNewEvent({
                            ...newEvent,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>

                    {/* Localização */}
                    <div>
                      <label className="label">
                        <span className="label-text">Localização</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={newEvent.location}
                        onChange={(e) =>
                          setNewEvent({ ...newEvent, location: e.target.value })
                        }
                      />
                    </div>

                    {/* Participantes */}
                    <div>
                      <label className="label">
                        <span className="label-text">
                          Participantes (vírgula)
                        </span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={participantsInput}
                        onChange={(e) => setParticipantsInput(e.target.value)}
                        placeholder="Nome1, Nome2, Nome3"
                      />
                    </div>

                    {/* Cor */}
                    <div>
                      <label className="label">
                        <span className="label-text">Cor</span>
                      </label>
                      <div className="flex gap-2">
                        {[
                          "#3b82f6",
                          "#10b981",
                          "#ef4444",
                          "#f59e0b",
                          "#a28618",
                        ].map((color) => (
                          <button
                            key={color}
                            className={`w-8 h-8 rounded-full ${
                              newEvent.color === color
                                ? "ring-2 ring-primary"
                                : ""
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => setNewEvent({ ...newEvent, color })}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex justify-end gap-3 pt-6">
                    <button
                      className="btn btn-ghost"
                      onClick={() => {
                        setShowModal(false);
                        setEditingId(null);
                      }}
                    >
                      Cancelar
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={handleSaveEvent}
                    >
                      Salvar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* DETALHES DO EVENTO */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1">
                      {selectedEvent.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <FiCalendar />
                      <span>
                        {moment(selectedEvent.start).format("DD/MM/YYYY HH:mm")}{" "}
                        – {moment(selectedEvent.end).format("HH:mm")}
                      </span>
                    </div>
                    <p>{selectedEvent.description}</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiMapPin />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <FiUser className="mt-1" />
                      <div>
                        <h4 className="font-semibold">Participantes:</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedEvent.participants.map((p, i) => (
                            <span key={i} className="badge badge-outline">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      className="btn btn-error"
                      onClick={handleDeleteEvent}
                    >
                      <FiTrash2 className="mr-2" /> Excluir
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setNewEvent(selectedEvent);
                        setParticipantsInput(
                          selectedEvent.participants.join(", ")
                        );
                        setEditingId(selectedEvent.id);
                        setSelectedEvent(null);
                      }}
                    >
                      <FiEdit className="mr-2" /> Editar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Seção de integração com backend */}
      <div className="bg-base-200 rounded-box p-6 mt-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FiInfo className="text-info" />
          Como Integrar com Backend
        </h2>

        <div className="space-y-4">
          <div className="bg-base-300 rounded-box p-4">
            <h3 className="font-bold text-lg mb-2">1. Estrutura da API</h3>
            <p>
              Para integrar este calendário com um backend, você precisará de
              endpoints RESTful:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <code>GET /events</code> - Listar todos os eventos
              </li>
              <li>
                <code>GET /events/:id</code> - Obter detalhes de um evento
              </li>
              <li>
                <code>POST /events</code> - Criar novo evento
              </li>
              <li>
                <code>PUT /events/:id</code> - Atualizar evento existente
              </li>
              <li>
                <code>DELETE /events/:id</code> - Excluir evento
              </li>
            </ul>
          </div>

          <div className="bg-base-300 rounded-box p-4">
            <h3 className="font-bold text-lg mb-2">2. Modelo de Dados</h3>
            <p>
              Seu modelo de dados no backend deve corresponder à estrutura de
              eventos:
            </p>
            <CodeBlock code={`{
  id: number,
  title: string,
  start: Date,
  end: Date,
  description: string,
  location: string,
  participants: string[],
  color: string
}`} language="json" />
          </div>
          <div className="bg-base-300 rounded-box p-4">
            <h3 className="font-bold text-lg mb-2">
              3. Implementação com React
            </h3>
            <p>
              No frontend, você usaria useEffect e funções assíncronas para
              interagir com a API:
            </p>
            <CodeBlock code={`// Exemplo de busca de eventos
useEffect(() => {
  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    }
  };
  fetchEvents();
}, []);

// Exemplo de criação de evento
const createEvent = async (eventData) => {
  try {
    const response = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    const newEvent = await response.json();
    setEvents(prevEvents => [...prevEvents, newEvent]);
  } catch (error) {
   console.error('Erro ao criar evento:', error);
    }
};`} />
          </div>

          <div className="bg-base-300 rounded-box p-4">
            <h3 className="font-bold text-lg mb-2">
              4. Considerações Importantes
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Implemente tratamento de erros e estados de carregamento</li>
              <li>
                Para aplicações em tempo real, adicione WebSockets para
                atualizações instantâneas
              </li>
              <li>Adicione paginação se você tiver muitos eventos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
