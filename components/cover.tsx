"use client";

import Image from "next/image";
import { ImageIcon, X } from "lucide-react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { Skeleton } from "@/components/ui/skeleton";

interface CoverImageProps {
	url?: string;
	preview?: boolean;
}
export const Cover = ({ url, preview }: CoverImageProps) => {
	const coverImage = useCoverImage();
	const params = useParams();
	const removeCoverImage = useMutation(api.documents.removeCoverImage);
	const { edgestore } = useEdgeStore();

	const onRemove = async () => {
		await edgestore.publicFiles.delete({
			url,
		});

		await removeCoverImage({
			id: params.documentId as Id<"documents">,
		});
	};

	return (
		<div
			className={cn(
				"relative w-full h-[35vh] group",
				!url && "h-[12vh]",
				url && "bg-muted"
			)}
		>
			{!!url && (
				<Image src={url} alt="Cover image" fill className="object-cover" />
			)}

			{url && !preview && (
				<div className="absolute flex items-center gap-x-2 bottom-5 right-5 bg-black/40 opacity-0 group-hover:opacity-100">
					<Button
						onClick={() => coverImage.onReplace(url)}
						className="text-muted-foreground text-xs"
						variant="outline"
						size="sm"
					>
						<ImageIcon className="h-4 w-4 mr-2" />
						Change Cover
					</Button>
					<Button
						onClick={onRemove}
						className="text-muted-foreground text-xs"
						variant="outline"
						size="sm"
					>
						<X className="h-4 w-4 mr-2" />
						Remove
					</Button>
				</div>
			)}
		</div>
	);
};

Cover.Skeleton = function CoverSkeleton() {
	return <Skeleton className="w-full h-[12vh]" />;
};
