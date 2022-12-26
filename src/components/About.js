import React from 'react'
import './styling.css'
import image from './transparent image.png'


export default function About(props) {
  return (
    <div className={`about ${props.theme}`} ref={props.refer}>
      <div className='content1'>
      <h5 className={` my-3 ${props.theme}`}>Text Convertor :</h5>
      <section> 
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque recusandae error dignissimos debitis, optio culpa cumque illo nemo at iste non id, ducimus facilis nostrum possimus maiores illum. Nihil fuga illo sapiente harum, eius nam sint magni eaque, exercitationem tempora amet, hic ducimus numquam dicta. Vitae explicabo provident vero. Odio animi perspiciatis cumque, eveniet quae accusantium iusto ab doloremque porro in fugit qui esse exercitationem, nobis beatae ut officia fuga quibusdam natus dolores corrupti eius cum? Animi quis veniam libero veritatis sunt nostrum similique?</p>
      </section>
      </div>
      <div className='image'>
      <aside>
        <img  id="about-img"src={image} alt='man working on laptop'></img>
      </aside>
      </div>
      <div className="contactus">
        <p className='contact' style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, aut.</p>
        <div style={{marginLeft:'580px'}}>
        <input type='email' name='name' className="email" placeholder='Enter your email id here'></input>
        <button className={`submit btn-${props.theme}`}>Submit</button>
        </div>
      </div>
      {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Copyright &#169; 2022</div> */}
    </div>
  )
}
