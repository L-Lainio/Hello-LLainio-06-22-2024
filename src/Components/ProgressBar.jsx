/* eslint-env browser */

import { useEffect, useState } from 'react';

function ProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (typeof window!== 'undefined' && typeof document!== 'undefined') {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
      }
    };

    if (typeof window!== 'undefined') {
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  return (
    <div className="progress-bar w-2.5 bg-gray-200 fixed ml-[-5px] h-full mb-6 mr-2">
      <div className="bg-red-600 transition-all ease-out duration-1000" style={{ height: `${scrollTop}%` }}></div>
    </div>
  );
}

export default ProgressBar;
