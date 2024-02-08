import React from 'react';
import Container from 'react-bootstrap/Container';
import './AboutMe01.css';

export default function AboutMe01() {;
    

  return (
    <section className="aboutme01 bg-light py-5">
    <Container>
      <div className="text-center">
        <h4 className="text-uppercase fw-bold text-primary">關於我</h4>
        <hr className="w-25 mx-auto" />
        <h2 className="mb-4">自我介紹</h2>
      </div>
      <div className="aboutme01-content d-flex gap-5 align-items-center h-100">
        <img
          src="https://picsum.photos/id/391/400/400"
          alt=""
          className="aboutme01-img img-fluid rounded-5"
        />
        <p className="lead">
          獨立網頁全端開發者為目標, 目前在遊戲公司工作, 使用Unity, 主要處理遊戲戰鬥核心部分, 
          剛來時是做遊戲介面的開發/功能除錯, 
          在上一份工作在日本做網頁, 主要內容是開發自身公司用的CMS系統, 
          對網頁前端畫面顯示以及資料庫邏輯錯誤做修正或是增加功能.
        </p>
      </div>
    </Container>
  </section>

  )
}
