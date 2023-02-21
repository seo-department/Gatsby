import React from 'react';
import { useState } from "react"

import LogoImage from '../images/spinsforsale-logo1.png'
import dragons from '../images/5-dragons-ultra.png'
import buffalo from '../images/buffalo-slot-machine.png'
import dune from '../images/dune-slot-machine.png'
import fu_dai from '../images/fu-dai-slot.png'
import lightning from '../images/lightning-link-cabinet.png'
import money_mania from '../images/money-mania-sphinx-fire.png'
import super_times from '../images/super-times-pay-super-stacks-slot-machine.png'
import triple from '../images/triple-fortune-dragon-rising.png'
import fortune from '../images/wheel-of-fortune.png'

import { Image } from 'react-bootstrap';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Backdrop from './backdrop/backdrop';





const Modal = () => {
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
    

  return ( 
    <div>
        <h1>Top Pokie Machines 2023</h1>
        <div className="homepage">
            <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img">
                            <Link to="/" target="_blank" rel="nofollow"><Image fluid src= {triple} alt="Triple Fortune" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={money_mania} alt="Money Mania" /></Link>
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
                            <div className="knopka" onClick={() => setToggle(!toggle)}>
                                <Link to="/" className="thm-btn" target="_blank" rel="nofollow">Buy Now</Link>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-lg-6 col-md-6" data-wow-delay="0ms" data-wow-duration="1000ms">
                    <div className="courses-one__single center">
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image money_mania src= {fortune} alt="Wheel of Fortune" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={dragons} alt="5 dragons" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={super_times} alt="Super Times" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={buffalo} alt="Buffalo Slot" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={dune} alt="Dune slot" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={lightning} alt="Lightning link" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={fu_dai} alt="fu dai slot" /></Link>
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
                        <div className="courses-one__single-img" >
                            <Link  to="/" target="_blank" rel="nofollow"><Image fluid src={fu_dai} alt="Fu dai slot" /></Link>
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
                        <center><Image src={ LogoImage } fluid alt="Spins for sale Logo" title="Spins for sale Logo" /></center>
                        <p>Welcome To Spins For Sales</p>
                        <form>
                            <input type="text" name="email" placeholder="Email"/>
                            <input type="password" name="pass" placeholder="Password"/>
                            <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
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

export default Modal

