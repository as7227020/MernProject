import React from 'react'

export default function Footer01() {
  return (
    <footer class="border-top border-primary bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <ul class="nav">
            <li class="nav-item">
              <a href="index.html" class="nav-link link-light">Home</a>
            </li>
            <li class="nav-item">
              <a href="#details" class="nav-link link-light">Details</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link link-light">Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <p class="text-end d-none d-md-block">
            Copyright &copy; 阿仁樣板練習 2024
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}
