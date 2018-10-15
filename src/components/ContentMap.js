import React, { Component } from 'react'
import PropTypes from 'prop-types';
import gimgs from '../../gimgs'
import script_images from '../../script_images'
import { Col, Row } from 'reactstrap'
var alphasort = require('alphanum-sort');





export default class ContentMap extends Component {

    constructor(props) {
        super(props);

    }


  
  
    render() {
        // const filterSet = this.props.path ==="gimgs" ? gimgs : script_images;
        const images = gimgs.filter(img=>img.substr(0,3).includes(`${this.props.setNumber}`))
        const sorted = alphasort(images).reverse()
        
        const re = /([0-9]|[0-9][0-9])(?=_)/gm;
        console.log()

    if (this.props.sort) {
        return (
            <Col>
            {sorted.map((src, i) => {
                return ( <span>
                     { this.props.caption ? 
                        <span key={i}>
                        {`${src.match(re)[1]}/${src.match(re)[2]}/2018`}
                        </span>

                     : null }
                     <img key={i} src={require(`../../public/files/gimgs/${src}`)} /></span>
                     )
            })
            }
           
            </Col>
            
        )
      } else {
        return (
          <div>
          {images.map((src, i) => {
            return ( <img key={i} src={require(`../../public/files/gimgs/${src}`)} />)
          })}
          </div>
        )

    }
  
  }
}


