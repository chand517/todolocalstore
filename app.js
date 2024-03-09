// function addtodo(){
//   var show = document.getElementById('show')
//   var usertext = document.querySelector('#usertext')
//   show.innerHTML=`<li>${usertext.value}
//     <button onclick='editbtn()'> Edit</button>
//     <button onclick='delbtn()'>Delete</button>
//     </li>`
// }

// function delbtn(){
//       event.target.parentNode.remove()
//     }
//     function editbtn(){
//       var oldText= event.target.parentNode.firstChild.nodeValue
//       var edittext= prompt('enter Your value update' , oldText)
//       event.target.parentNode.firstChild.nodeValue=edittext
//     }


// function addtodo(){
//     var usertext = document.querySelector('#usertext')
//     var li = document.createElement('li')
//     var editbtn = document.createElement('button')
//     var delbtn = document.createElement('button')
//     editbtn.innerText="Edit"
//     delbtn.innerText="Delete"
//     delbtn.setAttribute('onclick', 'delbtn()')
//     editbtn.setAttribute('onclick', 'editbtn()')
//     li.append(usertext.value)
//     li.appendChild(editbtn)
//     li.appendChild(delbtn)
//     show.prepend(li)
//     usertext.value =''
   
//  }
 
//  function delbtn(){
//    event.target.parentNode.remove()
//  }
//  function editbtn(){
//    var oldText= event.target.parentNode.firstChild.nodeValue
//    var edittext= prompt('enter Your value update' , oldText)
//    event.target.parentNode.firstChild.nodeValue=edittext
//  }