import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Dreamcatcher prism hot chicken chambray master cleanse crucifix
            ethical. Adaptogen 8-bit irony, fit aesthetic green juice man braid
            celiac selfies pour-over. Gluten-free enamel pin kinfolk, poke echo
            park succulents thundercats distillery tacos lo-fi mixtape
            adaptogen. Ramps franzen locavore, keytar cliche flannel iceland
            kinfolk big mood raclette try-hard gochujang coloring book drinking
            vinegar. Crucifix biodiesel freegan tousled keffiyeh slow-carb
            gochujang scenester gastropub wayfarers coloring book glossier.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
