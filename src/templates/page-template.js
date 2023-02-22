import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"


const PageTemplate = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
  </Layout>
 )

 export default PageTemplate

 export const Head = ({ data }) => <Seo title= { data.wpPage.seo.title }  description={ data.wpPage.seo.metaDesc } robots= {"index, follow"} />

 export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      seo {
        title
        metaDesc
      }
    }
  }
 `



  
