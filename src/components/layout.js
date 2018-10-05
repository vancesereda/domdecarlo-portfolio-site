import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {Container, Row, Col } from 'reactstrap'
import CustomNav from './CustomNav'
import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.css';


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
        <Container>
          <Row>
          <CustomNav />
          <Col>
          <span className="sm-scrn">
            <div style={{'z-index': '-1', 'position':'fixed', 'overflow-y':'scroll', 'height':'100vh', 'width': '95vw'}}>
              {children}
            </div>
          </span>
          <span className="lg-scrn">
            {children}
          </span>
          </Col>
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
