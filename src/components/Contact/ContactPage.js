import React from 'react'
import Contact from './Contact';
import Layout from '../Layout'

function ContactPage() {
  return (
    <div>
    <Layout>
    <h1 className='text-5xl font-bold text-center mt-5 mb-[-60px]'>Contact Us!</h1>
        <Contact />
    </Layout>        
    </div>
  )
}
export default ContactPage;