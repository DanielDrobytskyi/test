import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Кейсы",
    url: "/",
  },
  {
    id: 2,
    text: "Услуги",
    url: "/",
  },
  {
    id: 3,
    text: "Контакты",
    url: "/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
