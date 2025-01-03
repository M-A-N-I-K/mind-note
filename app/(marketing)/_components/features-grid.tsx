import { FeatureCard } from '@/components/feature-card';
import { BookAIcon, Brain, Sparkles, Cloud, Lock, Share2 } from 'lucide-react';

export const FeaturesGrid = () => {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose MindNote?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureCard
                        icon={BookAIcon}
                        title="Smart Organization"
                        description="Organize your notes with intelligent categorization and tagging system"
                    />
                    <FeatureCard
                        icon={Cloud}
                        title="Cloud Sync"
                        description="Access your notes from anywhere with real-time cloud synchronization"
                    />
                    <FeatureCard
                        icon={Lock}
                        title="Secure Storage"
                        description="Your notes are protected with end-to-end encryption"
                    />
                    <FeatureCard
                        icon={Share2}
                        title="Easy Sharing"
                        description="Collaborate with team members and share notes effortlessly"
                    />
                    <FeatureCard
                        icon={Brain}
                        title="AI Powered"
                        description="Get smart suggestions and insights powered by AI"
                    />
                    <FeatureCard
                        icon={Sparkles}
                        title="Rich Formatting"
                        description="Create beautiful notes with advanced formatting options"
                    />
                </div>
            </div>
        </div>

    );
};