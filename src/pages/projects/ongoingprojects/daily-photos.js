import React from 'react'
import Layout from '../../../components/layout'
import 'bootstrap/dist/css/bootstrap.css';
import ContentMap from '../../../components/ContentMap'

const DailyPhotos = () => (
    
    <Layout> 
    <ContentMap sort={true} setNumber={'31'} caption={true} />

    
    </Layout>


);





export default DailyPhotos;