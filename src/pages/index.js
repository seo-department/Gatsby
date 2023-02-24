import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import Modal from '../components/modal'

const IndexPage = ({data}) => (

  <Layout>
    <Modal/>
  </Layout>

)
export const Head = ({ data }) => <Seo title= { data.wpPage.seo.title }  description={ data.wpPage.seo.metaDesc } robots= {"index, follow"}/>

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
