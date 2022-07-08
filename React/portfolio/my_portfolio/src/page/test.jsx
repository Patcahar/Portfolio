import React from "react";
import skillbox from "../component/skillbox";
import "../app.css";
import Profile from "../img/profile_pic.jpg";
import BasicSkill from "../img/Basic_skill.png";
export default function TestPage() {

    const skill_box = [
        {
          src: BasicSkill,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissesollicitudin ante diam, a mollis metus tincidunt non. In",
        },
      ];
  return (
    <div
      className="contact"
      style={{ width: "100vw", backgroundColor: "#EEEEEE" }}
    >
      <section>
        <h1>Test Page</h1>
        {skill_box.map((skilldetail)=>{
            const {src,description} = skilldetail;
              return (
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
              );
        }
        )}
      </section>
    </div>
  );
}
