import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Brain } from "lucide-react";

export const Footer = () => {
	return (
		<div className="flex items-center w-full p-6 bg-background dark:bg-background-dark z-50">
			<div className="flex items-center space-x-2">
				<Brain className="w-6 h-6 text-primary-600" />
				<span className="font-semibold">MindNote</span>
			</div>
			<div className="flex md:justify-end justify-between items-center md:ml-auto w-full gap-x-2 text-muted-foreground">
				<Button variant="ghost" size="sm">
					Privacy Policy
				</Button>
				<Button variant="ghost" size="sm">
					Terms & Conditions
				</Button>
			</div>
		</div>
	);
};
