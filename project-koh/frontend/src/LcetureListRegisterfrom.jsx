import React, { useRef, useState } from 'react'
import {RegisterDiv,RegisterForm} from './StyledComponent'
import axios from 'axios'
function LcetureRegisterfrom({RegiCollections}) {

  return (
    <RegisterDiv>
        <RegisterForm>
          <select>
            {/* <option value="none">카테고리 선택</option> */}
            <option value={RegiCollections}>{RegiCollections}</option>
          </select>
          <input className='text' type="text" id="LcetureName" placeholder='제목'required/>
          <input className='text' type="text" id="limitUser" placeholder='내용'required/>
          <input className='subbtn' type="submit" value="입력 완료" />
        </RegisterForm>

    </RegisterDiv>
  )
}
export default LcetureRegisterfrom