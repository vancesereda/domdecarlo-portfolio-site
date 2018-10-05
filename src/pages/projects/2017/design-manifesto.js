import React from 'react'
import Layout from '../../../components/layout'
import Link  from '../../../components/Link'
import { Container, Row, Col } from 'reactstrap'


const DesignManifesto = () => (

<Layout>
<div id='img-container'>
<div id='textspace' class='placement-top'>
<p><strong>Manifesto Poster</strong></p>

<p>Using a supplied grid and text, I designed a layout to communicate the mood and message of 5 extremely different design manifestos. Using elements of design and a simplified style inspired by Keith Harings illustrations, I was able to create a poster which encapsulated not just the message of one of the design solutions prescribed, but the idea that all of these manifestos operated as a single world view, representing design as a solution to problems. <br />
</p></div>
<div id='thumbnails' class='thumbnails-above'><a href='#' style='' onclick="show(114, 0); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_26_114.jpg' /></a> 
<a href='#' style='' onclick="show(109, 1); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_26_109.jpg' /></a> 
<a href='#' style='' onclick="show(112, 2); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_26_112.jpg' /></a> 
<a href='#' style='' onclick="show(110, 3); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_26_110.jpg' /></a> 
<a href='#' style='' onclick="show(115, 4); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_26_115.jpg' /></a> 
<a href='#' style='' onclick="show(113, 5); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_26_113.jpg' /></a> 
<a href='#' style='' onclick="show(111, 6); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_26_111.jpg' /></a> 
</div>

<div id='slideshow-wrapper'>
<div id='slideshow' style='position: relative;'>
<div id="slide1000" class="picture" style="z-index: 1000; position: absolute;"><a href="#" onclick="next(); return false;" alt=""><img src="https://dominicdecarlo.com:443/files/dimgs/rsz_h575_26_114.jpg" width="889" height="575" /></a></div></div></div>
</div>


</Layout>

)
export default DesignManifesto