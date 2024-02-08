import React from 'react'
import * as Icon from 'react-bootstrap-icons';


export default function RatingCard() {
  return (
    
    <div class="card bg-light border-0 shadow-lg rounded-4 mt-5">
        <div class="card-body">
            <div class="row p-5">
                <div class="col-7">
                    <h2 class="fw-bold">您的評價</h2>
                </div>
                <div class="col-5">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="display-5 fw-semibold">
                                <Icon.StarFill class="text-warning"></Icon.StarFill>5
                            </h3>
                            <p class="text-center">平均星數</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row px-5">
                <div class="col-12">
                    <div class="input-group input-group-lg">
                        <span class="input-group-text rounded-start-5">
                            <Icon.Search></Icon.Search>
                        </span>
                        <input type='text' class="form-control rounded-end-5" placeholder='搜尋評價'/>
                    </div>
                </div>
            </div>

            <div class="row p-5">
                <div class="col-12 vstack gap-2">
                    <h5>檢視</h5>

                    <div class="d-flex align-items-center gap-1">
                        <span>5</span> 
                        <Icon.StarFill class="text-warning"></Icon.StarFill>
                        <div class="progress ms-3" style={{height : '10px', width : '100%'}}>
                            <div class="progress-bar bg-warning" 
                            style={{width : '80%'}}
                            role='progressbar'
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}></div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-1">
                        <span>4</span> 
                        <Icon.StarFill class="text-warning"></Icon.StarFill>
                        <div class="progress ms-3" style={{height : '10px', width : '100%'}}>
                            <div class="progress-bar bg-warning" 
                            style={{width : '80%'}}
                            role='progressbar'
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}></div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-1">
                        <span>3</span> 
                        <Icon.StarFill class="text-warning"></Icon.StarFill>
                        <div class="progress ms-3" style={{height : '10px', width : '100%'}}>
                            <div class="progress-bar bg-warning" 
                            style={{width : '80%'}}
                            role='progressbar'
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}></div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row px-5 pd-4">
                <div class="col-12">
                    <a href='#' class="btn btn-success btn-lg">寫評價</a>
                </div>
            </div>

        </div>

    </div>
  )
}
