(function() {

    let letterContainer = document.getElementById("target");

    let letters = letterContainer.innerText;

    letters = letters.split("");

    let base = 0
    let size = ["13px", "14px", "16px", "18px", "20px", "22px"];



   function createLetter(){
    letterContainer.innerText = "";

    letters.forEach(function(letter, i) {
      // if(base <= size.length){
        let wrap = document.createElement("span");
        wrap.innerText = letter;
        wrap.style.position = "relative";
        // for (let elements of size) {
        //   wrap.style.fontSize = elements + "px";
        // elements++;
        //console.log(elements);
        //}
        wrap.style.fontSize = size[base]



        console.log(wrap)

        letterContainer.appendChild(wrap);
        base = base + 1
      // }
    })
   }
   createLetter()



   function growLetter(){
    let spans = Array.from(document.querySelectorAll("#target span")).reverse()
    console.log(size.includes(spans[spans.length - 1].style.fontSize))
    if(size.includes(spans[spans.length - 1].style.fontSize)){
      spans[0].style.fontSize = spans[spans.length - 1].style.fontSize
    }

    spans.forEach(function(span, index){
      // console.log(index)
      span.style.fontSize = spans[index + 1].style.fontSize
    })

   }
   setInterval(growLetter, 500);


})();
