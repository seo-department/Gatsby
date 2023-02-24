import React from 'react';
import { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Backdrop from './backdrop/backdrop';
import { StaticImage } from 'gatsby-plugin-image';
import { useForm, ValidationError } from '@formspree/react';

import $ from 'jquery';


const Modal1 = () => {
    const modalEvent = useStaticQuery(graphql`
    {
        wpPage(uri: { eq: "/" }) {
            title
            content
            seo {
              title
              metaDesc
            }
        }
    }
    
  `)


const [toggle, setToggle] = useState(false)
const [state, handleSubmit] = useForm("mwkjoynd");

if (state.succeeded) {
        $('.modal-head').hide();  
}

return ( 
    <div> 
        <h1>Top Pokie Machines 2023</h1>
        <div className="homepage">
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link to="/" target="_blank" rel="nofollow"><StaticImage fluid src= "../images/triple-fortune-dragon-rising.png" alt="Triple Fortune" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Triple Fortune</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/money-mania-sphinx-fire.png" alt="Money Mania" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Money Mania</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)} >
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src= "../images/wheel-of-fortune.png" alt="Wheel of Fortune" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Wheel of Fortune</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/5-dragons-ultra.png" alt="5 dragons" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">5 dragons</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/super-times-pay-super-stacks-slot-machine.png" alt="Super Times" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Super Times</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/buffalo-slot-machine.png" alt="Buffalo Slot" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Buffalo Slot</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/dune-slot-machine.png" alt="Dune slot" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Dune slot</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/lightning-link-cabinet.png" alt="Lightning link" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Lightning link</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/fu-dai-slot.png" alt="fu dai slot" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Fu dai slot</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" onClick={() => setToggle(!toggle)}>
                            <Link  to="/" target="_blank" rel="nofollow"><StaticImage fluid src="../images/fu-dai-slot.png" alt="Fu dai slot" /></Link>
                        </div>
                        <div className="courses-one__single-content">
                            <p className="courses-one__single-content-title">Fu dai slot</p>
                            <div className="courses-one__single-content-review-box">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div dangerouslySetInnerHTML={{__html: modalEvent.wpPage.content}} />
            
        </div>
        
      {
       
        toggle  && ( 
            <div className="modal-head" >
                <Backdrop />
            <div className="modal fade"   >
                
                <div className="modal-dialog">
                    <div className="loginmodal-container">
                        <center><StaticImage src="../images/spinsforsale-logo1.png" fluid alt="Spins for sale Logo" title="Spins for sale Logo" /></center>
                        <p>Welcome To Spins For Sales</p>

                        <form id="myform" onSubmit={handleSubmit} method="POST" action='https://formspree.io/f/mwkjoynd'  >
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            <input type="password" name="pass" id="pass" placeholder="Password" />
                            <ValidationError 
                                prefix="pass" 
                                field="pass"
                                errors={state.errors}
                            />
                            <input type="submit" name="login" className="login loginmodal-submit" disabled={state.submitting}   />
                            <button className='modal-button' onClick={() => setToggle(false)}>Exit</button>

                        </form>
                        
                    </div>      
                </div>
            </div> 
        </div>

        
    

        )
      }


     
    </div>
  );

}   

export default Modal1

