import { ArrowUpDown, Star } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader } from "@/shared/ui/sidebar";

export function EditorSidebar() {
  return (
    <Sidebar className="border-sidebar-border inset-y-auto top-(--header-height) h-[calc(100dvh-var(--header-height))] border-t">
      <SidebarHeader className="border-sidebar-border border-b p-3">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
          <Button aria-label="즐겨찾기" size="icon" type="button" variant="outline">
            <Star />
          </Button>

          <Input
            aria-label="오브젝트 검색"
            className="border-sidebar-border border text-center placeholder:text-center"
            placeholder="검색"
            type="search"
          />

          <Button aria-label="정렬" size="icon" type="button" variant="outline">
            <ArrowUpDown />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div aria-label="오브젝트 카테고리" className="grid grid-cols-7 gap-1" role="group">
            {Array.from({ length: 14 }, (_, index) => (
              <Button
                aria-label={`오브젝트 카테고리 ${index + 1}`}
                className="border-sidebar-border bg-sidebar-accent/20 hover:bg-sidebar-accent aspect-square h-auto w-full rounded-sm border"
                key={index}
                size="icon"
                type="button"
                variant="outline"
              />
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
