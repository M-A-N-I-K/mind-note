"use client";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/Modals/confirm-modal";

interface BannerProps {
	documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
	const router = useRouter();
	const remove = useMutation(api.documents.remove);
	const restore = useMutation(api.documents.restore);

	const onRemove = () => {
		const promise = remove({ id: documentId });

		toast.promise(promise, {
			loading: "Deleting...",
			success: "Note deleted",
			error: "Failed to delete note",
		});

		router.push("/documents");
	};

	const onRestore = () => {
		const promise = restore({ id: documentId });
		toast.promise(promise, {
			loading: "Restoring...",
			success: "Note restored!",
			error: "Failed to restore note",
		});
	};

	return (
		<div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center justify-center gap-x-2">
			<p>This page is in the trash!</p>
			<Button
				variant={"outline"}
				size={"sm"}
				onClick={onRestore}
				className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white px-2 p-1 h-auto font-normal"
			>
				Restore page
			</Button>
			<ConfirmModal onConfirm={onRemove}>
				<Button
					variant={"outline"}
					size={"sm"}
					className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
				>
					Delete Forever
				</Button>
			</ConfirmModal>
		</div>
	);
};
