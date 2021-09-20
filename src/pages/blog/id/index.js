import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useIntl, Link } from 'gatsby-plugin-react-intl';
import loadable from '@loadable/component';
import useSWR, { cache } from 'swr';
import Seo from '@components/molecules/seo';

// import { StaticImage } from 'gatsby-plugin-image';
// import { useLocation } from '@reach/router';
// import { Link } from '@reach/router';

import BlogCard from '@components/molecules/blog-card';

import Icon from '@components/atoms/icon';
import Divider from '@components/atoms/divider';
import Header from '@components/molecules/header';
import BlogTitle from '@components/molecules/blog-title';
import Content from '@components/organisms/content';
import TableOfContent from '@components/molecules/table-of-content';
// import Newsletter from '@components/molecules/newsletter';

// import Footer from '@components/molecules/footer';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { apiUrl } from '@helpers';
import { container } from '@styles/main.module.scss';
import {
  blogTemplateContainer,
  titleWrapper,
  goBackContainer,
  iconWrapper,
  articleNotFound,
  loadingArticle,
  shrinkLoader,
  relatedArticles,
  relatedWrapper,
  featuredImage,
  contentWrapper,
} from './blog-template.module.scss';

const Modal = loadable(() => import('@components/molecules/modal'));
const FooterComponent = loadable(() => import('@components/molecules/footer'));
const SubscribeBanner = loadable(() => import('@components/molecules/subscribe-banner'));

const BlogTemplate = ({ id }) => {
  const Intl = useIntl();

  const [hasMounted, setHasMounted] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // const { id } = useParams();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const [showDialog, setShowDialog] = useState(false);
  const openModal = () => setShowDialog(true);
  const closeModal = () => setShowDialog(false);
  const [values, setValues] = useState(null);
  const [slug, setSlug] = useState('');
  const [article, setArticle] = useState();
  const [seo, setSeo] = useState();

  const toggleDeleteInvite = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email }),
    };
    fetch(`${apiUrl}/delete-invite`, requestOptions)
      .then((res) => res.json())
      .then((dd) => {
        closeModal();
        setValues(dd);
        setTimeout(() => openModal(), 2000);
      });
  };

  const formSuccessState = (val) => {
    if (val?.action !== 'delete') {
      closeModal();
      setValues(val);
      setTimeout(() => {
        openModal();
      }, 500);
    } else {
      toggleDeleteInvite(val);
    }
  };

  const fetcher = () => fetch(`${apiUrl}/api/v2/blog/${id}`).then((res) => res.json());
  // .catch((err) => {
  //   console.log('____we are finding the error____', err);
  //   setNotFound(true);
  // });

  const { data, error } = useSWR(['/blog-article', id], fetcher);

  useEffect(() => {
    if (id) {
      setSlug(id);
    } else {
      setSlug(false);
    }
  }, []);

  useEffect(() => {
    debugger;
    console.log(data);
    if (id !== slug) {
      cache.clear();
      setSlug(id);
    }

    if (data && !data?.message) {
      setArticle(data.article);
      setSeo(data.seo);
    }

    if (data && data?.message) {
      setNotFound(true);
    }

    return () => {
      setArticle();
    };
  }, [data, error, id]);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={`${blogTemplateContainer} ${container}`}>
      <Modal
        close={closeModal}
        showDialog={showDialog}
        hasValues={values}
        onDelete={toggleDeleteInvite}
        setFormValues={(formValues) => formSuccessState(formValues)}
      />
      {seo && <Seo title={seo.title} description={seo.description} seoImage={seo.image} />}
      <Header />
      {notFound && (
        <div className={articleNotFound}>
          <h2>Article not found</h2>
          <p>
            The article you are trying to reach does not exist,
            <br /> or has been deleted.
          </p>
          <div className={goBackContainer}>
            <Link to="/blog">
              <div className={iconWrapper}>
                <Icon iconClass="arrow-left" fSize={1.6} />
              </div>
              <p>Go back to blog for more articles</p>
            </Link>
          </div>
        </div>
      )}
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
              smallTitle={`Published ${article.date} ${
                article.tags && ` in ${article.tags[0].name}`
              }`}
              // smallTitle="Published March 18, 2021 in Productivity   ·   2 min read"
              title={article.title}
              // author="By Nick Blackeye"
            />
          </div>
          <Divider className="style5" />
          <div className={featuredImage}>
            <img src={article.cover_image} alt={article.seo_title} width={1140} height={450} />
          </div>
          <div className={contentWrapper}>
            {data && article && (
              <TableOfContent
                title={article.title}
                description={seo.description}
                slug={id}
                seo={seo}
                toggleModal={() => openModal()}
              />
            )}
            {data && article && (
              <Content
                title={article.title}
                description={seo.description}
                slug={id}
                content={article.body}
              />
            )}
            {/* <Newsletter style="column" /> */}
          </div>
          <div className={relatedArticles}>
            <h3>Related Articles</h3>
            <div className={relatedWrapper}>
              {data &&
                data.article &&
                data.article?.related_articles.map((item, idx) => (
                  <>
                    <BlogCard
                      title={item.title}
                      description={item.description}
                      key={idx}
                      date={item.date}
                      slug={item.slug}
                      smallTitle={item.tag}
                      image={item.cover_image}
                    />
                  </>
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className={`${loadingArticle} ${notFound && shrinkLoader}`}>
          <Loader type="ThreeDots" color="#00b9cb" height={80} width={80} timeout={250} />
        </div>
      )}

      <Divider className="style5" />
      <SubscribeBanner
        title={`${Intl.formatMessage({
          id: 'pages.productTimeTracking.subscribeBannerTitle',
        })} ${Intl.locale === 'en' && 'Start growing with Atto now.'}`}
        placeholder={Intl.formatMessage({ id: 'pages.miscellaneous.typeYourEmail' })}
        checkItemOne={Intl.formatMessage({ id: 'pages.miscellaneous.noCreditCard' })}
        checkItemTwo={Intl.formatMessage({ id: 'pages.miscellaneous.14DaysTrial' })}
        checkItemThree={Intl.formatMessage({ id: 'pages.miscellaneous.cancelAnytime' })}
      />
      <FooterComponent />
    </div>
  );
};

BlogTemplate.propTypes = {
  id: PropTypes.string,
};

export default BlogTemplate;
