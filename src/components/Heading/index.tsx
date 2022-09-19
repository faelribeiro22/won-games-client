import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineBottom?: boolean
  lineLeft?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'white',
  lineBottom = false,
  lineColor = 'primary',
  lineLeft = false,
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineBottom={lineBottom}
    lineColor={lineColor}
    lineLeft={lineLeft}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
