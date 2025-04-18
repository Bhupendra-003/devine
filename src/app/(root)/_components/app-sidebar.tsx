"use client"
import * as React from "react"
import {
  Trash2,
  Search,
  Sparkles,
  Home,
  Inbox,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { SearchForm } from "@/components/search-form"
import { NavFiles } from "@/components/nav-files"

const data = {
  user: {
    name: "Bhupendra",
    email: "b@gmail.com",
    avatar: "/avatars/bhupi.png",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
  ],
  files: [
    {
      name: "main.py",
      url: "#",
      emoji: "",
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="rounded top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SearchForm />
        <div className="mt-2"><NavMain items={data.navMain} /></div>
      </SidebarHeader>
      <SidebarContent>
        <NavFiles files={data.files} />
      </SidebarContent>
      <SidebarFooter>
        <DialogDemo />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Settings from "./Settings"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full justify-start h-8 flex gap-2 items-center border-none outline-none text-white rounded-md hover:bg-muted p-2" variant="ghost">
          <Settings2 size={20} />
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] bg-popover">
        <DialogHeader>
          <DialogTitle>
            Settings
          </DialogTitle>
          <DialogDescription>
            Tweak the Code Editor Settings here.
          </DialogDescription>
        </DialogHeader>
        <Settings />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
