import React from "react";
import Card from "../../UI/Card";
import styles from "./Features.module.css";
import collections from "../../assets/Frame992.svg";
import invites from "../../assets/Frame985.svg";
import reminders from "../../assets/Frame986.svg";

const CARD_DATA = [
  {
    id: "card-1",
    img: `${collections}`,
    title: "Collections",
    desc: "Group bookmarks into collections to keep your workspace organize. You can also create nested collections to suit your needs.",
  },
  {
    id: "card-2",
    img: `${invites}`,
    title: "Invites",
    desc: "Invite others to work with you using personalized invite URLs or QR codes and give specific permissions to them. ",
  },
  {
    id: "card-3",
    img: `${reminders}`,
    title: "Reminders",
    desc: "Are you tired of misplacing your bookmarks? Set reminders to ensure that you don't lose track of important bookmarks. ",
  },
];

function Features() {
  return (
    <section id="products" className={styles.features}>
      <div className={styles.content}>
        <h2>features</h2>
        <h3>Do more with Linkvite</h3>
        <p>
          Aside from bookmark creation, Linkvite has a number of useful features
          to help you manage your bookmarks more effectively.
        </p>
      </div>
      <div className={styles.cardArea}>
        {CARD_DATA.map((data) => (
          <Card
            key={data.id}
            img={data.img}
            title={data.title}
            desc={data.desc}
          />
        ))}
        
      </div>
    </section>
  );
}

export default Features;
