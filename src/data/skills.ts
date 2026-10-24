import aws from '../assets/logos/aws.svg?raw'
import cplusplus from '../assets/logos/cplusplus.svg?raw'
import css3 from '../assets/logos/css3.svg?raw'
import docker from '../assets/logos/docker.svg?raw'
import github from '../assets/logos/github.svg?raw'
import html5 from '../assets/logos/html5.svg?raw'
import java from '../assets/logos/java.svg?raw'
import javascript from '../assets/logos/javascript.svg?raw'
import lightgbm from '../assets/logos/lightgbm.svg?raw'
import mongodb from '../assets/logos/mongodb.svg?raw'
import python from '../assets/logos/python.svg?raw'
import react from '../assets/logos/react.svg?raw'
import springboot from '../assets/logos/springboot.svg?raw'
import sql from '../assets/logos/sql.svg?raw'

export type Skill = {
  name: string
  icon: string
}

export const skills: Skill[] = [
  { name: 'C++', icon: cplusplus },
  { name: 'Java', icon: java },
  { name: 'Python', icon: python },
  { name: 'SQL', icon: sql },
  { name: 'HTML', icon: html5 },
  { name: 'CSS', icon: css3 },
  { name: 'JavaScript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'Spring Boot', icon: springboot },
  { name: 'MongoDB', icon: mongodb },
  { name: 'GitHub', icon: github },
  { name: 'Docker', icon: docker },
  { name: 'AWS', icon: aws },
  { name: 'LightGBM', icon: lightgbm },
]
