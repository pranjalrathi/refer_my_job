import "./globals.css";
import {Inter} from 'next/font/google'
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

const inter = Inter({subsets:["latin"]});
export const metadata = {
  title: "ReferMyJob-Job Referral Portal",
  description: "Job Referral Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
