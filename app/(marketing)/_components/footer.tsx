import { Brain } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="dark:bg-surface-dark bg-surface-light text-muted-light dark:text-muted-dark py-6">
			<div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4">
				<Brain className="w-8 h-8 text-primary-600" />
				<span className="font-semibold text-lg ml-2">MindNote</span>
			</div>
			<div className="text-center mt-4 text-sm text-muted-foreground">
				&copy; {new Date().getFullYear()} MindNote. All rights reserved.
			</div>
		</footer>
	);
};
