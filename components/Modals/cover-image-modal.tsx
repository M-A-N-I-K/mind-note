"use client";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "../single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
	const update = useMutation(api.documents.update);
	const coverImage = useCoverImage();
	const { edgestore } = useEdgeStore();
	const params = useParams();

	const [file, setFile] = useState<File>();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onClose = () => {
		setIsSubmitting(false);
		setFile(undefined);
		coverImage.onClose();
	};

	const onChange = async (file?: File) => {
		if (file) {
			setIsSubmitting(true);
			setFile(file);

			const res = await edgestore.publicFiles.upload({
				file,
				options: {
					replaceTargetUrl: coverImage.url,
				},
			});

			await update({
				id: params.documentId as Id<"documents">,
				coverImage: res.url,
			});

			onClose();
		}
	};
	return (
		<Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
			<DialogContent>
				<DialogHeader className="text-center text-lg font-semibold">
					<h2>Set cover image</h2>
				</DialogHeader>
				<div>TODO : Upload Image</div>
				<SingleImageDropzone
					className="w-full outline-none"
					value={file}
					onChange={onChange}
					disabled={isSubmitting}
				/>
			</DialogContent>
		</Dialog>
	);
};
