import { Pen } from "lucide-react";

export const CTA = () => {
    return (
        <div className="bg-surface-light dark:bg-surface-dark py-20">
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Ready to Get Started?</h2>
                <p className="text-primary-400 dark:text-primary-100 mb-8 max-w-2xl mx-auto">
                    Join thousands of users who are already organizing their thoughts better with MindNote.
                </p>
                <button className="bg-primary-600 mx-auto hover:bg-primary-700 px-8 py-3 rounded-lg transition-colors text-white flex items-center">
                    Start taking notes
                    <Pen className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>
    );
};