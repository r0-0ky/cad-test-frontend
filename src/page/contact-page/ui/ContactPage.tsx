'use client'

import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { CustomForm } from '@/src/widgets/form';
import { FormContext } from '@/src/app/contexts/FormContext';
import { useState } from 'react';
import { Button } from 'antd';

export const ContactPage: React.FC = () => {
  const [isRequest, setIsRequest] = useState(false)
  const [requestMessage, setRequestMessage] = useState('')

  const handleReset = () => {
    setIsRequest(false)
    setRequestMessage('')
  } 

  return (
    <FormContext.Provider value={{setIsRequest, setRequestMessage}} >
      <main {...stylex.props(styles.main)}>
        <div {...stylex.props(styles.wrapper)}>
          {isRequest ?
            <div {...stylex.props(styles.container)}>
              <h1 {...stylex.props(styles.title)}>{requestMessage}</h1>
              <Button color='primary' variant='solid' onClick={handleReset}>Go back</Button>
            </div>
          :
            <>
              <h1 {...stylex.props(styles.title)}>Only CTA on the page</h1>
              <CustomForm />
            </>
          }
        </div>
      </main>
    </FormContext.Provider>
  )
}