import React from 'react'
import "../Contact.scss"

function ContactForm() {
  return (
  <>
    <div class="contact__text">
        <p class="contact__word">Want to get in touch? Fill out the form below to send me a message and I will get back
            to you as soon as possible!</p>
    </div>
    
    <div>
        <form action="">
            <div className='form'>
                <input  className='form_in' placeholder='Name'  type="text" />
                <input  className='form_in' placeholder='Email Address' type="text" />
                <input className='form_in' placeholder='Phone Number'  type="text" />

                <div><textarea class="textarea" name="subject" id="subject" cols="40" rows="7"
                        placeholder="Message"></textarea>
                    <div class="send_div"><button class="send_button">
                            <p class="send_word">SEND</p>
                        </button>
                    </div>
                </div>

            </div>

        </form>
    </div>

  </>
  )
}

export default ContactForm