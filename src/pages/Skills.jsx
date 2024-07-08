import './createblog.css'
import image from '../images/my-coddy.jpg'


const Skills = () => {
  return (
    <section className="iknow_work">
      <div className="what_iknow">
        <h1>I know</h1>
      </div>
      <div className="about-me">
        <p>My name is Xadicha. My surname is Shokirova. I am 14 years old. On 07/24/2023, 
          I took my first step in the IT field. So far I have studied Frontend at Coddy Camp IT
           Academy. And now I am a graduate of the course. Our Coddy Camp IT Academy "Frontend"
            course is taught for 11 months. Personally, I learned React, Javascript, Material UI, 
            HTML, Css during my studies.</p>
            <img src={image} alt="" />

            <p></p>
      </div>



    </section>

  )
}

export default Skills
