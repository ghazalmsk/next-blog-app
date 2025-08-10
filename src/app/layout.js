import "@/styles/globals.css";
import AuthProvider from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata = {
  title: {
    template: "%s | blog app",
    default: "blog app",
  },
  description: "Web application for managing blogs and user comments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen"}>
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
