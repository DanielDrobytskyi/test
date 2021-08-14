import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import OurWorks from '../components/OurWorks'
import Contacts from '../components/Contacts'


export default () => {


  return (
    <Layout>
      <Hero />
      <Services />
      <OurWorks />
      <Contacts />
    </Layout>
  )
}
