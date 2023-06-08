import Profile from '../components/Profile/ProfileOutput'
import Intro from '../components/Intro/IntroOutput'
import Skills from '../components/Skills/SkillsOutput'
import Career from '../components/Career/CareerOutput'
import Experience from '../components/Experience/ExperienceOutput'
import Certificate from '../components/Certificate/CertificateOutput'
import Education from '../components/Education/EducationOutput'
import Url from '../components/Url/UrlOutput'


function Preview({ resumeData }) {
  const data = JSON.parse(localStorage.getItem('data'))

  return (
    <main>
      <Profile />
      <Intro />
      <Skills />
      <Career data={data.career} />
      <Experience />
      <Certificate resumeData={resumeData} />
      <Education />
      <Url />
    </main>
  )
}

export default Preview
