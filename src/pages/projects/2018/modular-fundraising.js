import React from 'react'
import Layout from '../../../components/layout'
import Link  from '../../../components/Link'
import { Container, Row, Col } from 'reactstrap'


const ModularTemplates = () => (

<Layout>
<div id='img-container'>
<div id='textspace' class='placement-top'>
<p>A series of modular InDesign Templates for use by San Francisco State University for its print collateral. Designed to represent the various school of San Francisco State University with color coded pamphlets and printed goods, these templates work on a modular grid, allowing for variable amounts of text and photography as needed. Designed so any employee of the school, no matter their design background, can create visually appealing informational guides. </p></div>
<div id='thumbnails' class='thumbnails-above'><a href='#' style='' onclick="show(242, 0); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_52_242.jpg' /></a> 
<a href='#' style='' onclick="show(241, 1); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_52_241.jpg' /></a> 
<a href='#' style='' onclick="show(240, 2); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_52_240.jpg' /></a> 
<a href='#' style='' onclick="show(239, 3); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_52_239.jpg' /></a> 
<a href='#' style='' onclick="show(237, 4); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_52_237.jpg' /></a> 
</div>

<div id='slideshow-wrapper'>
<div id='slideshow' style='position: relative;'>
<div id="slide1000" class="picture" style="z-index: 1000; position: absolute;"><a href="#" onclick="next(); return false;" alt=""><img src="https://dominicdecarlo.com:443/files/dimgs/rsz_h575_52_242.jpg" width="860" height="575" /></a><div class='captioning'>
The grids used, employing a 12pt baseline grid, I created a 3x6 column guide with .125 inch gutters to facilitate the creation of a multitude of different print design. </div>
</div></div></div>
</div>

</Layout>

)
export default ModularTemplates