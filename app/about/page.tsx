/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import me2 from "@/assets/me2.png"
import me3 from "@/assets/me3.png"
import { UserCircle } from "lucide-react"

import { menuItems } from "@/lib/constants"
import { RainbowSeparator } from "@/components/rainbow-separator"
import { WindowWrapper } from "@/components/window-wrapper"

export const metadata = {
  title: "about",
  description: "🆗",
}

export default function AboutPage() {
  return (
    <WindowWrapper
      title="About"
      icon={<UserCircle />}
      menu={menuItems.default}
      bottomBar
    >
      <div className="absolute inset-x-0 bottom-6 top-0 flex flex-col overflow-auto lg:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <aside className="flex min-w-fit flex-col items-center space-y-4 p-4 lg:border-r lg:border-windows-dark lg:shadow-inner lg:shadow-windows-dark">
            <figure className="flex flex-col items-center">
              <figcaption className="max-w-full text-xl font-semibold">
                My Story
              </figcaption>
            </figure>
            <RainbowSeparator />
            <div className="mx-auto size-full">
              <Image
                src={me2}
                alt="Some jabrone"
                width={450}
                height={750}
                className="aspect-square object-cover"
              />
            </div>
          </aside>

          <section className="mx-auto flex flex-col overflow-scroll px-3 py-10 scrollbar scrollbar-track-rounded-none scrollbar-thumb-rounded-none lg:col-span-2 lg:shadow-inner lg:shadow-windows-dark">
            <div className="prose max-w-full px-4">
              <h1 className="text-center lg:text-left">QWACK 🐥</h1>
              <p className="">
                Good DWCKing day to you! I'm just a DWCK but I have always
                looked at the sky every night wishing to fly. Help me fulfil my
                dream and take flight with our BIG DWCKing family! You will find
                that someday I will fly and it may be too late.
              </p>
              <div className="mx-auto size-full">
                <Image
                  src={me3}
                  alt="Some jabrone"
                  width={450}
                  height={750}
                  className="aspect-square object-cover"
                />
                <p className="">
                  The current family has some HUGE DWCKing plans to help me fly
                  to the moon! With a team of artists, developer and community
                  leads, check out my Resume for more information. And remember
                  to keep DWCKing.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </WindowWrapper>
  )
}
