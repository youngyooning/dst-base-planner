import { ArrowUpDown, Star } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarTrigger, useSidebar } from "@/shared/ui/sidebar";

export function EditorSidebar() {
  const { isMobile, open, openMobile } = useSidebar();
  const isOpen = isMobile ? openMobile : open;
  const toggle = (
    <SidebarTrigger
      aria-expanded={isOpen}
      aria-label={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
      className="border-sidebar-border bg-sidebar absolute top-3 left-[calc(100%)] rounded-l-none rounded-r-md border"
      size="icon"
      title={isOpen ? "사이드바 접기" : "사이드바 펼치기"}
      type="button"
      variant="outline"
    />
  );

  return (
    <>
      {isMobile && !openMobile && <div className="fixed top-(--header-height) -left-px z-10">{toggle}</div>}
      <Sidebar
        collapsible="offcanvas"
        className="border-sidebar-border inset-y-auto top-(--header-height) h-[calc(100dvh-var(--header-height))] border"
      >
        <SidebarHeader className="border-sidebar-border relative border-b p-3">
          {toggle}
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3" inert={!isOpen}>
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

        <SidebarContent inert={!isOpen}>
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
    </>
  );
}
