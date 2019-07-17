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
import {sectionListGuides_en, sectionListGuides_zh} from 'utils/sectionList';

const Guides = ({data, location}) => {
  let sectionListDocs = sectionListGuides_en;
  if (data.markdownRemark.fields.langKey === 'zh') {
    sectionListDocs = sectionListGuides_zh;
  }
  console.log('guides data');
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

Guides.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query TemplateGuidesMarkdown($slug: String!) {
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

export default Guides;
