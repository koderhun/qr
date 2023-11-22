import {FC} from 'react'
import {GeneratorProps} from './Generator.props'
import s from './styles.module.scss'

export const Generator: FC<GeneratorProps> = (props) => {
  return (
    <div className={s.Generator} {...props}>
      Generator
    </div>
  )
}
