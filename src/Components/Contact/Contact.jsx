import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='Contact'>
      <div className="container my-5 py-5">

        <b className='h1 d-block text-center mb-5'>CONTACT US</b>
        <div className="row p-5">
            <div className="col-xl-8 col-md-12">
              <form action="">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='email' />
                <input type="text" placeholder='Subject'/>
                <textarea placeholder='Message'></textarea>
                <button className='btn btn-warning'>Send Message</button>
              </form>
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="right">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.57628128333!2d31.497602624812718!3d30.02032077493584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822591a17706b%3A0xc9f886adcffbb941!2z2KjZiNmK2YbYqiDZqdmg!5e0!3m2!1sar!2seg!4v1732404877382!5m2!1sar!2seg" ></iframe>
              </div>
              <div className="location">
                <p>Egypt - Sharkia - Zagazig</p>
                <p>bravocoading123@gmail.com</p>
                <p>+0123456789</p>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
