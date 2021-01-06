import React, { Component } from "react";
import './style.css';
import './bootstrap.css';
import payment from './aboutimage/payment.png';


import './contact.json';
import {Helmet} from "react-helmet";

    const ContactPage = () => (
      
      <div>
        <div id="contact">
          <div className="container">
         
          <Helmet>
          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" type="text/javascript" />
           </Helmet>

            <df-messenger
  intent="WELCOME"
  chat-title="Swacky Assistant"
  agent-id="986185a4-61ad-4298-9cce-49e9bef887cc"
  language-code="en"
></df-messenger>
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  Aba, Abia State
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  +23412345678
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  info@swacky.com
                </p>
              </div>
            </div>
            
          </div>
          
        </div>
        <footer class="footer">
        <div class="container">
        <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="footer__about">
        <p>The customer is at the heart of our unique business model, which includes design.</p>
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
                            <li>Sales</li>
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
    );

export default ContactPage;