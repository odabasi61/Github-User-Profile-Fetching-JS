const base_url = 'https://api.github.com/users/'
// console.log(url)
const input = document.querySelector('.search')
const buton = document.querySelector('.buton')
const userContainer = document.querySelector('.user-container')
console.log(userContainer)

console.log(buton)
buton.addEventListener('click', () => {
  getUser()
})

// fetch then yapısı

// function getUser(user) {
//   const url = base_url + user
//   // https://api.github.com/users/bengin34
//   try {
//     fetch(url).then(res => res.json().then(data => console.log(data)))
//   } catch (error) {
//     console.log(error)
//   }
// }
// getUser()

// bengin34
// async await yapısı

async function getUser() {
  const url = base_url + input.value

  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    const {
      avatar_url,
      followers,
      followers_url,
      following,
      following_url,
      html_url,
      public_repos,
      id,
      login,
      user,
    } = data

    userContainer.innerHTML = `
 

    <div class="card" style="width: 24rem;">
      <img src=${avatar_url} class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title text-center">${login}</h3>
        <div class="row my-4">
          <div class="col-4">
            <h5 class=" text-bg-danger rounded-3 py-2 text-center">repos</h5>
            <p class="text-center fw-bolder fs-4">${public_repos}</p>
          </div>
          <div class="col-4">
            <h5 class=" text-bg-danger rounded-3 py-2 text-center">followers</h5>
            <p class="text-center fw-bolder fs-4">${followers}</p>
          </div>
          <div class="col-4">
            <h5 class=" text-bg-danger rounded-3 py-2 text-center">following</h5>
            <p class="text-center fw-bolder fs-4">${following}</p>
          </div>

        </div>

        <div class="text-center">

          <a href=${html_url} target="_blank" class="btn btn-primary">Github Profile</a>
        </div>
      </div>
    </div>   `
    getFollowings(followers_url)
  } catch (error) {
    userContainer.innerHTML = `<h1 class="text-danger" >${data.message}</h1>`
  }
}
// getUser()

async function getFollowings(followers_url) {
  try {
    const res = await fetch(followers_url)
    const followers = await res.json()
    console.log(followers)

    followers.forEach(user => {
      console.log(user.login)
    })
  } catch (error) {
    console.log(error)
  }
}