import React from 'react';
import get from 'lodash/get';
import size from 'lodash/size';
import orderBy from 'lodash/orderBy';
import map from 'lodash/map';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import Header from '../components/Header';
import { getPages, Link, withPrefix } from '../utils';
import Footer from '../components/Footer';

const NotebookCard = ({ post }) =>
  <Link className="notebook-thumbnail" href={withPrefix(get(post, '__metadata.urlPath', null))}>
    <header className="notebook-header">
      <h2 className="notebook-title"><Link href={withPrefix(get(post, '__metadata.urlPath', null))} rel="bookmark">{get(post, 'frontmatter.title', null)}</Link></h2>
      <div className="notebook-meta">
        Created on <time className="published"
          dateTime={moment(get(post, 'frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')}</time>
      </div>
      <div className="notebook-content">
        <p>{get(post, 'frontmatter.excerpt', null)}</p>
      </div>
    </header>
   </Link>

const Notebook = (props) => {
  let posts = getPages(props.pages, '/notebooks');
  let posts_count = size(posts);
  return (
    <Layout {...props}>
      <Header {...props} site={props} page={props.page} image={get(props, 'page.frontmatter.img_path', null)} />
      <div id="content" className="site-content">
        <main id="main" className="site-main inner">
          <div className="notebook-feed">
          {(posts_count > 0) && ((() => {
              let posts_sorted = orderBy(posts, 'frontmatter.date', 'desc');
              return (
                map(posts_sorted, (post, post_idx) => (
                  <article key={post_idx} className="notebook">
                    {get(post, 'frontmatter.thumb_img_path', null) && (
                      <NotebookCard post={post} />
                    )}
                  </article>
                ))
              );
            })())}
          </div>
        </main>
        <Footer {...props} site={props} page={props.page} image={get(props, 'page.frontmatter.img_path', null)} />
      </div>
    </Layout>
  );
}

export default Notebook;