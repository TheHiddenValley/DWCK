import { Chivo_Mono } from "next/font/google"
import { Terminal } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { WindowWrapper } from "@/components/window/window-wrapper"

import { TerminalWindow } from "./terminal"

const chivo = Chivo_Mono({ subsets: ["latin"], weight: ["400"] })

export const metadata = {
  title: "terminal",
  description: "🆗",
}

export default function TerminalPage() {
  return (
    <WindowWrapper
      title="Terminal"
      icon={<Terminal />}
      bottomBar
      menu={menuItems.default}
    >
      <div
        className={cn(
          `absolute inset-0 bg-windows-black p-2 text-sm text-windows-white md:text-base`,
          chivo.className
        )}
      >
        <div className="mb-4">
          <div className="text-lg font-bold">
            <div>********************</div>
            <div>******* iDev *******</div>
            <div>********************</div>
          </div>
          <span className="ml-8 block">
            &copy;copyright by: nobody {new Date().getFullYear()}
          </span>
        </div>
        <TerminalWindow />
      </div>
    </WindowWrapper>
  )
}
