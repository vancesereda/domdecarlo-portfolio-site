import React from 'react'
import Layout from '../../../components/layout'
import Link  from '../../../components/Link'
import { Container, Row, Col } from 'reactstrap'


const Freelance = () => (

<Layout>
<div id='img-container'>
<div id='textspace' class='placement-top'>
<p><strong>Freelance</strong></p>

<p>A selection of my freelance work done in my twenties. This work ranges from poster and illustration design to innovative and client tailored logo design.</p>

<p></p></div>
<div id='thumbnails' class='thumbnails-above'><a href='#' style='' onclick="show(135, 0); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_135.jpg' /></a> 
<a href='#' style='' onclick="show(133, 1); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_133.jpg' /></a> 
<a href='#' style='' onclick="show(131, 2); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_131.jpg' /></a> 
<a href='#' style='' onclick="show(132, 3); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_132.jpg' /></a> 
<a href='#' style='' onclick="show(130, 4); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_130.jpg' /></a> 
<a href='#' style='' onclick="show(134, 5); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_134.jpg' /></a> 
<a href='#' style='' onclick="show(136, 6); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_136.jpg' /></a> 
<a href='#' style='' onclick="show(138, 7); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_138.jpg' /></a> 
<a href='#' style='' onclick="show(137, 8); return false;"><img src='https://dominicdecarlo.com:443/files/dimgs/rsz_h75_30_137.jpg' /></a> 
</div>

<div id='slideshow-wrapper'>
<div id='slideshow' style='position: relative;'>
<div id="slide1000" class="picture" style="z-index: 1000; position: absolute;"><a href="#" onclick="next(); return false;" alt=""><img src="https://dominicdecarlo.com:443/files/dimgs/rsz_h575_30_135.jpg" width="889" height="575" /></a></div></div></div>
</div>

</Layout>

)
export default Freelance