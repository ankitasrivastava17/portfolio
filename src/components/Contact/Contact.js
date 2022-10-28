import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Get In Touch !</h2>
      <p className='section__info'>{contact.info}</p>
      <br />
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Mail me
        </span>
      </a>
    </section>
  )
}

export default Contact;
