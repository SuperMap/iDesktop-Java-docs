/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import MarkdownPage from 'components/MarkdownPage';
import PropTypes from 'prop-types';
import React from 'react';
import {graphql} from 'gatsby';
import Layout from 'components/Layout';
import {createLinkDocs} from 'utils/createLink';
import {sectionListDocs_en, sectionListDocs_zh} from 'utils/sectionList';

const Docs = ({data, location}) => {
  let sectionListDocs = sectionListDocs_en;
  if (data.markdownRemark.fields.langKey === 'zh') {
    sectionListDocs = sectionListDocs_zh;
  }
  console.log('docs data');
  console.log(data.markdownRemark);
  return (
    <Layout location={location}>
      <MarkdownPage
        createLink={createLinkDocs}
        location={location}
        markdownRemark={data.markdownRemark}
        sectionList={sectionListDocs}
        titlePostfix=" &ndash; React"
      />
    </Layout>
  );
};

Docs.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        next
        prev
      }
      fields {
        path
        slug
        langKey
      }
    }
  }
`;

export default Docs;
