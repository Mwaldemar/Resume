import React from "react";
import styles from './home.module.scss'
import Image from "next/image";
import { Computer, Gamepad2, Linkedin, Mail, MapPin, Music, Phone, PlaneTakeoff } from "lucide-react";
import ProgressBar from "./components/progressBar/progressBar";
import Contact from "./components/contact/contact";
import { Education } from "./components/education/education";

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
  { skill: 'React', level: 80 },
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

const education = [
  { year: "2020-2025", level: "Bachelor's Degree", educationName: "Global Business Engineering", specialization: "Software", school: "VIA University College" }
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
          <h3 className={styles.educationHeader}>Education</h3>
          {education.map((edu, index) => (
            <Education
              key={index}
              year={edu.year}
              level={edu.level}
              educationName={edu.educationName}
              specialization={edu.specialization}
              school={edu.school}
            ></Education>
          ))}

        </div>
      </div>
    </div >
  );
}
