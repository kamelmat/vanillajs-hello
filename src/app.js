/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  let employees = "company-x";
  let worker = " ";

  let person1 = {
    name: "Juana",
    job: "cleaner",
    age: 55,
    dept: "cleaning",
    skills: ["gardening", "decoration", "ironing"],
    imageUrl: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
  };
  let person2 = {
    name: " Aroa",
    job: "cleaner",
    age: 45,
    dept: "cleaning",
    skills: ["hairdressing", "laundry", "ironing"],
    imageUrl: "https://img.freepik.com/free-photo/headshot-charismatic-pleasant-friendly-european-woman-short-chestnut-haircut-smiling-positive-feeling-happy-upbeat-enjoying-lifes-casually-talking-friends-amused-cheerful-standing-white-background_176420-34680.jpg"
  };
  let person3 = {
    name: "Diana",
    job: "cleaner",
    age: 37,
    dept: "cleaning",
    skills: ["organizing", "dry-cleaning", "laundry"],
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBuTVFbHHQQyrIavVjSNPvxJFypaTuXSP8hll747I5Q&s"
  };
  let person4 = {
    name: "Diego",
    job: "Head of Manteinance",
    age: 45,
    dept: "Manteinance",
    skills: ["organizing", "admin", "electricity", "plumbing", "construction"],
    imageUrl: "data:image/jpeg;base64,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"
  };
  let person5 = {
    name: "Juan",
    job: "electrician",
    age: 40,
    dept: "manteinance",
    skills: ["electricity", "cabling", "domotics"],
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2gMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGAwQFBwj/xAA5EAABAwIEAwUGBQIHAAAAAAABAAIDBBEFEiFBBjFREyJhcYEHFCMysdEVM0KRwaHhNFJicoLC8P/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACERAQACAgMAAwADAAAAAAAAAAABAgMREiExE0FRBCJh/9oADAMBAAIRAxEAPwD1UFO9lBO6DJdCimgYKYKiE0ErpXSSugldIlJIoJXRdYpJGRMdJK9rI2i5c42A9VQOJvafRYfI+lwmP3yZuhmJtEPLc/RNpiHol0idL7LwGp9oXEdXI4jEDCL6NhY1tvLRc1uPY06d08WK1XbE968psfTkomU8X0gHXTuvDsG4/wAco5muq3mpyizmP/UPuvROFuN6DiCdtJ2UlPV5S7I4gg26H7psmultui6xgp3UuWQFO6xgp3QZAU8yxgp3QZMyLrHdO6DICmCsd1IFBO6FEFF0GjdSaVjUmoMgKkoBSQMJqKaBlJBKSBqL3ZWEnkBdNV7jvGhgnDdVOHETyNMUNtnHf0QeScf8X1eM4hJA6QtoIHlscUb+68/5ndfBVA1Ha6MII6ck3Pa4hjRqdBuurQ8MTTtDnuyk/uq5vEerq0m3jgyShkmZryHDZb8E0fvTI5OTho6/LzVrpuC4p23fI7N1spO9njybsqB4ZhZcfNRZ8N1bfUxU73Nec5HK51/dZsOxR0dY2WJ7o5GnuTMOVzfUK3M9nsLqf4k0hmI6aLgYrwFiFEx8kVpGN17qRlp+k4rx9PT+B+LziOagxOcOq26seRbtBb6q7NN9QQQvmfDZ6mkr6Z8rXskpzrsbDkvozCatldhtNVwuzMljDmnwKtrKi0abqaSa6cGEJJoGE1FNA07pIQSBTuooQaSkFEKQKCYTCimEEwhRCd0AUbJFCAXn/toe5vDFO1pFn1TQf2Kv6onthgEvC7JCfyp2kDqeSiUx68h4apWVGJMe4DK09V6bTUzABoAqFwdA59RLKG/DZbVXltbDEPmud7W09Tosmbc26bsOor27dLExgW6A3um264tDi1A+RrHVLGvOmVzhr68j6LuhrZWR9k4EFwOiq1Mer9xPjbja0m55InhieO7Y36hYi5ucl8rGNb1KBW0QF2VkTvEOuP35BRqUbh5v7ScNZDU09VCy12lrrDorv7KZ5J+EImyG/Yyvjbrte/8AKr/tDOfC2TtF2B4GduoF9F3PZSzs+HZW6f4l1rHwC14e6sX8iP7Ls3kmogqSvZzQhCBhNJCBppIQSQkmg0gmEgmEEk0k0DQhCAQkhA1TvaRUU02ESYTM13aVERkbIBcR2OhI81cFQuOwYMYjqJNY3UhaGnwdr9VXktNa7hbhpF7al5/gGeOnMdA1zmSEiSSSzSxw2AF7rq4Th9E+KRtdJJM8Rl+XNbxNuvLxSwSAwUbnZO8+Vzy0eJOi7ENDTuo/eY253/I4k2Jvt/TkqYt9tXDrTjzUOESRNlpS+JmbK7PfQ+ZHgu5wnNWVVW+jbWPYIrBjw1hzi1wTcHwVexGnLo+wjhbDBnz8ycx8lZ+CqFsNXHlDmmwNr66DcqLWjSaUmLduXidPJJUTNr6qQCN5b2bRfO6/MjyUsJbSVD3ubjNX3QB8RtmtPTl9FYuIMLtiHZse8e8d+PMdLg6tH2WnhmB00ULqV7D8R4c9jibFw5JyjSOEzO2rxRTyDh2sifM2ocWh3cH5guNfAg7qy+zeGGDhWlEZJkkvJLfmHE8vS1lr8QQNODzUjG5XviIuObWjUn+PMrp4GWU5o6WBgZG6mvYbEW+5/ddUyalxfHuJ/wAd7dO6jfVSWljSCaiE0DTSCaBoSTQSQkEINMJhATCBppJhAIQhAkIQgFWePMPbWYbHKbjsnEEjZp/uArMsc8Mc8Topmh0bxZwO65tXlGneO/C0S8ooCY5J4XuDnNcHX5XuPuF1DFGYXFl2gjvEOtfzWLi/DosExWB9O93ZVMRBDtcpadj/AMlya+srJcFh/D29+YHORzAFtB6lZLVmOnoUvWY2yQiGSYuB7oP5jzorTw32fbtex7XbXBXmMFLX4jGA2qjaBzGfkrBgVJjVFmZSVVO6Vw7hc7knCHXOZ+npeJUsdXH2cuV7Qbixs5p6g7LmUMDX1RgNZO2SI6sflJttqRquJTYZj8cjKqpxRj9SSGk6X10XOOKV8uIwzsnin7KTLniGjhcAsJ/9qkxrsif1dcehZT4dK2MXkkysLnG5JcbDX1WzgNJJF3phZzGFoF72uevlZc+um98xKior6uma51+jQX/9VZomCNtgb63K7xV3PJnzZONZr+siaiE1qYkgpKITugYTCSEEkJJoGmkhBqhNJNAKQUUwgaSZSQCSEIBCSEFM9p0IOGUlURcQzWd5OH3AVLwWqbTulic74ZdnjO4O69L40gbUcPzxvFwXN+q8ajdJRzup53Wy6g9VRljtqwzqFoo4KeCqdW0sLA6X8xhHdcetlccLx1kZif8AhsZcDclumtrX5KhwTRSRWY8gW53UqOkr3SBza90cV7Al5uVXEy1TFZ+npda+oxGldTmCOCnkaA5zXd4Dz23XJqKOlw+miipIWtii+Rlubtv66+inhtSKeib7zO55Atmcb3XMxfFY5JXNiu4sOVjRqXOXNpmTqrc4XYarG5JnEP7CLV3+p2n0BVyC4vCuGOw3C2dqb1E57SUjqdvRdla6RqunnZLcrSkmEkwunBphIJoJISTQNCSaCSEkINcJ7phCBJoQgCkmgoIoTSQJCZUQQ4gA80HK4nF8FqD0y/VeZYnh0VYBnuHD5Xjm1WLGcTrqnE62CaV7YGPMbYRo2w3PUrTYzMdVkyX3bcN2KkxTUqXLBV4e8Z87o76PZ/K2PxpzMoIeLciWlW007JRkkbceS6OGcP4dUOHvEIeANASbJFon0mto8lT/AMYrcScyClZLILABrW6K3cN8PPom++1789Tlu0bR36eKsVHhVFRttS00cdzsNVmnGVhCi1vxNY366FNpBH/sH0WVVymxySCqbDVND6YkNDmjVg/kKzyQvjNnC+9wtNLRaOmPJSaz2gE0kwu3CSEkIJhCiEIJoSui6BoQEIIIQmAgSEyEkCKEFDQXHQII3S72wK2BGBtqjKg1HRud8xKlG23os5akBY6KRTeLcIeyoOIwMLo3j41v0kfq8lwodTfRepZQ76WVcxLhRj3GXDXNicecT/l9Dss2TF3uGrFmiI1ZXBGLtIXawxuUAjdarMMrKcltVTSMt+oC7T6hbVMREbHS2xVWpj1duJh1xysteq1CnC4y3yBz7bMaSf6LcgwmqqTeRvYM6v1P7JxmXPKtfZcDD8MdX4iyAN7gOaR3Rv8Afkr9I1txpqByWOjo4KCHs4W6n5nHm49SsrtytOOnCNM2bJ8ktKWBpN7WK1nxub4rovCxFmbwVqpo7prcdTMcOhWtLC+Pa46qBBCV00DBTUUIJAp3UQhBKyYQEIEi2tkysT32cLbIJBmuqzsbpfom1t42vG6kPBSERcXCiDdTabGyT221QRyqFrFZAUHVBBotyWVp6qDQszQoE2EbFTyR8yxp8wFABSCDK0gchbyTLhssQUggY5poQgg4JALIQlbVBFItBFiNFI/MmdBdSOfU0/Z95urfotddd7M7HN6hcc90lvRQGhJCBoSQgzbJhCECK1XJoQb1Cc1KL7Eoafi2QhSJSaapjVguhCgRKSEIJNWRqEIMoCdkkIGmEIQSTQhAigIQgX6wiX5HeSEIHsFyasBs7rdU0IMKEIQCEkIP/9k="
  };
  let person6 = {
    name: "Albaro",
    job: "worker",
    age: 35,
    dept: "manteinance",
    skills: ["construction", "heavy-duty", "safety"],
    imageUrl: "data:image/jpeg;base64,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"
  };

  let workers = [person1, person2, person3, person4, person5, person6];
  workers.map(item => {
    console.log(item.name);
    item.skills.map(element => {
      console.log(" " + element);
    });
  });


  const tag = document.querySelector('#list')
  tag.className = 'text-primary alert-danger p-4'

  let text = ''
  workers.map((item) => {
    text += `<h2 class="text-danger">${item.name}, ${item.age}, ${item.job}</h2>`
    text += '<ul class="list-group">'
    item.skills.map((element) => {
      text += `<li class="list-group-item">${element}</li>`
    })
    text += '</ul>'
  })


  tag.innerHTML = text
  console.log(tag.innerHTML)

  const myCard = document.querySelector('#card')
  console.log(myCard)

  let textHTML = '';
  workers.map((item, id) => {
      textHTML += `<div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <img src="${item.imageUrl}" class="img-fluid">
              <h6 class="card-subtitle mb-2 text-body-secondary">${item.dept}</h6>
              <p class="card-text">Age: ${item.age}</p>
              <p class="card-text">Skills: ${item.skills}</p>
          </div>
      </div>`;
  });
  myCard.innerHTML = textHTML;

};