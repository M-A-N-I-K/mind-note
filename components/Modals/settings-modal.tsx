"use client";

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
} from "../ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "../ui/label";
import { ModeToggle } from "../modeToggle";

export const SettingsModal = () => {
	const settings = useSettings();

	return (
		<Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
			<DialogContent>
				<DialogHeader className="border-b-2 pb-2">
					<h2 className="text-lg font-medium">My Settings</h2>
				</DialogHeader>
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-y-1">
						<Label>Appearance</Label>
						<span className="text-[0.8rem] text-muted-foreground">
							Customize how Notion looks on your device
						</span>
					</div>
					<ModeToggle />
				</div>
			</DialogContent>
		</Dialog>
	);
};
