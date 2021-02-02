const BASE_API = 'http://localhost:3000';
const blog_container = document.getElementById('blog-container');

var vOneLS = localStorage.getItem("vOneLocalStorage");  
var token = vOneLS;
console.log(vOneLS)

const init = async () => {
  const blogData = await _fetchBlogs();
  _injectBlogToDom(blogData);
  // location.reload();
}
// const _fetchToken = async() => {
//   let tokenKey = await fetch(`${BASE_API}/user/login`);
//   tokenKey = await tokenKey.json();
//   return tokenKey.token;
// }
const _fetchBlogs = async () =>  {
  let response =  await fetch(`${BASE_API}/blog`,{
    headers: {
      Authorization: `${token}`
    }
  });
  response = await response.json();
  return response.details
}

const _injectBlogToDom = (blogs) => {
  let blog_template_holder = '';

  blogs.forEach(blog => { 
   blog_template_holder += 
   ` <div class="card rounded my-5">
      <h5 class="card-header bg-warning">${blog.Headline}</h5>
      <div class="card-body bg-light">
      <div class="card-text">
        ${blog.Para}
      </div>
    </div>
    </div>
    `
  });

  blog_container.innerHTML = blog_template_holder;
  // console.log(blog_template_holder);
}


init();

function Submission() {
  const title = document.getElementById('topic').value
  const body = document.getElementById('about').value

  const data = { "headline" : title, "para" : body };
  console.log(data,'<==');
  fetch('http://localhost:3000/blog',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}