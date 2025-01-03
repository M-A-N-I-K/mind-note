import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";
import { FeaturesGrid } from "./_components/features-grid";
import { CTA } from "./_components/CTA";

const MarketingPage = () => {
	return (
		<div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors">
			<Heroes />
			<FeaturesGrid />
			<CTA />
			<Footer />
		</div>
	);
};

export default MarketingPage;
