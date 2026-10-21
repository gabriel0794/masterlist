
export interface SidebarItem {
  id: string
  label: string
}

interface SidebarProps {
  items?: SidebarItem[]
  activeId: string
  onSelect: (id: string) => void
}


const defaultItems: SidebarItem[] = [
  { id: 'masterlist', label: 'Master List'},
  { id: 'dataencoder', label: 'Data Encoder' },
  { id: 'gip', label: 'GIP' },
  { id: 'ojt', label: 'OJT'},
]

export default function Sidebar({
  items = defaultItems,
  activeId,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-green-800 text-slate-50">
      <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-6">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-green-500 text-sm font-bold text-white">
          DOH
        </span>
        <span className="text-lg font-semibold text-slate-white">DOH CDH-NM</span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {items.map((item) => {
          const active = item.id === activeId
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              aria-current={active ? 'page' : undefined}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? 'bg-indigo-50 text-green-500'
                  : 'text-white hover:bg-slate-100 hover:text-green-500'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-slate-200 p-4 text-xs text-white">
        All rights reserved. &copy; 2026
      </div>
    </aside>
  )
}   