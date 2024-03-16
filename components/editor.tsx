"use client";
import { useTheme } from "next-themes";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
	onChange: (value: string) => void;
	initialContent?: string;
	editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable = true }: EditorProps) => {
	const { resolvedTheme } = useTheme();

	const { edgestore } = useEdgeStore();

	const handleUpload = async (file: File): Promise<string> => {
		const res = await edgestore.publicFiles.upload({
			file,
		});
		return res.url;
	};

	const editor = useCreateBlockNote({
		initialContent: initialContent ? JSON.parse(initialContent) : undefined,
		uploadFile: handleUpload,
	});

	return (
		<div>
			<BlockNoteView
				onChange={() => {
					onChange(JSON.stringify(editor.document, null, 2));
				}}
				editable={editable}
				editor={editor}
				theme={resolvedTheme === "dark" ? "dark" : "light"}
			/>
		</div>
	);
};

export default Editor;
