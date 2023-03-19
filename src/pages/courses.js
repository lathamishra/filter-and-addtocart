import React, { useEffect, useRef, useState } from "react";
import "./courses.css";
import "./Modal.css";
import { FaCartPlus } from "react-icons/fa";
const CardGrid = () => {
  const ref = useRef(null);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const SearchCourse = () => {
    const input = document.getElementById("filter").value.toUpperCase();
    const card = document.getElementsByClassName("card");

    for (let i = 0; i < card.length; i++) {
      var title = card[i].querySelector(".card-title");

      if (title.innerText.toUpperCase().indexOf(input) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }

    const select = document.querySelector(".select");
    const btn = document.getElementsByTagName("button");
    const n = document.getElementsByClassName("h_tag");

    for (let b of btn) {
      b.addEventListener("click", (e) => {
        var parent = e.target.parentNode;

        var clone = parent.cloneNode(true);

        clone.lastElementChild.innerText = "Book-now";
        select.appendChild(clone);

        if (clone) {
          // n.onClick = function () {
          if (n.length == 1) {
            console.log("cloneeee");
            select.classList.toggle("display");
          }
        }
      });
    }
  };

  return (
    <div>
      <div className="my-input">
        <input
          type="text"
          id="filter"
          placeholder="filter"
          onKeyUp={SearchCourse}
        />

        <h1 ref={ref} className="h_tag">
          <FaCartPlus />
        </h1>

        {/* <button onClick={toggleModal} className="btn-modal">
          <FaCartPlus />
        </button> */}
      </div>
      <div>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident perferendis suscipit officia recusandae, eveniet
                quaerat assumenda id fugit, dignissimos maxime non natus placeat
                illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur
                possimus quaerat ipsum quos molestiae rem aspernatur dicta
                tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}

        <div className="row">
          <div className="column">
            <div className="card">
              <img
                height="100px"
                width="100px"
                src="https://static.javatpoint.com/images/javascript/javascript_logo.png"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3 className="card-title">Javascript</h3>
              <p>Fees $700 </p>
              <button id="cart_button">Add to Cart </button>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                height="100px"
                width="100px"
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3 className="card-title">HTML</h3>
              <p>Fees $800 </p>
              <button id="cart_button">Add to Cart </button>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                height="100px"
                width="100px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3 className="card-title">css</h3>
              <p>Fees $600 </p>
              <button id="cart_button">Add to Cart </button>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                height="100px"
                width="100px"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <h3 className="card-title">Java</h3>
              <p>Fees $700 </p>
              <button id="cart_button">Add to Cart </button>
            </div>
          </div>
        </div>
      </div>
      <div id="select" className="select"></div>
    </div>
  );
};

export default CardGrid;
