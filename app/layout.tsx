import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import Head from "next/head";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "../components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "../lib/edgestore";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Notion",
	description: "Connected Workspace where everyone can collaborate.",
	icons: {
		icon: [
			{
				media: "prefers-color-scheme: light",
				url: "/logo.svg",
				href: "/logo.svg",
			},
			{
				media: "prefers-color-scheme: dark",
				url: "/logo-dark.svg",
				href: "/logo-dark.svg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head>
				<meta property="og:url" content="Canonical link preview URL" />
				<meta
					property="og:description"
					content="Link preview description"
				/>
				<meta property="og:title" content="Link preview title" />
				<meta property="og:image" content="Link preview image" />
				<meta property="og:type" content="notion" />
				<meta property="og:site_name" content="Notion Clone" />
			</Head>
			<body className={inter.className}>
				<ConvexClientProvider>
					<EdgeStoreProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
							storageKey="notion-theme"
						>
							<Toaster position="bottom-center" />
							<ModalProvider />
							{children}
						</ThemeProvider>
					</EdgeStoreProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
