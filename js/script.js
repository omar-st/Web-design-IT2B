function changePic1() {

    var pic = document.getElementById("img1");
    pic.src = "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Royal_bedroom_Salon_de_Mercure_Grand_appartement_du_roi_Palace_of_Versailles_France.jpg/1280px-Royal_bedroom_Salon_de_Mercure_Grand_appartement_du_roi_Palace_of_Versailles_France.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail";
    changeTitle("title1");
    changeContent("content1")

}

function changePic2() {

    var pic = document.getElementById("img2");
    pic.src = "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Escalier_priv%C3%A9_de_Louis_XV_-_DSC_0398.JPG/1920px-Escalier_priv%C3%A9_de_Louis_XV_-_DSC_0398.JPG?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail";
    changeTitle("title2");
    changeContent("content2");
}

function changePic3() {

    var pic = document.getElementById("img3");
    pic.src = "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Louvre_-_%C3%89l%C3%A9vation_de_la_fa%C3%A7ade_du_c%C3%B4t%C3%A9_de_la_rue_St_Honor%C3%A9_-_Architecture_fran%C3%A7oise_Tome4_Livre6_Pl16.jpg/3840px-Louvre_-_%C3%89l%C3%A9vation_de_la_fa%C3%A7ade_du_c%C3%B4t%C3%A9_de_la_rue_St_Honor%C3%A9_-_Architecture_fran%C3%A7oise_Tome4_Livre6_Pl16.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail";
    changeTitle("title3");
    changeContent("content3");

}

function changeTitle(elementID) {
    var title = document.getElementById(elementID);
    if (elementID == "title1") {
        title.textContent = "Versailles Palace";
    } else if (elementID == "title2") {
        title.textContent = "Stairway";
    } else {
        title.textContent = "Technical Drawing";
    }
}

function changeContent(elementID) {
        var ArticleContent = document.getElementById(elementID);
    if (elementID == "content1") {
        ArticleContent.innerHTML = "<p> <b>The Palace of Versailles</b> is a historic monument in Versailles, Yvelines, France. It is southwest of Paris. It served as the principal residence of the French kings, Louis 14 to 16, From 6May 1682 to 6Oct 1789. Conceived by Louis XIV to glorify the French monarchy, the palace became the most important architectural project of his reign and is considered one of the masterpieces of French classical architecture.</p>";
    } else if (elementID == "content2") {
        ArticleContent.innerHTML = "<p><b>Stairway to Heaven</b> is a song by the English rock band Led Zeppelin, released on 8 November 1971 on the band's untitled fourth studio album (commonly known as Led Zeppelin IV), by Atlantic Records.";
    } else {
        ArticleContent.innerHTML = "<p><b>Technical drawing,</b> or <b>drafting,</b> is the act and discipline of composing drawings that visually communicate how something functions or is constructed. The need for precise communication in the preparation of a functional document distinguishes technical drawing from the expressive drawing of the visual arts.";
    }
}



