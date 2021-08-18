import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useSWR from 'swr';
import Seo from '@components/molecules/seo';
import { Link } from 'gatsby-plugin-react-intl';
// import { StaticImage } from 'gatsby-plugin-image';
// import { useLocation } from '@reach/router';
// import { Link } from '@reach/router';

import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import Footer from '@components/molecules/footer';
import BlogTitle from '@components/molecules/blog-title';
import Content from '@components/organisms/content';
import Newsletter from '@components/molecules/newsletter';
import TableOfContent from '@components/molecules/table-of-content';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { container } from '@styles/main.module.scss';
import {
  blogTemplateContainer,
  goBackContainer,
  iconWrapper,
  loadingArticle,
  contentWrapper,
} from './blog-template.module.scss';

// const titleList = [
//   'Do your homework',
//   'Communication goes a long way',
//   'Assign a person of reference. Design version for longer subtitles',
//   "Don't vanish",
//   'Positive reinforcment',
//   'Put a number on it',
//   'Pay a fair wage',
// ];

const BlogTemplate = ({ location }) => {
  const [article, setArticle] = useState([]);
  const [seo, setSeo] = useState([]);
  const [related, setRelated] = useState([]);
  const [slug, setSlug] = useState(false);

  const fetcher = () =>
    fetch(`https://staging.attotime.com/api/v2/blog/${slug}`).then((res) => res.json());
  const { data, error } = useSWR(slug ? '/blog-article' : null, fetcher);

  useEffect(() => {
    if (location.search) {
      setSlug(location.search.replaceAll('?slug=', ''));
    } else {
      setSlug(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setArticle(data.article);
      setSeo(data.seo);
      // parseHTML(data.article.body);
    }

    return () => {
      setArticle([]);
      setRelated([]);
    };
  }, [data, error]);
  return (
    <div className={`${blogTemplateContainer} ${container}`}>
      {seo && <Seo title={seo.title} description={seo.description} seoImage={seo.image} />}
      <Header />
      {data && article ? (
        <>
          <div style={{ display: 'flex', paddingRight: '10rem' }}>
            <div className={goBackContainer}>
              <Link to="/blog">
                <div className={iconWrapper}>
                  <Icon iconClass="arrow-left" fSize={1.6} />
                </div>
              </Link>
              <p>All posts</p>
            </div>
            <BlogTitle
              smallTitle="Published March 18, 2021 in Productivity   ·   2 min read"
              title={article.title}
              // author="By Nick Blackeye"
            />
          </div>
          <Divider className="style5" />
          <img src={article.cover_image} alt={article.seo_title} width={1140} height={450} />
          <Divider className="style2" />
          <div className={contentWrapper}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {data && article && <TableOfContent />}
            </div>
            {data && article && <Content content={article.body} />}
            <Divider className="style1" />
            {/* <Newsletter style="column" /> */}
          </div>
        </>
      ) : (
        <div className={loadingArticle}>
          <Loader type="ThreeDots" color="#00b9cb" height={80} width={80} timeout={3000} />
        </div>
      )}
      <Divider className="style5" />
      <Footer />
    </div>
  );
};

BlogTemplate.propTypes = {
  location: PropTypes.shape(),
};

export default BlogTemplate;
