const loadAllPosts = async(category) =>{


    // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)

    // if(category){
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    // }else{
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    // }
    

    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
    const data = await response.json();
    displayAllPost(data.posts);
}

const displayAllPost = (posts) =>{
    //console.log(posts)
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        // console.log(post)
        const div =document.createElement('div');
        div.innerHTML=`

        <div class="p-6 lg:p-12 flex gap-6 lg:flex-row flex-col items-center lg:items-start bg-[#F3F3F5] rounded-3xl">
  <div class="indicator">
    <span class="indicator-item badge ${post.isActive ? "bg-green-600":"bg-red-500"}"></span>
    <div class="avatar">
    <div class="w-24 rounded-xl">
      <img src=${post.image}/>

    </div>
  </div>
 </div>
 <div class="space-y-4 w-full">
  <div class="flex gap-4 *:opacity-60">
    <p> # category</p>
    <p>Author : auther.name</p>

  </div>
  <h3 class="text-2xl font-bold opacity-70">title</h3>
  <p class="opacity-40">
    description
  </p>
  <hr class="border border-dashed border-gray-300">
  <div class="flex justify-between *:font-bold [&>*:not(:last-child)]:opacity-45">
    <div class="flex gap-4">
      <div class="space-x-2 flex items-center">
        <i class="fa fa-regular fa-comment-dots"></i>
        <p>comment_count</p>
      </div>
      <div class="space-x-2 flex items-center">
        <i class="fa fa-regular fa-eyes"></i>
        <p>view_count</p>
      </div>
      <div class="space-x-2 flex items-center">
        <i class="fa fa-regular fa-clock"></i>
        <p>posted_time Min</p>
      </div>

    </div>
    <div class="opacity-100">
      <button id="addToList" onclick="markAsRead()" data-post='${JSON.stringify(post)}' class="addToList btn btn-circle bg-green-500 btn-sm">
        <i class="fa-solid fa-envelope-open text-white"></i>
      </button>
    </div>
  </div>
 </div>
 </div>
        `
        postContainer.appendChild(div)
    });
}


loadAllPosts();

const handleSearchByCategory =() =>{
    const searchText = document.getElementById("searchPosts").value;
    loadAllPosts(searchText);
    // console.log(searchText);
}