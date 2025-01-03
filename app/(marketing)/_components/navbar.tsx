"use client";
import useScrollTop from "@/hooks/use-scroll-top";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { ModeToggle } from "@/components/modeToggle";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { Brain } from "lucide-react";

export const Navbar = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();
	const scrolled = useScrollTop();
	return (
		<div
			className={cn(
				"z-50 bg-background dark:bg-background-dark fixed top-0 flex items-center w-full p-6",
				scrolled && "border-b shadow-sm"
			)}
		>
			<div className="flex items-center space-x-2">
				<Brain className="w-8 h-8 text-primary-600" />
				<span className="text-xl font-bold">MindNote</span>
			</div>
			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				{isLoading && <Spinner />}
				{!isAuthenticated && !isLoading && (
					<>
						<SignInButton mode="modal">
							<Button variant="ghost" size="sm">
								Log in
							</Button>
						</SignInButton>
						<SignInButton mode="modal">
							<button className="bg-primary-600 px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-white">
								Get Started
							</button>
						</SignInButton>
					</>
				)}
				{isAuthenticated && !isLoading && (
					<>
						<Button variant="ghost" size="sm" asChild>
							<Link href="/documents">Enter MindNote</Link>
						</Button>
						<UserButton afterSignOutUrl="/" />
					</>
				)}
				<ModeToggle />
			</div>
		</div>
	);
};
