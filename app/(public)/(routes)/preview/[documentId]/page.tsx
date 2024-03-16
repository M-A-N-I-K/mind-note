"use client";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentIdPageProps {
	params: {
		documentId: Id<"documents">;
	};
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
	const Editor = useMemo(
		() => dynamic(() => import("@/components/editor"), { ssr: false }),
		[]
	);

	const update = useMutation(api.documents.update);

	const document = useQuery(api.documents.getById, {
		documentId: params.documentId,
	});

	const onChange = (content: string) => {
		update({
			id: params.documentId as Id<"documents">,
			content,
		});
	};

	if (document === undefined) {
		return (
			<div>
				<Cover.Skeleton />
				<div className="md:max-w-3xl lg:max-w-4xl mt-10 mx-auto">
					<div className="space-y-4 pl-8 pt-4">
						<Skeleton className="h-14 w-[50%]" />
						<Skeleton className="h-4 w-[80%]" />
						<Skeleton className="h-4 w-[40%]" />
						<Skeleton className="h-4 w-[60%]" />
					</div>
				</div>
			</div>
		);
	}

	if (document === null) {
		return <div>Document not found</div>;
	}

	return (
		<>
			<Cover preview url={document.coverImage} />
			<div className="md:max-w-3xl lg:max-w-4xl mx-auto">
				<Toolbar preview initialData={document} />
				<Editor
					editable={false}
					onChange={onChange}
					initialContent={document.content}
				/>
			</div>
		</>
	);
};

export default DocumentIdPage;
