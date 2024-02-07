import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { ButtonTheme, Description, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Flavia Nascimento</Title>
      <Paragraph type="secondary" fontSize={16}>
        flavialan
      </Paragraph>
      <Description fontSize={12} type="main">
        Dev Front-End
      </Description>
      <ButtonTheme>Change Theme</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
