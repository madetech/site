export default function initGists () {
  document.querySelectorAll('.gist').forEach((gist) => {
    const callbackName = 'c' + Math.random().toString(36).substring(7)

    window[callbackName] = ({ div, stylesheet }) => {
      gist.innerHTML += '<link rel="stylesheet" href="' + encodeURI(stylesheet) + '">'
      gist.innerHTML += div
    }

    const script = document.createElement('script')
    script.setAttribute('src', `${gist.dataset.src}?callback=${callbackName}`)
    document.body.appendChild(script)
  })
}
