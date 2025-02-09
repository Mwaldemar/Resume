import React from "react";
import styles from './home.module.scss'
import Image from "next/image";
import { Computer, Gamepad2, Linkedin, Mail, MapPin, Music, Phone, PlaneTakeoff } from "lucide-react";
import ProgressBar from "./components/progressBar/progressBar";
import Contact from "./components/contact/contact";
import { Education } from "./components/education/education";
import { GBE } from "./descriptions/GBE/GBE";
import { Experience } from "./components/experience/experience";

const personalInfo = [
  { icon: <Mail />, text: 'mikkelwaldemar@gmail.com', link: '' },
  { icon: <Phone />, text: '+45 60541485', link: '' },
  { icon: <MapPin />, text: 'Brabrand, Aarhus', link: '' },
  { icon: <Linkedin />, text: 'Linkedin Profile', link: 'https://www.linkedin.com/in/mikkel-w-johannessen/' },
];

const languages = [
  { skill: 'Danish', level: 100 },
  { skill: 'English', level: 95 },
];

const skills = [
  { skill: 'React.js', level: 80 },
  { skill: 'TypeScript', level: 80 },
  { skill: 'JavaScript', level: 60 },
  { skill: 'Web Design', level: 70 },
  { skill: 'UX', level: 70 },
];

const hobbies = [
  { icon: <Gamepad2 /> },
  { icon: <Music /> },
  { icon: <PlaneTakeoff /> },
  { icon: <Computer /> },
]

const educations = [
  { id: "GBE", year: "2020-2025", level: "Bachelor's Degree", degree: "Global Business Engineering", specialization: "Software", school: "VIA University College", description: <GBE /> },
]

const experience = [
  { id: "Trendhim", position: "Frontend Software Engineer", place: "Trendhim", type: "Internship", year: "2024", duration: "5 months", description: "Ad" },
  { id: "Randers Tegl", position: "Production Employee", place: "Randers Tegl", type: "Full time", year: "2016-2018 & 2019-2020", duration: "2 years, 11 months", description: "Ad" },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={styles.pictureContainer}>
            <Image className={styles.picture} width={150} height={150} alt={""} src={"/mikkel4.jpg"} />
          </div>
          <div className={styles.personalInfo}>
            <h3>Contact</h3>
            {personalInfo.map((info, index) => (
              <Contact key={index} icon={info.icon} text={info.text} link={info.link} />
            ))}
          </div>
          <div>
            <div className={styles.skills}>
              <h3>Skills</h3>
              {skills.map((skill, index) => (
                <ProgressBar key={index} skill={skill.skill} level={skill.level} />
              ))}
            </div>
            <div className={styles.language}>
              <h3>Languages</h3>
              {languages.map((language, index) => (
                <ProgressBar key={index} skill={language.skill} level={language.level} />
              ))}
            </div>

            <h3 className={styles.hobbyHeader}>Hobbies</h3>
            <div className={styles.hobbies}>
              {hobbies.map((hobby, index) => (
                <div className={styles.hobbyIcons} key={index}>
                  {hobby.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoHeader}>Education</h3>
            {educations.map(education => (
              <Education
                className={styles.education}
                key={education.id}
                {...education}
              />
            ))}
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoHeader}>Experience</h3>
            {experience.map(exp => (
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
