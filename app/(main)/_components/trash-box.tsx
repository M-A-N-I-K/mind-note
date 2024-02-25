"use client";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { Search, Trash, Undo } from "lucide-react";

import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";

import { useParams, useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { ConfirmModal } from "@/components/Modals/confirm-modal";

export const TrashBox = () => {
	const router = useRouter();
	const params = useParams();
	const documents = useQuery(api.documents.getTrash);
	const restore = useMutation(api.documents.restore);
	const remove = useMutation(api.documents.remove);

	const [search, setSearch] = useState("");

	const filteredDocuments = documents?.filter((document) =>
		document.title.toLowerCase().includes(search.toLowerCase())
	);

	const onClick = (documentId: string) => {
		router.push(`/documents/${documentId}`);
	};

	const onRestore = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		documentId: Id<"documents">
	) => {
		event.stopPropagation();
		const promise = restore({ id: documentId });

		toast.promise(promise, {
			loading: "Restoring...",
			success: "Note restored!",
			error: "Failed to restore note",
		});
	};

	const onRemove = (documentId: Id<"documents">) => {
		const promise = remove({ id: documentId });

		toast.promise(promise, {
			loading: "Deleting...",
			success: "Note deleted",
			error: "Failed to delete note",
		});

		if (params.documentId === documentId) {
			router.push("/documents");
		}
	};

	if (!documents) {
		return (
			<div className="h-full flex justify-center items-center p-4">
				<Spinner size={"lg"} />
			</div>
		);
	}

	return (
		<div className="text-sm">
			<div className="flex items-center gap-x-1 p-2">
				<Search className="h-4 w-4" />
				<Input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Filter by page title"
					className="h-7 px-2 focus-visble:ring-transparent bg-secondary"
				/>
			</div>
			<div className="mt-2 px-1 pb-1">
				<p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
					No Documents Found!
				</p>
				{filteredDocuments?.map((document) => (
					<div
						key={document._id}
						role="button"
						onClick={() => onClick(document._id)}
						className="text-sm text-primary w-full hover:bg-primary/5 rounded-sm flex items-center justify-between gap-x-2"
					>
						<span className="truncate">{document.title}</span>
						<div className="flex items-center">
							<div
								role="button"
								className="rounded-sm p-2 hover:bg-neutral-200"
								onClick={(e) => onRestore(e, document._id)}
							>
								<Undo className="h-4 w-4 text-muted-foreground" />
							</div>
							<ConfirmModal onConfirm={() => onRemove(document._id)}>
								<div
									role="button"
									className="rounded-sm p-2 hover:bg-neutral-200"
								>
									<Trash className="h-4 w-4 text-muted-foreground" />
								</div>
							</ConfirmModal>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
