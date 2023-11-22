'use client'
import React, {useState, ChangeEvent} from 'react'
import {Label, FileInput, Button} from 'flowbite-react'
import {DraggableEvent} from 'react-draggable'
import {TextInDom} from '@/components'
import s from './styles.module.scss'
import cn from 'classnames'

interface MemContentProps {
  handleLoadImage: (status: boolean) => void
  textList: {
    fontSize: number
    color: string
    strokeColor: string
    rotate: number
    pos: {
      x: number
      y: number
    }
    name: string
  }[]
  selectKey: number
  handleDragStop: (
    e: DraggableEvent,
    pos: {x: number; y: number},
    index: number,
  ) => void
  handleSelectText: (index: number) => void
}

export const MemContent: React.FC<MemContentProps> = ({
  textList,
  selectKey,
  handleDragStop,
  handleSelectText,
  handleLoadImage,
}) => {
  const [file, setFile] = useState<string | ArrayBuffer | null>('')

  const loadFile = (file: File) => {
    if (
      file &&
      file.type !== 'image/png' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/svg+xml'
    ) {
      alert('Incorrect file format!')
      return
    }

    let reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setFile(e.target?.result as string)
      handleLoadImage(true)
    }
    reader.readAsDataURL(file)
  }

  const handleFileLoad = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) return loadFile(file)
    console.log('Failed to load the file!')
  }

  const handleDelete = () => {
    setFile('')
    handleLoadImage(false)
  }

  return (
    <div className={s.MemContent}>
      <div id="content" className={cn(s.content, 'mb-4')}>
        <div className={s.image}>
          <img src={file as string} alt="Uploaded" />
        </div>
        {textList.map((settings, key) => (
          <TextInDom
            key={key}
            settings={settings}
            index={key}
            handleDragStop={handleDragStop}
            handleSelectText={handleSelectText}
            selectKey={selectKey}
          />
        ))}
      </div>
      <div className={cn(s.inputGroup, 'flex', 'justify-between')}>
        <div>
          <div className="mb-2">
            <Label htmlFor="file" value="Загрузить файл:" />
          </div>

          <FileInput onChange={handleFileLoad} id="file" />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help">
            PNG, JPG (MAX. 800x400px)
          </p>
        </div>
      </div>
    </div>
  )
}
