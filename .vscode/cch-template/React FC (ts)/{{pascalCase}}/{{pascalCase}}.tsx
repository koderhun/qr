import {FC} from 'react';
import {{{pascalCase}}Props} from './{{pascalCase}}.props'
import s from './styles.module.scss'

export const {{pascalCase}}: FC<{{pascalCase}}Props> = (props) => {
	return <div className={s.{{pascalCase}}} {...props}></div>
}
