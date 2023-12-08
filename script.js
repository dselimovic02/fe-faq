let questions = document.querySelectorAll(".question");

questions.forEach(question => {
    let img = question.querySelector("img");
    question.addEventListener("click", () => {
        if (img.src.includes("minus"))
            img.src = "assets/images/icon-plus.svg";
        else
            img.src = "assets/images/icon-minus.svg";
    });
});