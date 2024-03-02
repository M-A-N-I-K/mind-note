"use client";
import { useMutation } from "convex/react";
import { useState } from "react";

import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TitleProps {
	initialData: Doc<"documents">;
}

export const Title = ({ initialData }: TitleProps) => {
	const update = useMutation(api.documents.update);

	const [isEditing, setIsEditing] = useState(false);
	return (
		<div className="flex items-center gap-x-1">
			{!!initialData.icon && <p>{initialData.icon}</p>}
			{isEditing ? (
				<Input
					className="h-7 px-2 focus-visible:outline-none"
					defaultValue={initialData.title}
					// onChange={(event) =>
					// 	update({ id: initialData.id, title: event.target.value })
					// }
					onDoubleClick={() => setIsEditing(true)}
				/>
			) : (
				<Button
					onClick={() => setIsEditing(true)}
					variant="ghost"
					size="sm"
					className="font-normal h-auto p-1"
				>
					<span className="truncate">{initialData.title}</span>
				</Button>
			)}
			{initialData.title}
		</div>
	);
};
