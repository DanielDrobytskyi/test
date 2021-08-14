import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const Hero = () => {

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">


          <h1>Мы делаем сайты</h1>
          <h1>Вы зарабатываете</h1>
          <div className="underline"></div>
          <h4>350+ проектов в работе</h4>
          <Link to="/contact" className="btn">
            Порфтолио
          </Link>

        </article>

      </div>
    </header>
  )
}
//<img src="../assets/hero-img.png" className="hero-img" />

export default Hero
