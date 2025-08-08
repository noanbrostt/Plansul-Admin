import { FiFileText, FiCalendar, FiUser, FiStar } from "react-icons/fi";

export default function LoadingPage() {
  return (
    <div className="bg-base-100 space-y-6 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="skeleton h-10 w-64" />
          <FiStar />
        </div>
        <div className="text-sm breadcrumbs text-base-content/70">
          <ul className="flex gap-2">
            <li>
              <div className="skeleton h-4 w-20" />
            </li>
            <li>
              <div className="skeleton h-4 w-32 bg-primary" />
            </li>
          </ul>
        </div>
      </div>

      {/* Linhas da Tabela (Skeletons) */}
      <div className="skeleton rounded-box bg-base-200 p-6 pt-4.5 w-full shadow-md w-full">
        <div className="skeleton h-10 w-64 pb-3 mb-4.5"></div>
        <div className="h-0.5 w-full skeleton mb-4.5"></div>
        <div className="space-y-4 w-full">
          <div className="skeleton h-6 w-100/100" />
          <div className="skeleton h-6 w-98/100" />
          <div className="skeleton h-6 w-99/100" />
          <div className="skeleton h-6 w-97/100" />
          <div className="skeleton h-6 w-70/100" />
        </div>
      </div>
    </div>
  );
}
