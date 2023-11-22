'use client'
import React from 'react'
import cn from 'classnames'
import Draggable, {DraggableEventHandler, DraggableEvent} from 'react-draggable'
import s from './styles.module.scss'

interface TextInDomProps {
  settings: {
    fontSize: number
    color: string
    strokeColor: string
    rotate: number
    pos: {
      x: number
      y: number
    }
    name: string
  }
  index: number
  handleDragStop: (
    e: DraggableEvent,
    pos: {x: number; y: number},
    index: number,
  ) => void
  handleSelectText: (index: number) => void
  selectKey: number
}

export const TextInDom: React.FC<TextInDomProps> = ({
  settings,
  index,
  handleDragStop,
  handleSelectText,
  selectKey,
}) => {
  const style: React.CSSProperties = {
    fontSize: `${settings.fontSize}px`,
    color: `${settings.color}`,
    textShadow: `${settings.strokeColor} 1px 1px 0,
                ${settings.strokeColor} -1px -1px 0,
                ${settings.strokeColor} -1px 1px 0,
                ${settings.strokeColor} 1px -1px 0`,
    transform: `rotate(${settings.rotate}deg)`,
  }

  let activeClass = ''

  if (selectKey === index) {
    activeClass = 'active'
  }

  const onStop: DraggableEventHandler = (e, {x, y}) => {
    handleDragStop(e, {x, y}, index)
  }

  return (
    <Draggable
      onStop={onStop}
      position={{x: settings.pos.x, y: settings.pos.y}}
      defaultClassNameDragging="drag">
      <div
        id={`text${index}`}
        onClick={() => handleSelectText(index)}
        className={cn(s.TextInDom, s['TextInDom' + index], activeClass)}>
        <div style={style}>
          <div>{settings.name}</div>
        </div>
      </div>
    </Draggable>
  )
}
