const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const h1 = document.createElement('h1')
  const tempSpan = document.createElement('span')

  headerDiv.className = 'header'
  dateSpan.className = 'date'
  tempSpan.className = 'temp'

  dateSpan.textContent = date
  h1.textContent = title
  tempSpan.textContent = temp

  headerDiv.append(dateSpan)
  headerDiv.append(h1)
  headerDiv.append(tempSpan)

  return headerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerDiv = document.querySelector(selector)
  headerDiv.appendChild(Header('Lambda Times', 'June 11, 2021', '61*F'))
  return headerDiv
}

export { Header, headerAppender }
