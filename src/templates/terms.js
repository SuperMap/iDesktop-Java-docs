/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import MarkdownPage from 'components/MarkdownPage';
import React from 'react';
import {graphql} from 'gatsby';
import Layout from 'components/Layout';
import {createLinkTutorial} from 'utils/createLink';
import {sectionListTerms_en, sectionListTerms_zh} from 'utils/sectionList';

const Terms = ({data, location}) => {
  let sectionListTutorialTmp = sectionListTerms_en;
  if (data.markdownRemark.fields.langKey === 'zh') {
    sectionListTutorialTmp = sectionListTerms_zh;
  }
  console.log('tutorial directory');
  console.log(sectionListTutorialTmp);
  return (
    <Layout location={location}>
      <MarkdownPage
        enableScrollSync
        createLink={createLinkTutorial}
        location={location}
        markdownRemark={data.markdownRemark}
        sectionList={sectionListTutorialTmp}
        titlePostfix=" &ndash; React"
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query TemplateTermsMarkdown($slug: String!) {
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

export default Terms;
