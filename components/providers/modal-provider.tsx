"use client";

import { useState, useEffect } from "react";

import { SettingsModal } from "../Modals/settings-modal";
import { CoverImageModal } from "../Modals/cover-image-modal";

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<SettingsModal />
			<CoverImageModal />
		</>
	);
};
