interface KnowledgeItem {
  itemName: string
}

export default function KnowledgeItem({ itemName }: KnowledgeItem) {
  return (
    <div className="w-full bg-violet-300/10 h-10 flex items-center justify-center shadow-sm rounded-lg text-center">
      <span className="text-violet-700/80">{itemName}</span>
    </div>
  )
}