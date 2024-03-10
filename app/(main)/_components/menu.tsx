"use client";

import { useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { MoreHorizontal, Trash } from "lucide-react";

interface MenuProps {
	documentId: Id<"documents">;
}

export const Menu = ({ documentId }: MenuProps) => {
	const router = useRouter();
	const { user } = useUser();
	const archive = useMutation(api.documents.archive);
	const onArchive = () => {
		const promise = archive({ id: documentId });

		toast.promise(promise, {
			loading: "Archiving...",
			success: "Note archived!",
			error: "Failed to archive note",
		});

		router.push("/documents");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="sm" variant="ghost">
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-60"
				align="end"
				alignOffset={8}
				forceMount
			>
				<DropdownMenuItem onClick={onArchive}>
					<Trash className="mr-2 h-4 w-4" />
					Delete
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<div className="p-2 text-xs text-muted-foreground">
					Last edited by {user?.fullName}
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

Menu.Skeleton = function MenuSkeleton() {
	return <Skeleton className="h-10 w-10" />;
};
