import React from "react"
import Layout from "../components/Layout/Layout"
import Header from "../components/Header/Header"
import "../style/style.scss"
import tree from "../images/tree.png"
import social from "../images/fb-icon.png"
import stories from "../images/stories.png"
import event from "../images/event.png"

const IndexPage = () => (
  <Layout>
    <div className="container">
      <Header />
    </div>
    <section className="intro">
      <h1 className="intro__title fancy-title">#stop climate change</h1>
      <article className="intro__article">
        <span className="intro__subtitle fancy-subtitle fancy-subtitle--absolute">
          THE ISSUE
        </span>
        <h2 className="big-text">
          Climate change poses the biggest threat to women in developing
          nations.
        </h2>
        <a href="#">Read more about this environmental and social cause</a>
      </article>
    </section>
    <section className="action">
      <span className="fancy-subtitle fancy-subtitle--absolute">
        Take Action
      </span>
      <div className="action__box">
        <h3 className="article-heading">Learn</h3>
        <p className="action__content font-light">
          Get the facts about this issue and how we’re helping.
        </p>
      </div>
      <div className="action__box">
        <h3 className="article-heading">Volunteer</h3>
        <p className="action__content font-light">
          Get the facts about this issue and how we’re helping.
        </p>
      </div>
      <div className="action__box">
        <h3 className="article-heading">Share</h3>
        <p className="action__content font-light">
          Get the facts about this issue and how we’re helping.
        </p>
      </div>
      <div className="action__box">
        <h3 className="article-heading">Donate</h3>
        <p className="action__content font-light">
          Get the facts about this issue and how we’re helping.
        </p>
      </div>
    </section>

    <section className="mission">
      <h2 className="fancy-subtitle fancy-subtitle--block fancy-subtitle--light">
        What WE DO
      </h2>
      <div className="mission__content">
        <h3 className="big-text big-text--light">
          Our mission is to create sustainable work for women in developing
          nations while helping to slow climate change.
        </h3>
      </div>
      <div className="articles">
        <article className="article">
          <img className="article__image" src={tree} alt="tree planting" />
          <h3 className="article-heading">Tree Planting Initiatives</h3>
          <p className="article__content font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
            pellentesque euismod laoreet.
          </p>
          <a className="button-link">Read more</a>
        </article>
        <article className="article">
          <img className="article__image" src={tree} alt="tree planting" />
          <h3 className="article-heading">Education and Training</h3>
          <p className="article__content font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
            pellentesque euismod laoreet.
          </p>
          <a className="button-link">Read more</a>
        </article>
        <article className="article">
          <img className="article__image" src={tree} alt="tree planting" />
          <h3 className="article-heading">Advocacy and Campaigning</h3>
          <p className="article__content font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
            pellentesque euismod laoreet.
          </p>
          <a className="button-link">Read more</a>
        </article>
      </div>
    </section>

    <section className="info">
      <h2 className="fancy-title">Climate change Is a hunger issue.</h2>
      <a className="info__btn button-link">Take action</a>
      <div className="info__box">
        <div className="info__content">
          <span className="fancy-subtitle fancy-subtitle--absolute">
            Do you know?
          </span>
          <h3 className="big-text">3 out of 4</h3>
          <p className="font-light">
            People living in poverty depend on agriculture for survival.
          </p>
        </div>
        <div className="info__social">
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
        </div>
      </div>
      <div className="info__box">
        <div className="info__content">
          <h3 className="big-text">30%</h3>
          <p className="font-light">
            People living in poverty depend on agriculture for survival.
          </p>
        </div>
        <div className="info__social">
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
        </div>
      </div>
      <div className="info__box">
        <div className="info__content">
          <h3 className="big-text">200 million +</h3>
          <p className="font-light">
            Number of refugees dealing with food shortages by the year 2050
          </p>
        </div>
        <div className="info__social">
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
        </div>
      </div>
      <div className="info__box">
        <div className="info__content">
          <h3 className="big-text">200 million +</h3>
          <p className="font-light">
            Number of refugees dealing with food shortages by the year 2050
          </p>
        </div>
        <div className="info__social">
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
          <a className="info__link" href="#">
            <img src={social} alt="" />
          </a>
        </div>
      </div>
    </section>
    <section className="stories">
      <div className="stories__image">
        <span className="fancy-subtitle fancy-subtitle--absolute">Stories</span>
        <img src={stories} alt="banner image" />
      </div>
      <div className="stories__banner">
        <div className="stories__content ">
          <h3 className="big-text big-text--light">
            “I am a person who was helped by this organization. Before they gave
            me assistance, I was really struggling with this issue.
          </h3>
          <p className="font-light font-light--light">
            BALKI, FARMER AND MOTHER IN NIGER
          </p>
        </div>
      </div>
      <a className="stories__btn button-link" href="#">
        Read more
      </a>
    </section>
    <section className="events">
      <h2 className="events__title fancy-title">
        LET’S Take action now to save the future.
      </h2>
      <article className="events__event">
        <div className="events__image">
          <img src={event} alt="" />
          <span className="fancy-subtitle fancy-subtitle--absolute fancy-subtitle--light ">
            Stories
          </span>
        </div>
        <div className="events__content">
          <h3 className="events__heading big-text big-text--light">
            Earth Day 2018 community tree planting event
          </h3>
          <p className="events__desc font-light font-light--light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
            pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl
            laoreet semper nec iaculis nibh. Curabitur in tortor lorem.
          </p>
          <a className="events__btn button-link" href="">
            Read More
          </a>
        </div>
      </article>
      <article className="events__event">
        <div className="events__image">
          <img src={event} alt="" />
          <span className="fancy-subtitle fancy-subtitle--absolute fancy-subtitle--light ">
            Stories
          </span>
        </div>
        <div className="events__content">
          <h3 className="events__heading big-text big-text--light">
            Earth Day 2018 community tree planting event
          </h3>
          <p className="events__desc font-light font-light--light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
            pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl
            laoreet semper nec iaculis nibh. Curabitur in tortor lorem.
          </p>
          <a className="events__btn button-link" href="">
            Read More
          </a>
        </div>
      </article>
      <article className="events__event">
        <div className="events__image">
          <img src={event} alt="" />
          <span className="fancy-subtitle fancy-subtitle--absolute fancy-subtitle--light ">
            LATEST NEWS
          </span>
        </div>
        <div className="events__content">
          <h3 className="events__heading big-text big-text--light">
            Earth Day 2018 community tree planting event
          </h3>
          <p className="events__desc font-light font-light--light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            felis, auctor vitae vestibulum vel, consequat eu dolor. Nam
            pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl
            laoreet semper nec iaculis nibh. Curabitur in tortor lorem.
          </p>
          <a className="events__btn button-link" href="">
            Read More
          </a>
        </div>
      </article>
    </section>
    <section className="subscribe">
      <h3 className="subscribe__title big-text">
        Subscribe to our monthly newsletter and stay up to date with all news
        and events.
      </h3>
      <input
        placeholder="Enter you email adress"
        className="subscribe__input"
        type="text"
      />
      <button
        className="subscribe__btn button-link button-link--secondary"
        type="button"
      >
        Subscribe
      </button>
    </section>
    <footer className="footer">
      <div className="footer__logo">The Green Trees Initiative</div>
      <div className="footer__contact">
        <h5 className="footer__heading">CONTACT US</h5>
        <div className="footer__content">
          <p className="font-light">
            123 Anywhere St. Cityname, NY 11206 (123) 456-7890 contact@npo.org
          </p>
        </div>
      </div>
      <div className="footer__contact">
        <h5 className="footer__heading">FOLLOW US</h5>
        <ul className="footer__list">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Medium</a>
          </li>
        </ul>
      </div>
      <div className="footer__contact">
        <h5 className="footer__heading">LEARN MORE</h5>
        <ul className="footer__list">
          <li>
            <a href="">The issue</a>
          </li>
          <li>
            <a href="">How we help</a>
          </li>
          <li>
            <a href="">Get involved</a>
          </li>
          <li>
            <a href="">Latest news</a>
          </li>
        </ul>
      </div>
      <h3 className="footer__slogan fancy-title">#stop climate change</h3>
    </footer>
  </Layout>
)

export default IndexPage
