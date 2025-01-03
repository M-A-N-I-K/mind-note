import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors">
            <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
}