import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | blog app",
    default: "blog app",
  },
  description: "Web application for managing blogs and user comments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
