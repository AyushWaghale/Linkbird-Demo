// app/layout.tsx (server)
import "./globals.css";
import ClientSidebar from "@/components/AppSidebarClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientSidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
