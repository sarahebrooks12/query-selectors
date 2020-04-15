// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
// Google tip: Find info about classList

function changeText() {
    let articleHeader = document.querySelector('.article__header');
    articleHeader.textContent = "Welcome to Sarah's Blog!!!!!!";
    let classHeaders = document.querySelectorAll(".article__header");
    console.log(classHeaders)
    for(let i = 0; i < classHeaders.length; i++){
        classHeaders[i].classList.add("important");
        let classFooters = document.querySelectorAll(".article__footer");
        console.log(classFooters)
        for(let i = 0; i < classFooters.length; i++){
            classFooters[i].classList.add("goldenrod");
            let dashed = document.querySelectorAll(".dashed");
           dashed[i].classList.remove("dashed")
}
    }
}

changeText()