import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import IconSidebar from "@/components/sidebar/icon/sidebar";
import TreeSidebar from "@/components/sidebar/tree/sidebar";
import {IconSidebarPrimaryMenu, IconSidebarSecondaryMenu, TreeSidebarMenu} from "@/data/menus";
import TabBar from "@/components/ui/tabbar/tab-bar";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import LineNumbers from "@/components/ui/line-numbers";
import TopBar from "@/components/ui/top-bar";
import Console from "@/components/console/console";
import { Providers } from "./providers";
import Footer from "@/components/footer";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Adrian Bradley',
    default: 'Adrian Bradley',
  },
  description: "Adrian Bradley is a skilled Full Stack Developer and WordPress Specialist with nearly a decade of experience in digital marketing. Explore his interactive portfolio, projects, and expertise in React, Laravel, WordPress, and more.",
  openGraph: {
    images: '/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inconsolata.variable} antialiased overflow-hidden`}>
        <Providers>
          <div className="flex flex-col h-dvh max-h-dvh">
            <div className="flex flex-row bg-background-accent border">
              <TopBar/>
            </div>

            <div className="flex flex-row flex-1 overflow-hidden">
              <div className="lg:flex flex-row bg-background-accent hidden">
                <div className="flex border">
                  <IconSidebar primaryMenu={IconSidebarPrimaryMenu} secondaryMenu={IconSidebarSecondaryMenu} />
                </div>

                <div className="flex flex-1 border">
                  <TreeSidebar menu={TreeSidebarMenu} />
                </div>
              </div>

              <div className="flex flex-col flex-1 ">
                <div className="flex bg-background-accent">
                  <TabBar />
                </div>

                <div className="flex flex-col flex-1 overflow-hidden">
                  <div className="px-4">
                    <Breadcrumbs />
                  </div>
                  <div className="flex flex-col flex-1 overflow-y-auto h-fill custom-scrollbar">
                      <div className="flex flex-row">
                        <LineNumbers />
                        <div className="flex flex-1 me-5">
                          {children}
                        </div>
                      </div>

                  </div>
                </div>
                  <Console />
              </div>
            </div>

            <div className="flex flex-row bg-background-accent">
              <Footer />
            </div>
          </div> 
        </Providers>
      </body>
    </html>
  );
}
