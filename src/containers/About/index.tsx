import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <Paragraph type="main">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis eius
      in nemo blanditiis earum libero dignissimos numquam eligendi perspiciatis
      sint? Dicta delectus autem nihil expedita minus, dolor similique. Qui,
      quia!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=flavialan&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=flavialan&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
