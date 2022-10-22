import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/project-1.png"
import IMG2 from "../../assets/project-2.png"
import IMG3 from "../../assets/project-3.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MEGASTAR APT LAPTOP INVENTORY SYSTEM",
    github: "https://gitlab.com/dev4end/spb-megastar-inventory-modules-v2",
    demo: "https://megastar.tk",
  },
  {
    id: 2,
    image: IMG2,
    title: "2HANDSHOP DASHBOARD INVENTORY SYSTEM",
    github: "https://github.com/phucthinh2609/Csmd4_2Hand_Dashboard_System",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "FLASHCARD APP",
    github: "https://github.com/phucthinh2609/phucthinh2609.github.io/tree/dev1/flash-card",
    demo: "https://phucthinh2609.github.io/flash-card/",
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          if (id != 2) {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
                </div>
              </article>
            )
          }

          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
          )
        })}
      </div>

    </section>
  )

}

export default Portfolio