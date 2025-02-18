import React from "react";
import styles from './home.module.scss'
import Image from "next/image";
import { Computer, Gamepad2, Github, Linkedin, Mail, MapPin, Music, Phone, PlaneTakeoff } from "lucide-react";
import ProgressBar from "./components/progressBar/progressBar";
import Contact from "./components/contact/contact";
import { Education } from "./components/education/education";
import { GBE } from "./descriptions/GBE/GBE";
import { Experience } from "./components/experience/experience";
import { Trendhim } from "./descriptions/Trendhim/trendhim";

const mikkel = {
  personalInfo: [
    { icon: <Mail />, text: 'mikkelwaldemar@gmail.com', link: '' },
    { icon: <Phone />, text: '+45 60541485', link: '' },
    { icon: <MapPin />, text: 'Brabrand, Aarhus', link: '' },
    { icon: <Linkedin />, text: 'Linkedin Profile', link: 'https://www.linkedin.com/in/mikkel-w-johannessen/' },
    { icon: <Github />, text: 'GitHub Profile', link: 'https://github.com/Mwaldemar' },
  ],
  experience: [
    { id: "Trendhim", position: "Frontend Software Engineer", place: "Trendhim", type: "Internship", year: "2024", duration: "5 months", description: <Trendhim /> },
    { id: "Randers Tegl", position: "Production Employee", place: "Carlsberg Bjælker, Randers Tegl", type: "Full time", year: "2016-2018 & 2019-2020", duration: "2 years, 11 months" },
    { id: "Rema", position: "Cashier", place: "Rema 1000", type: "Student Worker", year: "2011-2013", duration: "1 year, 7 months" },
  ],
  languages: [
    { skill: 'Danish', level: 100 },
    { skill: 'English', level: 95 },
  ],
  skills: [
    { skill: 'React.js', level: 80 },
    { skill: 'Next.js', level: 65 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'JavaScript', level: 60 },
    { skill: 'Web Design', level: 70 },
    { skill: 'UX', level: 70 },
  ],
  hobbies: [
    { icon: <Gamepad2 /> },
    { icon: <Music /> },
    { icon: <PlaneTakeoff /> },
    { icon: <Computer /> },
  ],
  educations: [
    { id: "GBE", year: "2020-2025", level: "Bachelor's Degree", degree: "Global Business Engineering", specialization: "Software", school: "VIA University College", description: <GBE /> },
  ],
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={styles.pictureContainer}>
            <Image className={styles.picture} width={150} height={150} alt={"Mikkel"} src={"/mikkel2.png"} />
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.headers}>Contact</div>
            {mikkel.personalInfo.map((info, index) => (
              <Contact key={index} icon={info.icon} text={info.text} link={info.link} />
            ))}
          </div>
          <div>
            <div className={styles.skills}>
              <div className={styles.headers}>Skills</div>
              {mikkel.skills.map((skill, index) => (
                <ProgressBar key={index} skill={skill.skill} level={skill.level} />
              ))}
            </div>
            <div className={styles.language}>
              <div className={styles.headers}>Languages</div>
              {mikkel.languages.map((language, index) => (
                <ProgressBar key={index} skill={language.skill} level={language.level} />
              ))}
            </div>
            <div className={styles.headers}>Hobbies</div>
            <div className={styles.hobbies}>
              {mikkel.hobbies.map((hobby, index) => (
                <div className={styles.hobbyIcons} key={index}>
                  {hobby.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoContainer}>
            <div className={styles.headers}>Education</div>
            {mikkel.educations.map(education => (
              <Education
                className={styles.education}
                key={education.id}
                {...education}
              />
            ))}
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.headers}>Experience</div>
            {mikkel.experience.map(exp => (
              <Experience
                className={styles.experience}
                key={exp.id}
                {...exp}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
