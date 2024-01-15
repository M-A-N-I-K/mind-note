import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Motion",
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
		<html lang="en" supressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					storageKey="motion-theme"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
