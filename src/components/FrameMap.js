import React,{useRef} from 'react'

const FrameMap = ({locationRef}) => {
  return (
    <>
      <div className="container pb-20">
        <div className="row justify-center mx-auto" ref={locationRef}>
          <div className="col-lg-12 col-11 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.706231317636!2d70.26280267262679!3d28.414152793651997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b45db39%3A0x28af23c1672a0170!2sRahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703346179211!5m2!1sen!2s"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrameMap