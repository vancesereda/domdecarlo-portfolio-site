import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Container, Row, Col } from 'reactstrap'
import CustomNav from './CustomNav'
import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.css';
import Typography from 'typography'
import { TypographyStyle, GoogleFont } from 'react-typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue','Verdana', 'Helvetica', 'Arial','sans-serif'],
  // See below for the full list of options.
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <TypographyStyle typography = {typography} />
        <Container>
          <Row>
          <CustomNav/>
          
          <span className="sm-scrn">
            <div style={{'z-index': '-1', 'position':'fixed !important', 'overflow-y':'scroll', 'width': '100vw'}}>
              {children}
            </div>
          </span>
          
          <span className="lg-scrn">
            <div className="fix-scroll">
                {children}
                
            </div>
          </span>
          </Row>
        </Container>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
