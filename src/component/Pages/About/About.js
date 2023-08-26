import classes from "./About.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.centerContent}>
        <div className={classes.content}>
          <h1>About Us</h1>
          <p className={classes.para}>
            Welcome to our e-commerce website! We take immense pride in curating
            a diverse collection of the most unique and high-quality products.
            With a commitment to excellence, we provide a seamless online
            shopping experience that caters to your needs and preferences. Our
            dedication to sourcing products that stand out for their exceptional
            quality and innovation sets us apart. Whether you're looking for the
            latest electronics, trendy fashion pieces, exquisite jewelry, home
            essentials, or anything else, you'll find it here. Explore our
            curated selection and discover items that reflect your style and
            aspirations. Thank you for choosing us as your go-to destination for
            premium products.
          </p>
        </div>
      </div>
    </div>
  );
}
