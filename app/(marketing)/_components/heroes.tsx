import { Sparkles } from "lucide-react";

export const Heroes = () => {
	return (
		<div className="container mx-auto px-4 py-20">
			<div className="max-w-4xl mx-auto text-center">
				<h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
					Capture Your Thoughts, Unleash Your Potential
				</h1>
				<p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
					A powerful note-taking app designed for creative minds. Organize your ideas, collaborate seamlessly, and boost your productivity.
				</p>
				<div className="flex justify-center space-x-4">
					<button className="bg-primary-600 hover:bg-primary-700 px-8 py-3 rounded-lg transition-colors text-white flex items-center">
						<Sparkles className="w-5 h-5 mr-2" />
						Try for Free
					</button>
				</div>
			</div>
		</div>
	);
};
