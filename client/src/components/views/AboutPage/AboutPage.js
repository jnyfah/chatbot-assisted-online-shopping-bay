import React, { Component } from 'react'
import './style.css';
import './bootstrap.css';
import about from './aboutimage/about.jpg';
import payment from './aboutimage/payment.png';
import {Helmet} from "react-helmet";



export class AboutPage extends Component {
  render() {
    return (
        <div id ="ab">
		<Helmet>
          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" type="text/javascript" />
           </Helmet>

            <df-messenger
  intent="WELCOME"
  chat-title="Swacky Assistant"
  agent-id="986185a4-61ad-4298-9cce-49e9bef887cc"
  language-code="en"
></df-messenger>
   
    <div class="container">

    <div class="row">
                <div class="col-lg-12">
                    <div class="about__pic">
                    <img src={about} alt=""/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="about__item">
                        <h4>Who We Are ?</h4>
                        <p>We are an online Shopping platform that helps you buy products at the comfort of your home, we also deliver nationwide</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="about__item">
                        <h4>Who We Do ?</h4>
                        <p>we sell varities of quality products with affordable prices too, shop with us wou will never regret it</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="about__item">
                        <h4>Why Choose Us</h4>
                        <p>we are 100% reliable and efficient registered business service, here to serve you, our customer support is also availabl 24/7</p>
                    </div>
                </div>
            </div>
      </div>
      <footer class="footer">
        <div class="container">
        <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="footer__about">
        <p>The customer is at the heart of our unique business model.</p>
              <img src={payment} alt=""/>
          </div>
          </div>
          <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li>Clothing Store</li>
                            <li>Trending Shoes</li>
                            <li>Accessories</li>
                            <li>Sale</li>
                        </ul>

          </div>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li>Contact Us</li>
                            <li>Payment Methods</li>
                            <li>Delivary</li>
                            <li>Return and Exchanges</li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div class="footer__widget">
                        <h6>NewLetter</h6>
                        <div class="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales and promos!</p>
                        </div>
                    </div>
                </div>       
          </div>


            </div>
    </footer>
      </div>
    )
  }
}

export default AboutPage
