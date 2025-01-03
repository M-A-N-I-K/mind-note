"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";

import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
	const { user } = useUser();
	const router = useRouter();
	const create = useMutation(api.documents.create);

	const onCreate = async () => {
		const promise = create({ title: "Untitled" })
			.then((documentId) => {
				router.push(`/documents/${documentId}`);
			})
			.catch((error) => {
				toast.error(error.message);
			});

		toast.promise(promise, {
			loading: "Creating a new note...",
			success: "New Note created",
			error: "Failed to create a new note",
		});
	};

	return (
		<div className="h-full flex flex-col items-center justify-center space-y-4">
			<Image
				src="/empty.png"
				alt="empty"
				height="300"
				width="300"
				className="dark:hidden"
			/>
			<Image
				src="/empty-dark.png"
				alt="empty"
				height="300"
				width="300"
				className="hidden dark:block"
			/>
			<h2 className="text-lg font-md">
				Welcome to {user?.fullName}&apos;s MindNote
			</h2>
			<Button onClick={onCreate}>
				<PlusCircle className="mr-2 h-4 w-4" />
				Create a note
			</Button>
		</div>
	);
};

export default DocumentsPage;
