import React, { useRef } from 'react';
import "./contact.css";
import ArrowRightIconContact from "./ArrowRightIconContact";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_4dmb3nh",
      "template_9hu9d2p",
      form.current,
      "OM-fB_NYpfB3XoSrO"
    )
    e.target.reset();
    /*.then(
      (result) => { console.log(result.text) }, 
      (error) => { console.log(error.text); }
    )*/

  }


  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Entrer en contact</h2>
      <span className="section_subtitle">contactez-moi</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Parle-moi</h3>

          <div className="contact_info">
            <div className="contact_card">
              <svg 
                className='contact_card-icon'
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                >
                  <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"/>
                <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"/>
              </svg>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">l.p.n.frudo@gmail.com</span>
              
              <a href="mailto:l.p.n.frudo@gmail.com" className="contact_button" target='_blink'>
                Ercis-moi
                <ArrowRightIconContact/>
              </a>
            </div>

            <div className="contact_card">
              <svg 
              className='contact_card-icon'
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/>
              </svg>

              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">038 69 226 67</span>
              <a href="https://api.whatsapp.com/send?phone=0386922667&text=Bonjour !" className="contact_button" target='_blink'> 
                Ecris-moi
                <ArrowRightIconContact/>
              </a>
            </div>

          {/*  <div className="contact_card">
              <svg 
                className='contact_card-icon'
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24">
                  <path d="M12 3c-4.92 0-8.91 3.729-8.91 8.332 0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35 4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3zm.938 11.172-2.305-2.394-4.438 2.454 4.865-5.163 2.305 2.395 4.439-2.455-4.866 5.163z"/>
              </svg>
              <h3 className="contact_card-title">Messanger</h3>
              <span className="contact_card-data">lainantenaina.fb123</span>
              <a href="https://m.me/" className="contact_button" target='_blink'>
                Ecris-moi
                <ArrowRightIconContact/>
              </a>
            </div> */}

          </div>
        </div>
      
        <div className="contact_content">
          <h3 className="contact_title">Envoyer de message</h3>

          <form ref={form} onSubmit={sendEmail} className='contact_content'>
            <div className="contact_form-div">
              <label htmlFor="name" className="contact_form-tag">Nom</label>
              <input type="text" name='name' id='name' className='contact_form-input' required placeholder='Entrer votre nom ...'/>
            </div>

            <div className="contact_form-div">
              <label htmlFor="email" className="contact_form-tag">Email</label>
              <input type="email" name='email' id='email' className='contact_form-input' required placeholder='Entrer votre email...'/>
            </div>

            <div className="contact_form-div  contact_form-area">
              <label htmlFor="project" className="contact_form-tag">Message</label>
              <textarea 
                name="project" 
                className='contact_form-input' 
                id="project" 
                cols="30" 
                rows="10"
                placeholder='Entrer votre message...'
                required
                >
              </textarea>
            </div>

            <button className="button button-flex">
               Envoyer
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="24" 
                 height="24" 
                 viewBox="0 0 24 24"
                 fill="none"
                 className="button_icon"
                 >
                 <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"
                 fill="#fff"
                 />
               </svg>
             </button>
          </form>
        </div> 
      </div>

    </section>
  );
}

export default Contact;
