import './contact.css';



const Contact = () => {
  return (

    <section className="contact_us">
          <div className="contact_me">
            <h1>Contact</h1>
          </div>
          <form action="">
            <input type="text"placeholder='Name' />
            <input type="text" placeholder='Email'/>
            <textarea placeholder='Message'></textarea>
            <div className='my_buttons'>
            <button className='my_buttons'>Submit</button>
            </div>
          </form>

    </section>
  )
}

export default Contact