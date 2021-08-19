import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useSWR from 'swr';
import Seo from '@components/molecules/seo';
import { Link } from 'gatsby-plugin-react-intl';
// import { StaticImage } from 'gatsby-plugin-image';
// import { useLocation } from '@reach/router';
// import { Link } from '@reach/router';
import BlogCard from '@components/molecules/blog-card';

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
  titleWrapper,
  goBackContainer,
  iconWrapper,
  loadingArticle,
  relatedArticles,
  relatedWrapper,
  contentWrapper,
} from './blog-template.module.scss';

const BlogTemplate = ({ location }) => {
  const [article, setArticle] = useState([]);
  const [seo, setSeo] = useState([]);
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

  const handleClick = () => {};

  useEffect(() => {
    if (data) {
      setArticle(data.article);
      setSeo(data.seo);
    }

    // ReactDOM.findDOMNode(this.domNode).addEventListener('click', handleClick);
    return () => {
      // document.getElementsByClassName('js-btn-tag').removeEventListener('click', handleClick);
      setArticle([]);
    };
  }, [data, error]);
  return (
    <div className={`${blogTemplateContainer} ${container}`}>
      {seo && <Seo title={seo.title} description={seo.description} seoImage={seo.image} />}
      <Header />
      {data && article ? (
        <>
          <div className={titleWrapper}>
            <div className={goBackContainer}>
              <Link to="/blog">
                <div className={iconWrapper}>
                  <Icon iconClass="arrow-left" fSize={1.6} />
                </div>
              </Link>
              <p>All posts</p>
            </div>
            <BlogTitle
              // smallTitle="Published March 18, 2021 in Productivity   ·   2 min read"
              title={article.title}
              // author="By Nick Blackeye"
            />
          </div>
          <Divider className="style5" />
          <img src={article.cover_image} alt={article.seo_title} width={1140} height={450} />
          <Divider className="style2" />
          <div className={contentWrapper}>
            {data && article && <TableOfContent />}
            {data && article && <Content content={article.body} />}
            <Divider className="style1" />
            {/* <Newsletter style="column" /> */}
          </div>
          <div className={relatedArticles}>
            <h3>Related Articles</h3>
            <div className={relatedWrapper}>
              {data &&
                data.article.related_articles.map((item, idx) => (
                  <BlogCard
                    title={item.title}
                    description={item.description}
                    key={idx}
                    date={item.date}
                    slug={slug}
                    smallTitle={item.tag}
                    image={item.cover_image}
                  />
                ))}
            </div>
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
