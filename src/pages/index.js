import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'


const IndexPage = ({ data }) => (
  <Layout>
    <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
  </Layout>

)
export const Head = ({ data }) => <Seo title= { data.wpPage.seo.title }  description={ data.wpPage.seo.metaDesc }/>

export default IndexPage

export const query = graphql`
    {
        wpPage(uri: { eq: "/" }) {
            title
            content
            seo {
              title
              metaDesc
            }
          }    
        }      
 `
