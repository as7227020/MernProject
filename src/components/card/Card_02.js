import React from 'react'
import { Person} from '@mui/icons-material'
export default function Card_02() {

  //可替換 <div class="col-md-4 d-flex gap-4">
  return (
    <div className="gap-4 d-flex ">
    <Person className='primary'/>
      <div>
        <h5 className="fw-bold">卡片樣板2號卡片樣板2號卡片樣板2號</h5>
        <p className="text-muted">
          就是挺陽春的這樣...就是挺陽春的這樣...就是挺陽春的這樣...就是挺陽春的這樣...就是挺陽春的這樣...就是挺陽春的這樣...就是挺陽春的這樣...就是挺陽春的這樣...
        </p>
      </div>
    </div>
  )
}
