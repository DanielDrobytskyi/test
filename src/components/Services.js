import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="services bg-dark">
      <Title className="ser-text" title="Почему мы?" />
      <h4 className="ser-text">Фокусируемся на увеличении продаж</h4>
      <h4 className="ser-text">12 лет разрабатываем высококонверсионные
        landing page и многостраничные сайты</h4>
      <div className="section-center services-center">
        {services.map(service => {
          const { id, title, prices, dates } = service

          return (
            <article key={id} className="service">
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{prices}</p>
              <p>{dates}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
