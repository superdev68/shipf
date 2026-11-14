import './home.less';
import BlogSection from '@/components/blog-section';
import FAQSection from '@/components/faq-section';
import ServiceSection from '@/components/service-section';
import PartnerSection from '@/components/partner-section';
import StatisticSection from '@/components/statistic-section';
import OperationSection from '@/components/operation-section';
import SlidersSection from '@/components/sliders-section';

const HomePage = () => {
  return (
    <div className='home'>
      <SlidersSection />

      <OperationSection />

      <StatisticSection />

      <ServiceSection />

      <BlogSection />

      <FAQSection />

      <PartnerSection />
    </div>
  );
};

export default HomePage;
