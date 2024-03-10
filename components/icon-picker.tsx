"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

interface IconPickerProps {
	onChange: (icon: string) => void;
	children: React.ReactNode;
	asChild?: boolean;
}

export function IconPicker({ onChange, asChild, children }: IconPickerProps) {
	const { resolvedTheme } = useTheme();

	const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap;

	const themeMap = {
		light: Theme.LIGHT,
		dark: Theme.DARK,
	};

	const theme = themeMap[currentTheme];

	return (
		<Popover>
			<PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
			<PopoverContent className="w-full p-0 border-none shadow-none">
				<EmojiPicker
					height={350}
					onEmojiClick={(data) => onChange(data.emoji)}
					theme={theme}
				/>
			</PopoverContent>
		</Popover>
	);
}
