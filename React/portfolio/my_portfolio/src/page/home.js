import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../img/profile_pic.jpg";
import "../app.css";
import BasicSkill from "../img/Basic_skill.png";

export default function HomePage() {
  const skill_box = [
    {
      src: BasicSkill,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissesollicitudin ante diam, a mollis metus tincidunt non. In",
    },
  ];

  return (
    <div className="Home">
      <section className="my_bio">
        <img src={Profile} alt="my picture"></img>
        <article>
          <h1>Patchata Mitanee</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sollicitudin ante diam, a mollis metus tincidunt non. In semper leo
          lorem, nec ultricies risus venenatis et. Donec porttitor, libero
          bibendum sollicitudin imperdiet, nibh leo finibus ex, at ullamcorper
          eros felis quis massa. Vestibulum id tincidunt sapien. Quisque
          interdum nisl sit amet nisi pellentesque, consequat lobortis turpis
          iaculis. Sed quis sapien lobortis, posuere velit eu, ornare lectus.
          Aenean massa nulla, aliquam eu risus dapibus, feugiat bibendum orci.
          Morbi neque risus, interdum hendrerit dolor eu, tincidunt cursus diam.
          Suspendisse potenti. Nam a euismod tortor. Donec eu dictum libero.
          Nulla scelerisque suscipit nunc. Integer auctor, nisl sit amet
          scelerisque sodales, mi dolor ultrices est, id pharetra erat odio nec
          risus. Donec velit ipsum, euismod sit amet felis et, dignissim auctor
          quam. Pellentesque id fermentum velit, nec scelerisque lorem.
        </article>
      </section>
      <h1 className="title">My Skill</h1>
      <section className="skill">
        <div className="skill_box">
          <div className="top_box">
            <img
              className="skill_pic"
              src={BasicSkill}
              alt="Basic Programming logo"
            />
          </div>
          <article className="bottom_box">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sollicitudin ante diam, a mollis metus tincidunt non. In
          </article>
        </div>
      </section>
    </div>
  );
}
