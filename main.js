const linksSocialMedia = {
  github: 'EuTavares',
  discord: 'BR5ybvDFSr',
  linkedin: 'in/eutavares',
  instagram: '_eutavares_',
  twitter: 'L33NH0M99'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //fetch pega e o then transforma, caso tenha mais de uma propriedade usar {}
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//
//It also supports NodeList
VanillaTilt.init(document.querySelector('main'), {
  max: 10,
  speed: 200
})
