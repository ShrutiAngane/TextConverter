import React from 'react'
import './styling.css'
import image from './transparent image.png'


export default function About(props) {
  return (
    <div className={`about ${props.theme}`} name='about'>
      <div className='content1'>
      <h5 className={`headlines ${props.theme}`}>Text Convertor :</h5>
      <section> 
        <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque recusandae error dignissimos debitis, optio culpa cumque illo nemo at iste non id, ducimus facilis nostrum possimus maiores illum. Nihil fuga illo sapiente harum, eius nam sint magni eaque, exercitationem tempora amet, hic ducimus numquam dicta. Vitae explicabo provident vero. Odio animi perspiciatis cumque, eveniet quae accusantium iusto ab doloremque porro in fugit qui esse exercitationem, nobis beatae ut officia fuga quibusdam natus dolores corrupti eius cum? Animi quis veniam libero veritatis sunt nostrum similique?</p>
      </section>
      </div>
      <div className='image'>
      <aside>
        <img  id="about-img"src={image} alt='man working on laptop'></img>
      </aside>
      </div>
      <div className="contactus">
        <p className='contact' style={{textAlign:'center',fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, aut.</p>
        <div className='email'>
        <input type='email' name='name' style={{height:'40px',width:'300px',paddingLeft:'10px'}} placeholder='Enter your email id here'></input>
        <button className={`submit btn btn-${props.theme}`}>Submit</button>
        </div>
      </div>
    </div>
  )
}
