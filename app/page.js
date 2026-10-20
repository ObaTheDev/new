import NewspaperNav from '../components/NewspaperNav';
import NewspaperMasthead from '../components/NewspaperMasthead';
import NewspaperLeadStory from '../components/NewspaperLeadStory';
import NewspaperDispatches from '../components/NewspaperDispatches';
import NewspaperCitadel from '../components/NewspaperCitadel';
import NewspaperGallery from '../components/NewspaperGallery';
import NewspaperColumns from '../components/NewspaperColumns';
import NewspaperWaitlist from '../components/NewspaperWaitlist';
import NewspaperFooter from '../components/NewspaperFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2efe9] text-[#111111] flex flex-col items-center">
      {/* Broadside newspaper sheet container */}
      <div className="w-full max-w-[1440px] bg-[#ffffff] shadow-2xl border-x-0 sm:border-x-2 border-[#111111] min-h-screen flex flex-col">
        {/* 1. Header Navigation Bar */}
        <NewspaperNav />

        {/* 2. Large Newspaper Masthead: THE LEAD NEWSPAPER */}
        <NewspaperMasthead />

        {/* 3. Hero Feature: Signature Red Block + Vertical News Ticker */}
        <NewspaperLeadStory />

        {/* 4. Dispatches & Essays */}
        <NewspaperDispatches />

        {/* 5. Citadel Plenary & Bowen Senate Citadel Architecture Monument */}
        <NewspaperCitadel />

        {/* 6. Authentic Newspaper Pictorial Gallery (44 Plates with Lightbox & Category Filters) */}
        <NewspaperGallery />

        {/* 7. Columns & Chronicles */}
        <NewspaperColumns />

        {/* 8. Official Telegraph Enrolment Coupon linking to Tally */}
        <NewspaperWaitlist />

        {/* 9. Colophon & Newspaper Footer */}
        <NewspaperFooter />
      </div>
    </div>
  );
}