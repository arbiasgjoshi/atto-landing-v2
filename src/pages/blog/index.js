import React, { useEffect, useState } from 'react';

import HeaderComponent from '@components/molecules/header';
import Seo from '@components/molecules/seo';
import useSWR from 'swr';
import { Link } from '@reach/router';

// import { FooterLinks } from '@locale/en.js';
import { formatDate, paginationList } from '@helpers';
import FooterComponent from '@components/molecules/footer';
import Divider from '@components/atoms/divider';
import { container } from '@styles/main.module.scss';
import MainTitle from '@components/molecules/main-title-card';
import mainHeader from '@images/workwise_blog.png';
import Button from '@components/atoms/button';
import BlogList from '@components/organisms/blog-list';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import Newsletter from '@components/molecules/newsletter';
import {
  blogStyle,
  loadingContent,
  loaderWrap,
  buttonList,
  featurdArticle,
  paginationWrapper,
  pagination,
  disabledPagination,
  pageLink,
  dotStyle,
  selected,
} from './blog.module.scss';
import Title from '@components/molecules/title';

const Blog = () => {
  const [tags, setTags] = useState([{ id: 0, name: 'All' }]);
  const [seoTitle, setSeotitle] = useState(
    'workwise by Atto | Thoughts and ideas on the future of work'
  );
  const [activeItem, setActiveItem] = useState('All');
  const [articles, setArticles] = useState([]);
  const [featured, setFeatured] = useState([]);
  // Fetch Data
  const [pageData, setPagData] = useState(null);
  const [pages, setPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const [loader, setLoader] = useState(true);

  const fetcher = () =>
    fetch(
      `https://staging.attotime.com/api/v2/blog` +
        `${activeItem !== 'All' ? '?tag=' + activeItem : ''}` +
        `${pageIndex && `${activeItem !== 'All' ? `&` : '?'}page=` + pageIndex}`
    ).then((res) => {
      return res.json();
    });
  const { data, error } = useSWR(['/api/v2/blog', pageIndex, activeItem], fetcher);

  const handlePrevious = () => {
    if (pageData.prev_page_url) {
      setPageIndex(pageIndex - 1);
    }
  };
  const handleNext = () => {
    if (pageData.next_page_url) {
      setPageIndex(pageIndex + 1);
    }
  };

  const changeTag = (val) => {
    // if (articles && featured) {
    setLoader(true);
    // }
    setActiveItem(val);
    setPageIndex(1);
  };

  const changePage = (val) => {
    setLoader(true);
    setPageIndex(val);
  };

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      const otherTags = [...tags, ...data.tags];

      if (tags.length === 1) {
        setTags(otherTags);
      }

      // set fetch data
      setPageIndex(data.paginator.current_page);
      setPagData(data.paginator);

      // construct pagination
      const paginationItems = paginationList(data.paginator.current_page, data.paginator.last_page);
      if (data.paginator.total_count > 0) {
        setPages(paginationItems);
      } else {
        setPages([]);
      }

      // set article data
      setFeatured(data.cover_article);
      setArticles(Object.values(data.articles));
      setSeotitle(data.seo.title);

      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  }, [data, error]);

  return (
    <div className={`${container} ${blogStyle} ${loader && loadingContent}`}>
      <Seo title={seoTitle} />
      <HeaderComponent />
      <MainTitle image={mainHeader} subtitle="Thoughts and ideas on the future of work" />
      {loader ? (
        <div className={loaderWrap}>
          <Loader type="ThreeDots" color="#00b9cb" height={80} width={80} timeout={2000} />
        </div>
      ) : null}
      <div className={buttonList}>
        {tags &&
          tags.map((tag) => (
            <Button
              btnText={tag.name}
              key={tag.id}
              btnStyle={activeItem === tag.name ? 'activeBlogItem' : 'noStyle'}
              onBtnClick={() => changeTag(tag.name)}
            />
          ))}
      </div>
      {featured && (
        <Link to={`/blog-template?slug=${featured?.slug}`} className={featurdArticle}>
          <img src={featured?.cover_image} width={1140} height={450} alt={featured?.title} />
          <Title
            maxWidth={780}
            smallTitle={`Published at ${featured?.date}`}
            title={featured?.title}
          />
        </Link>
      )}
      <Divider className="style4" />
      {articles && <BlogList list={articles} />}
      <Divider />

      {pageData && (
        <nav className={`${paginationWrapper} ${loader ? disabledPagination : null}`}>
          <Button
            btnText="Previous"
            btnStyle="teal"
            disabled={pageIndex === pageData.current_page}
            onBtnClick={handlePrevious}
          />
          <ul className={pagination}>
            {pages.map((page) => (
              <>
                <li key={page} className="page-item">
                  {page !== '...' ? (
                    <a
                      onClick={() => (page !== '...' ? changePage(page) : null)}
                      className={`${pageLink} ${page === '...' && dotStyle} ${
                        pageIndex === page && selected
                      }`}
                    >
                      {page}
                    </a>
                  ) : (
                    <span>{page}</span>
                  )}
                </li>
              </>
            ))}
          </ul>
          <Button
            btnText="Next"
            btnStyle="teal"
            disabled={pageIndex === pageData.last_page}
            onBtnClick={handleNext}
          />
        </nav>
      )}

      {/* <Newsletter /> */}
      <Divider className="style2" />
      <FooterComponent />
    </div>
  );
};

export default Blog;
