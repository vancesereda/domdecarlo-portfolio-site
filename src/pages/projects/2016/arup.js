import React from 'react'
import Layout from '../../../components/layout'
import Link  from '../../../components/Link'
import { Container, Row, Col } from 'reactstrap'


const BookletDesignARUP = () => (

<Layout>
<div id='img-container'>
<div id='textspace' class='placement-top'>
<p><strong>ARUP</strong><br />
Assigned a project to do in depth research on a local architecture firm, I chose to research and develop ideas on ARUP and the concept of “Total Design”. Provided with my presentation on the creator, Ove Arup, and the business operations of today’s ARUP, this booklet was modeled to be an internal quarterly review booklet, describing the operations and innovations that ARUP had completed in 2016.</p></div>
<div id='thumbnails' class='thumbnails-above'><a href='#' style='' onclick="show(108, 0); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_27_108.jpg' /></a> 
<a href='#' style='' onclick="show(105, 1); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_27_105.jpg' /></a> 
<a href='#' style='' onclick="show(106, 2); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_27_106.jpg' /></a> 
<a href='#' style='' onclick="show(104, 3); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_27_104.jpg' /></a> 
<a href='#' style='' onclick="show(107, 4); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_27_107.jpg' /></a> 
</div>

<div id='slideshow-wrapper'>
<div id='slideshow' style='position: relative;'>
<div id="slide1000" class="picture" style="z-index: 1000; position: absolute;"><a href="#" onclick="next(); return false;" alt=""><img src="https://dominicdecarlo.com:443/files/dimgs/rsz_h575_27_108.jpg" width="889" height="575" /></a></div></div></div>
</div>


</Layout>

)
export default BookletDesignARUP