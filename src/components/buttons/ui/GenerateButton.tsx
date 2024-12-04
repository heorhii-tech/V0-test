import { Zap } from 'lucide-react'

interface GenerateButtonProps {
  onClick: () => void
}

export function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <button
    className="flex items-center  justify-center w-[240px] h-10 bg-white text-[#335D95] rounded-full hover:bg-gray-100 transition-colors shadow-[0_0_28px_rgba(66,148,255,0.5)] px-4 fixed bottom-1 left-[calc(50%+128px)] -translate-x-1/2"
    onClick={onClick}
  >
    <Zap className="w-4 h-4 mr-2" />
    Generate Course Outline
  </button>
  )
}

