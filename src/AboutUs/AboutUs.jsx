import React from "react";
import styles from "../AboutUs/AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img
            className={styles.main_image}
            src="http://images.ctfassets.net/bkxhksvqddg5/6fjmeHJajm6sIA4iisiQKA/c4bee1a7b3775b13d94e7c94c64b7285/About-Us-Header.jpg"
            alt="This is a ski pic"
          />
        </div>
        <div className={styles.title}>
          <h3>A FAMILY</h3>
          <p>
            The company owns and operates a range of recreation, hospitality,
            real-estate development, food and beverage and retail businesses.
            Headquartered in Seattle, Vancouver with destinations across the
            continent, we are rooted in the spirit of the mountains and united
            by a passion for outdoor adventure. We honor each destination’s
            unique character and authenticity and celebrate the legendary
            adventures and enduring memories they bring to everyone.
          </p>
        </div>
      </div>
      <p>
        Steamboat, Winter Park Resort; Squaw Valley Alpine Meadows, Mammoth
        Mountain, June Mountain, Big Bear Mountain Resort; Stratton; Sugarbush
        Resort; Crystal Mountain, Snowshoe; Tremblant, Blue Mountain; Deer
        Valley Resort; Solitude Mountain Resort; CMH Heli-Skiing & Summer
        Adventures, Alpine Aerotech
      </p>
      <div className={styles.image_wrapper}>
        <div>
          <img
            className={styles.image1}
            src="https://images.ctfassets.net/bkxhksvqddg5/1uiQfk3KQYAmw4eig0GMSs/e3bb2e96243eee97f7d1c880d6dfcaab/Alterra-WP-Sun-Snow-Chair-720x925.jpg?w=720&h=925&fit=scale"
            alt="this is a snow mountain"
          />
        </div>
        <div>
          <img
            className={styles.image2}
            src="https://images.ctfassets.net/bkxhksvqddg5/VheqlMCC2YKMGW0KucOgw/73843540425a79102d2bacee91ea8a27/CMH-Loading-Helo-720x1408.jpg"
            alt="helicopter on snow"
          />
        </div>
        <div>
          <img
            className={styles.image3}
            src="https://www.tehaleh.com/media/8070156/mt-rainier-paradise-1.png"
            alt="helicopter on snow"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
