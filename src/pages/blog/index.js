import React, { useState } from 'react';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import { useIntl } from 'gatsby-plugin-react-intl';
// import { FooterLinks } from '@locale/en.js';
import FooterComponent from '@components/molecules/footer';
import Divider from '@components/atoms/divider';
import { container } from '@styles/main.module.scss';
import Button from '@components/atoms/button';
import MainTitle from '@components/molecules/main-title-card';
import BlogList from '@components/organisms/blog-list';
import mainHeader from '@images/workwise_blog.png';
import Newsletter from '@components/molecules/newsletter';
import { StaticImage } from 'gatsby-plugin-image';

import { buttonList } from './blog.module.scss';

import browser1 from '../../images/browser1.jpeg';
import browser2 from '../../images/browser2.jpeg';
import browser3 from '../../images/browser3.jpeg';
import browser4 from '../../images/browser4.jpeg';
import Title from '../../components/molecules/title';

const list = ['All', 'Weekly Digest', 'Insights', 'Productivity', 'Timesheets', 'Team Management'];
const blogList = [
  {
    smallTitle: 'March 18, 2021   ·   Productivity',
    title: 'Employee Scheduling  ·  5 tips to make scheduling easier',
    description:
      'Employee scheduling can cause inefficiencies if not maintained properly. We have noted a few tips that will help you create the ideal employee …',
    image: browser1,
  },
  {
    smallTitle: 'March 17, 2021   ·   Insights',
    title: 'The Art of Time Mastery. How to Manage Time Efficiently',
    description:
      'The art of time mastery is designed to help business owners identify flaws in their time management strategies. Learn what the art of time mastery is and…',
    image: browser2,
  },
  {
    title: '30-60-90 Day Plan  ·  An updated step-by-step guide',
    smallTitle: 'March 4, 2021   ·   Timesheets',
    description:
      'The 90-day work plan is a forecast that is used to set goals and strategize the first few months of a new project. Take a look at our updated step-by-step guide …',
    image: browser3,
  },
  {
    title: 'When should I offer PTO to employees?',
    smallTitle: 'February 10, 2021   ·   Team Management',
    description:
      'If you’re an employer, you know how important paid time off is to your employees. You have single-handedly witnessed the happiness in …',
    image: browser4,
  },
];

const Blog = () => {
  const [activeItem, setActiveItem] = useState(null);
  const Intl = useIntl();

  return (
    <div className={container}>
      <Seo title="Attotime - Landing Page" />
      <HeaderComponent />
      <MainTitle image={mainHeader} subtitle="Thoughts and ideas on the future of work" />
      <div className={buttonList}>
        {list.map((title, idx) => (
          <Button
            btnText={title}
            key={idx}
            btnStyle={activeItem === title ? 'activeBlogItem' : 'noStyle'}
            onBtnClick={() => setActiveItem(title)}
          />
        ))}
      </div>
      <StaticImage
        quality={96}
        width={1140}
        height={450}
        src="../../images/browser5.jpeg"
        placeholder="none"
      />
      <Title
        maxWidth={780}
        smallTitle="Published March 27, 2021 in Productivity   ·   2 min read   ·   by Nick Blackeye"
        title="7 tips that will help you manage contracted jobs successfully"
      />
      <Divider className="style4" />
      <BlogList list={blogList} />
      <Divider />
      <Newsletter />
      <Divider className="style2" />
      <FooterComponent />
    </div>
  );
};

export default Blog;
