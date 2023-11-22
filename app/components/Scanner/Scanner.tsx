import {FC} from 'react';
import {ScannerProps} from './Scanner.props'
import s from './styles.module.scss'

export const Scanner: FC<ScannerProps> = (props) => {
	return <div className={s.Scanner} {...props}></div>
}
