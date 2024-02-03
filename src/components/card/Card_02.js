import React from 'react'
import { Person} from '@mui/icons-material'
export default function Card_02() {
  return (
    <div class="col-md-4 d-flex gap-4">
    <Person className='primary'/>
      <div>
        <h5 class="fw-bold">卡片樣板2號</h5>
        <p class="text-muted">
          就是挺陽春的這樣...
        </p>
      </div>
    </div>
  )
}
