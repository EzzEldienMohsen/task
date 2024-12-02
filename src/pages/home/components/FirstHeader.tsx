import React from 'react';
import phoneLogo from '../../../assets/svg/home/header/phone.svg';
import mailLogo from '../../../assets/svg/home/header/mail.svg';
import youtubeLogo from '../../../assets/svg/home/header/youtube.svg';
import instagramLogo from '../../../assets/svg/home/header/instagram.svg';
import linkedinLogo from '../../../assets/svg/home/header/linkedin.svg';
import xLogo from '../../../assets/svg/home/header/x.svg';
import facebookLogo from '../../../assets/svg/home/header/facebook.svg';
import flagLogo from '../../../assets/svg/home/header/flag.svg';
import arrowLogo from '../../../assets/svg/home/header/arrow.svg';

const FirstHeader: React.FC = () => {
  return (
    <div className="bg-darkBlue px-[102.5px] py-5 flex justify-between items-center w-full">
      {/* INFO Side */}
      <div className="flex justify-between items-center gap-x-3">
        {/* Phone */}
        <div className="flex justify-between items-center gap-x-2">
          <img src={phoneLogo} alt="phone" />
          <p className="font-almarai text-beige text-sm">+20 152 385 1478</p>
        </div>
        {/* Separator */}
        <div className="w-5 h-0 border border-Border700 -rotate-90 " />
        {/* Mail */}
        <div className="flex justify-between items-center gap-x-2">
          <img src={mailLogo} alt="mail" />
          <p className="font-almarai text-beige text-sm">smartedu@gmail.com</p>
        </div>
      </div>
      {/* SocialSide */}
      <div className="flex justify-between items-center gap-x-3">
        {/* Logos */}
        <div className="flex justify-between items-center gap-x-[14px]">
          <img src={youtubeLogo} alt="youtube" />
          <img src={instagramLogo} alt="instagram" />
          <img src={linkedinLogo} alt="linkedin" />
          <img src={xLogo} alt="x" />
          <img src={facebookLogo} alt="facebook" />
        </div>
        {/* Separator */}
        <div className="w-5 h-0 border border-Border700 -rotate-90 " />
        {/* LanguageButton */}
        <div className="flex justify-between items-center gap-x-2">
          {/* saudi flag */}
          <div className="aspect-square rounded-full flex justify-center items-center w-[25px]">
            <img src={flagLogo} alt="flag" />
          </div>
          <img src={arrowLogo} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
