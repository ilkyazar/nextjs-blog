import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/kedili.jpg"
          alt="An image showing ilkyaz"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, world! I'm ilkyaz. </h1>
      <p>I blog about web development - especially frontend</p>
    </section>
  );
}

export default Hero;
