import { SidebarProvider } from "@/shared/ui/sidebar";
import { EditorSidebar } from "@/widgets/EditorSidebar";

export function EditorPage() {
  return (
    <SidebarProvider>
      <EditorSidebar />
    </SidebarProvider>
  );
}
