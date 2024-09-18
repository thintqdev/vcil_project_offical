import Definition from "@/components/Front/Definition";
import HistoryAndAchievement from "@/components/Front/HistoryAndAchievement";
import HomeBlog from "@/components/Front/HomeBlog";
import HomeNetwork from "@/components/Front/HomeNetwork";
import HomeUpcomingEvent from "@/components/Front/HomeUpcomingEvent";
import WhatWeDo from "@/components/Front/WhatWeDo";
import FrontDefaultLayout from "@/components/Layouts/FrontDefaultLayout";

export default function HomePage() {
  return (
    <FrontDefaultLayout>
      <div className="container mx-auto px-4 py-6">
        <HomeUpcomingEvent />
        <Definition />
        <WhatWeDo />
        <HistoryAndAchievement />
        <HomeBlog />
        <HomeNetwork />
      </div>
    </FrontDefaultLayout>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontDefaultLayout>{page}</FrontDefaultLayout>;
};
