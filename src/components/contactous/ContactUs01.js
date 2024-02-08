import React from 'react'
import './ContactUs01.css';

export default function ContactUs01() {
  return (
    <section id="contact" class="contact my-6 position-relative">
      <img
        src="assets/ContactOur01.svg"
        alt=""
        class="decoration-star position-absolute"
      />

      <div class="container position-relative z-3">
        <div class="row">
          <div class="col-lg-6 d-none d-md-block">
            <div class="image-container">
              <img src="https://picsum.photos/id/350/1024/800" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-container">
              <h2>如有興趣, 可以連絡我們</h2>

              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="聯絡人名稱"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="聯絡信箱"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="連絡電話"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    placeholder="你的訊息"
                    rows="8"
                  ></textarea>
                </div>
                <div class="d-grid gap-2">
                  <input
                    type="submit"
                    value="送出"
                    class="btn btn-primary btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
