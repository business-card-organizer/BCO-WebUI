class Person {
  constructor(person)
  {
    this.name = person.name;
  }
}

class TeamMember extends Person {
  constructor(member)
  {
    super(member);
    this.role = member.role;
    this.img = member.img;
    this.render();
  }

  init(){

  }

  render(){
    // console.log("test");
    let divContainer = document.querySelector("#team .container");
    let content_container = this.checkElement();
    let content_wrapper = document.createElement("div");
    content_wrapper.classList.add("content-wrapper");
    let memberImg = document.createElement("img");
    memberImg.classList.add("img-circle");
    memberImg.classList.add("img-responsive");
    memberImg.setAttribute("src", this.img);
    let memberName = document.createElement("h3");
    memberName.appendChild(document.createTextNode(this.name));
    let memberRole = document.createElement("code");
    memberRole.appendChild(document.createTextNode(this.role));
    content_container.appendChild(content_wrapper);
    content_wrapper.appendChild(memberImg);
    content_wrapper.appendChild(memberName);
    content_wrapper.appendChild(memberRole);
    divContainer.appendChild(content_container);
  }

  checkElement()
  {
    let content_container = document.querySelector("#team .content-container");
    if(content_container === null)
    {
      content_container = document.createElement("div");
      content_container.classList.add("content-container");
      return content_container;
    }
    let content = content_container.querySelectorAll(".content-wrapper");
    if(content.length < 3){
      return content_container;
    }
    content_container = document.querySelector("#team .content-container.bottom");
    if(content_container == null) {
      content_container = document.createElement("div");
      content_container.classList.add("content-container");
      content_container.classList.add("bottom");
      return content_container;
    }
    return content_container;
  }
}

const alejandro = new TeamMember({
  name: "Jose Alejandro Mejia",
  role: "Web UI Developer",
  img: "img/14102541_679140405567831_3053663963574060014_n.jpg"
});


const marina = new TeamMember({
  name: "Marina Baskova",
  role: "Backend Developer",
  img: "https://avatars0.githubusercontent.com/u/42049915?s=460&v=4"
});

const david = new TeamMember({
  name: "David Clavijo",
  role: "Frontend Developer",
  img: "https://media.licdn.com/dms/image/C4E03AQEr4kof4UeelA/profile-displayphoto-shrink_800_800/0?e=1564012800&v=beta&t=8ZzXWLrl9YhzkKVxEKIjDXqBV8jiho-0xsFH_FDjIug"
});

const matthew = new TeamMember({
  name: "Matthew Lewis",
  role: "Frontend Developer",
  img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
});

const richard = new TeamMember({
  name: "Richard Scott Prins",
  role: "Web UI Developer",
  img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
});

const laryna = new TeamMember({
  name: "Laryna Billinghurst",
  role: "Scrum Master",
  img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
});

// const laryna2 = new TeamMember({
//   name: "Laryna Billinghurst",
//   role: "Scrum Master",
//   img: "http://dummyimage.com/450x450/d9dadc/1c1f24.png&text=+"
// });

// console.log(laryna.name);

