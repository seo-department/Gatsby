import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const PageTemplate = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
  </Layout>
 )

 export default PageTemplate

 export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
    }
  }
 `



  
