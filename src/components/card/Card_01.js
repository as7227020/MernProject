import React from 'react'
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
export default function Card_01() {
  return (
    <div class="card rounded-4 shadow-lg border-0 md-5" >
    <div class="card-body">
      <div>
        <h4 class="fw-bold">免費</h4>
        <p class="text-muted">初心者限定</p>
      </div>
      
      <h2 class="fs-0 fw-bold mt-4 mb-50">$0</h2>
<ul class="list-group list-group-flush fs-5 mb-5 vstack gap-2">

    <li class="list-group-item">
    <Icon.Check2></Icon.Check2>無限裝備次數
    </li>
      
    <li class="list-group-item">
    <Icon.Check2></Icon.Check2>等級0即可裝備
    </li>

    <li class="list-group-item">
    <Icon.Check2></Icon.Check2>免費脫下裝備
    </li>

</ul>

<div class="d-grid">
    <Button class="btn btn-dark rounded-3 mt-5 mb-4">購買</Button>
</div>

    </div>
    </div> 
  )
}
